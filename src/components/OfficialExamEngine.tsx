"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import ProgressBar from "./ProgressBar";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";
import { QuestionData } from "@/data/officialQuestionBank";

const shuffle = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export interface ExamQuestion extends QuestionData {
  options: string[];
  correctOptionIndex: number;
}

type ExamState = 'INTRO' | 'SET_A' | 'TRANSITION' | 'SET_B' | 'REVIEW';

export default function OfficialExamEngine({ questionsData, mode = 'Both' }: { questionsData: QuestionData[], mode: string }) {
  const { user } = useAuth();
  const [examState, setExamState] = useState<ExamState>('INTRO');
  
  const [setA, setSetA] = useState<ExamQuestion[]>([]);
  const [setB, setSetB] = useState<ExamQuestion[]>([]);

  const [answersA, setAnswersA] = useState<Record<number, number>>({});
  const [answersB, setAnswersB] = useState<Record<number, number>>({});

  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5400); // 90 mins in seconds
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const prepareSet = (qData: QuestionData[]) => {
      return qData.map(q => {
        const allOptions = shuffle([q.correctAnswer, ...q.incorrectAnswers]);
        const correctIndex = allOptions.indexOf(q.correctAnswer);
        return { ...q, options: allOptions, correctOptionIndex: correctIndex };
      });
    };
    
    const questionsA = questionsData.filter(q => q.setId === 'A');
    const questionsB = questionsData.filter(q => q.setId === 'B');
    
    // Select up to 100 for A and up to 100 for B
    setSetA(shuffle(prepareSet(questionsA)).slice(0, 100));
    setSetB(shuffle(prepareSet(questionsB)).slice(0, 100));
  }, [questionsData]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if ((examState === 'SET_A' || examState === 'SET_B') && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && (examState === 'SET_A' || examState === 'SET_B')) {
      handleTimeUp();
    }
    return () => clearInterval(timer);
  }, [examState, timeLeft]);

  const handleTimeUp = () => {
    if (examState === 'SET_A') {
      if (mode === 'A') finishExam();
      else setExamState('TRANSITION');
    } else if (examState === 'SET_B') {
      finishExam();
    }
  };

  const startSetA = () => {
    setExamState('SET_A');
    setCurrentIndex(0);
    setTimeLeft(5400);
  };

  const startSetB = () => {
    setExamState('SET_B');
    setCurrentIndex(0);
    setTimeLeft(5400);
  };

  const handleAnswer = (index: number) => {
    if (examState === 'SET_A') {
      setAnswersA(prev => ({ ...prev, [currentIndex]: index }));
    } else if (examState === 'SET_B') {
      setAnswersB(prev => ({ ...prev, [currentIndex]: index }));
    }
  };

  const goNext = () => {
    const currentSet = examState === 'SET_A' ? setA : setB;
    if (currentIndex + 1 < currentSet.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      if (examState === 'SET_A') {
        if (mode === 'A') {
          finishExam();
        } else {
          setExamState('TRANSITION');
        }
      } else if (examState === 'SET_B') {
        finishExam();
      }
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? h + ':' : ''}${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const calculateScore = (set: ExamQuestion[], answers: Record<number, number>) => {
    let score = 0;
    set.forEach((q, i) => {
      if (answers[i] === q.correctOptionIndex) score++;
    });
    return set.length > 0 ? Math.round((score / set.length) * 100) : 0; 
  };

  const calculateCategoryScores = () => {
    const categoryScores: Record<string, { correct: number, total: number }> = {};
    
    const processSet = (set: ExamQuestion[], answers: Record<number, number>) => {
      set.forEach((q, i) => {
        if (!q.category) return;
        if (!categoryScores[q.category]) {
          categoryScores[q.category] = { correct: 0, total: 0 };
        }
        categoryScores[q.category].total += 1;
        if (answers[i] === q.correctOptionIndex) {
          categoryScores[q.category].correct += 1;
        }
      });
    };

    if (mode === 'A' || mode === 'Both') processSet(setA, answersA);
    if (mode === 'B' || mode === 'Both') processSet(setB, answersB);

    return categoryScores;
  };

  const finishExam = async () => {
    setExamState('REVIEW');
    if (!user) return;
    
    setSaving(true);
    try {
      const scoreA = (mode === 'A' || mode === 'Both') ? calculateScore(setA, answersA) : null;
      const scoreB = (mode === 'B' || mode === 'Both') ? calculateScore(setB, answersB) : null;
      const categoryScores = calculateCategoryScores();
      
      let passedA = null;
      let passedB = null;
      let passedOverall = false;
      
      if (mode === 'Both') {
        passedA = scoreA! >= 50;
        passedB = scoreB! >= 50;
        passedOverall = passedA && passedB;
      } else if (mode === 'A') {
        passedA = scoreA! >= 50;
        passedOverall = passedA;
      } else if (mode === 'B') {
        passedB = scoreB! >= 50;
        passedOverall = passedB;
      }
      
      await addDoc(collection(db, "usersREVIEWER", user.uid, "historyOFFICIAL"), {
        scoreA,
        scoreB,
        passedA,
        passedB,
        passedOverall,
        mode,
        userEmail: user.email || 'unknown',
        categoryScores,
        timestamp: serverTimestamp()
      });
    } catch (e) {
      console.error("Error saving official exam history", e);
    } finally {
      setSaving(false);
    }
  };

  if (examState === 'INTRO') {
    return (
      <div className="glass-card" style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'var(--primary-color)' }}>Official Practice Exam</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          {mode === 'Both' ? 'This exam consists of 200 items split into two sets based on official material.' : `This exam consists of 100 items from Set ${mode}.`}
        </p>
        <ul style={{ textAlign: 'left', margin: '0 auto 2rem auto', maxWidth: '400px', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
          {(mode === 'Both' || mode === 'A') && <li><strong>Set A (1.5 Hours):</strong> 100 items based on official material.</li>}
          {(mode === 'Both' || mode === 'B') && <li><strong>Set B (1.5 Hours):</strong> 100 items based on official material.</li>}
          <li><strong>Passing Score:</strong> You must score at least 50% {mode === 'Both' ? 'on both sets independently ' : ''}to pass.</li>
        </ul>
        <button onClick={mode === 'B' ? startSetB : startSetA} className="btn btn-primary" style={{ padding: '1rem 3rem', background: 'linear-gradient(135deg, #10b981, #059669)', border: 'none' }}>
          Begin Exam
        </button>
      </div>
    );
  }

  if (examState === 'TRANSITION') {
    return (
      <div className="glass-card" style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'var(--success-color)' }}>Set A Completed!</h2>
        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          You have successfully completed Set A. Take a deep breath. Click below when you are ready to begin Set B (1.5 Hours).
        </p>
        <button onClick={startSetB} className="btn btn-primary" style={{ padding: '1rem 3rem', background: 'linear-gradient(135deg, #10b981, #059669)', border: 'none' }}>
          Begin Set B
        </button>
      </div>
    );
  }

  if (examState === 'REVIEW') {
    const scoreA = mode !== 'B' ? calculateScore(setA, answersA) : null;
    const scoreB = mode !== 'A' ? calculateScore(setB, answersB) : null;
    
    let passed = false;
    if (mode === 'Both') passed = scoreA! >= 50 && scoreB! >= 50;
    else if (mode === 'A') passed = scoreA! >= 50;
    else if (mode === 'B') passed = scoreB! >= 50;

    return (
      <div>
        <div className="glass-card" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Exam Results</h2>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', margin: '2rem 0' }}>
            {mode !== 'B' && (
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: scoreA! >= 50 ? 'var(--success-color)' : 'var(--error-color)' }}>{scoreA}%</div>
                <div>Set A Score</div>
              </div>
            )}
            {mode !== 'A' && (
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: scoreB! >= 50 ? 'var(--success-color)' : 'var(--error-color)' }}>{scoreB}%</div>
                <div>Set B Score</div>
              </div>
            )}
          </div>
          
          <h3 style={{ color: passed ? 'var(--success-color)' : 'var(--error-color)', fontSize: '2rem' }}>
            {passed ? "PASSED! 🎉" : "FAILED ❌"}
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            {passed ? "Congratulations! You met the 50% passing mark." : "Keep studying! You must score 50% or above to pass."}
          </p>
          
          {saving && <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Saving results to dashboard...</p>}
        </div>

        {mode !== 'B' && (
          <>
            <h3 style={{ marginBottom: '1.5rem' }}>Detailed Review (Set A)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          {setA.map((q, i) => (
            <div key={i} className="glass-card" style={{ borderLeft: answersA[i] === q.correctOptionIndex ? '4px solid var(--success-color)' : '4px solid var(--error-color)' }}>
              <p><strong>Q{i+1}: {q.text}</strong></p>
              <p style={{ color: answersA[i] === q.correctOptionIndex ? 'var(--success-color)' : 'var(--error-color)', margin: '0.5rem 0' }}>
                Your Answer: {answersA[i] !== undefined ? q.options[answersA[i]] : 'No Answer'}
              </p>
              {answersA[i] !== q.correctOptionIndex && (
                <p style={{ color: 'var(--success-color)', marginBottom: '0.5rem' }}>Correct Answer: {q.options[q.correctOptionIndex]}</p>
              )}
              <div style={{ padding: '1rem', backgroundColor: 'var(--background-color)', borderRadius: '8px', marginTop: '1rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                <strong>Rationale:</strong> {q.rationale}
              </div>
            </div>
            ))}
            </div>
          </>
        )}

        {mode !== 'A' && (
          <>
            <h3 style={{ marginBottom: '1.5rem' }}>Detailed Review (Set B)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {setB.map((q, i) => (
             <div key={i} className="glass-card" style={{ borderLeft: answersB[i] === q.correctOptionIndex ? '4px solid var(--success-color)' : '4px solid var(--error-color)' }}>
             <p><strong>Q{i+1}: {q.text}</strong></p>
             <p style={{ color: answersB[i] === q.correctOptionIndex ? 'var(--success-color)' : 'var(--error-color)', margin: '0.5rem 0' }}>
               Your Answer: {answersB[i] !== undefined ? q.options[answersB[i]] : 'No Answer'}
             </p>
             {answersB[i] !== q.correctOptionIndex && (
               <p style={{ color: 'var(--success-color)', marginBottom: '0.5rem' }}>Correct Answer: {q.options[q.correctOptionIndex]}</p>
             )}
             <div style={{ padding: '1rem', backgroundColor: 'var(--background-color)', borderRadius: '8px', marginTop: '1rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
               <strong>Rationale:</strong> {q.rationale}
             </div>
           </div>
            ))}
            </div>
          </>
        )}
      </div>
    );
  }

  // Active taking exam state (SET_A or SET_B)
  const currentSet = examState === 'SET_A' ? setA : setB;
  const currentAnswers = examState === 'SET_A' ? answersA : answersB;
  const currentQ = currentSet[currentIndex];
  
  if (!currentQ) return null; // Safe guard

  const progress = ((currentIndex) / currentSet.length) * 100;
  const hasAnswered = currentAnswers[currentIndex] !== undefined;

  return (
    <div className="glass-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <span style={{ fontWeight: 600, color: 'var(--primary-color)', fontSize: '1.1rem' }}>{examState === 'SET_A' ? 'Set A' : 'Set B'}</span>
        <span style={{ fontSize: '1.1rem' }}>Question {currentIndex + 1} of {currentSet.length}</span>
        <div style={{ 
          background: timeLeft < 300 ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)', 
          color: timeLeft < 300 ? 'var(--error-color)' : 'var(--success-color)',
          border: `1px solid ${timeLeft < 300 ? 'var(--error-color)' : 'var(--success-color)'}`,
          padding: '0.5rem 1rem',
          borderRadius: '9999px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '1rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          {formatTime(timeLeft)}
        </div>
      </div>
      <ProgressBar progress={progress} />
      
      <h3 style={{ marginBottom: '2rem' }}>{currentQ.text}</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {currentQ.options.map((opt, i) => (
          <button 
            key={i} 
            onClick={() => handleAnswer(i)}
            className="btn"
            style={{ 
              background: currentAnswers[currentIndex] === i ? 'rgba(16, 185, 129, 0.1)' : '#ffffff', 
              border: currentAnswers[currentIndex] === i ? '2px solid var(--success-color)' : '1px solid #e2e8f0',
              boxShadow: currentAnswers[currentIndex] === i ? 'none' : '0 2px 4px rgba(0,0,0,0.05)',
              borderRadius: '12px',
              textAlign: 'left',
              padding: '1rem 1.5rem',
              color: 'var(--text-primary)',
              transition: 'all 0.2s ease'
            }}
          >
            {opt}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
        <button 
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          className="btn" 
          style={{ background: 'var(--background-color)', border: '1px solid var(--glass-border)' }}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        
        <button 
          onClick={goNext}
          className="btn btn-primary"
          style={{ background: 'linear-gradient(135deg, #10b981, #059669)', border: 'none' }}
          disabled={!hasAnswered}
        >
          {currentIndex === currentSet.length - 1 ? (examState === 'SET_A' && mode === 'Both' ? 'Submit Set A' : 'Finish Exam') : 'Next'}
        </button>
      </div>
    </div>
  );
}
