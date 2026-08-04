"use client";
import { useState, useEffect, useMemo } from "react";
import { useAuth } from "@/context/AuthContext";
import ProgressBar from "./ProgressBar";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { QuestionData } from "@/data/questionBank";

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

export default function ExamEngine({ setAData, setBData }: { setAData: QuestionData[], setBData: QuestionData[] }) {
  const { user } = useAuth();
  const [examState, setExamState] = useState<ExamState>('INTRO');
  
  // Shuffled sets
  const [setA, setSetA] = useState<ExamQuestion[]>([]);
  const [setB, setSetB] = useState<ExamQuestion[]>([]);

  // Answers maps
  const [answersA, setAnswersA] = useState<Record<number, number>>({});
  const [answersB, setAnswersB] = useState<Record<number, number>>({});

  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5400); // 90 mins in seconds
  const [saving, setSaving] = useState(false);

  // Initialize and shuffle questions on mount
  useEffect(() => {
    const prepareSet = (questions: QuestionData[]) => {
      return questions.map(q => {
        const allOptions = shuffle([q.correctAnswer, ...q.incorrectAnswers]);
        const correctIndex = allOptions.indexOf(q.correctAnswer);
        return { ...q, options: allOptions, correctOptionIndex: correctIndex };
      });
    };
    
    // In production, we'd randomly select 100 items from the pool here.
    // For now, we take all available in the provided props.
    setSetA(shuffle(prepareSet(setAData)).slice(0, 100));
    setSetB(shuffle(prepareSet(setBData)).slice(0, 100));
  }, [setAData, setBData]);

  // Timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if ((examState === 'SET_A' || examState === 'SET_B') && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      handleTimeUp();
    }
    return () => clearInterval(timer);
  }, [examState, timeLeft]);

  const handleTimeUp = () => {
    if (examState === 'SET_A') {
      setExamState('TRANSITION');
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
        setExamState('TRANSITION');
      } else {
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
    // Scale score to 100 if the set doesn't have exactly 100 questions (for testing)
    return Math.round((score / set.length) * 100); 
  };

  const finishExam = async () => {
    setExamState('REVIEW');
    if (!user) return;
    
    setSaving(true);
    try {
      const scoreA = calculateScore(setA, answersA);
      const scoreB = calculateScore(setB, answersB);
      
      await addDoc(collection(db, "usersREVIEWER", user.uid, "historyREVIEWER"), {
        scoreA,
        scoreB,
        passedA: scoreA >= 50,
        passedB: scoreB >= 50,
        passedOverall: scoreA >= 50 && scoreB >= 50,
        timestamp: serverTimestamp()
      });
    } catch (e) {
      console.error("Error saving exam history", e);
    } finally {
      setSaving(false);
    }
  };

  if (examState === 'INTRO') {
    return (
      <div className="glass-card" style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'var(--primary-color)' }}>CHRA Full Mock Exam</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          This exam consists of 200 items split into two sets, strictly simulating the actual CHRA exam.
        </p>
        <ul style={{ textAlign: 'left', margin: '0 auto 2rem auto', maxWidth: '400px', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
          <li><strong>Set A (1.5 Hours):</strong> Recruitment, L&D, Compensation, Performance, Job Analysis, Risk.</li>
          <li><strong>Set B (1.5 Hours):</strong> Labor and HR-related laws.</li>
          <li><strong>Passing Score:</strong> You must score at least 50% on Set A <strong>AND</strong> 50% on Set B independently to pass.</li>
        </ul>
        <button onClick={startSetA} className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
          Begin Set A
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
        <button onClick={startSetB} className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
          Begin Set B
        </button>
      </div>
    );
  }

  if (examState === 'REVIEW') {
    const scoreA = calculateScore(setA, answersA);
    const scoreB = calculateScore(setB, answersB);
    const passed = scoreA >= 50 && scoreB >= 50;

    return (
      <div>
        <div className="glass-card" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Exam Results</h2>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', margin: '2rem 0' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: scoreA >= 50 ? 'var(--success-color)' : 'var(--error-color)' }}>{scoreA}%</div>
              <div>Set A Score</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: scoreB >= 50 ? 'var(--success-color)' : 'var(--error-color)' }}>{scoreB}%</div>
              <div>Set B Score</div>
            </div>
          </div>
          
          <h3 style={{ color: passed ? 'var(--success-color)' : 'var(--error-color)', fontSize: '2rem' }}>
            {passed ? "PASSED! 🎉" : "FAILED ❌"}
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            {passed ? "Congratulations! You met the 50% passing mark on both sets." : "Keep studying! You must score 50% or above on both sets independently to pass."}
          </p>
          
          {saving && <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Saving results to dashboard...</p>}
        </div>

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
      </div>
    );
  }

  // Active taking exam state (SET_A or SET_B)
  const currentSet = examState === 'SET_A' ? setA : setB;
  const currentAnswers = examState === 'SET_A' ? answersA : answersB;
  const currentQ = currentSet[currentIndex];
  const progress = ((currentIndex) / currentSet.length) * 100;
  
  const hasAnswered = currentAnswers[currentIndex] !== undefined;

  return (
    <div className="glass-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>{examState === 'SET_A' ? 'Set A' : 'Set B'}</span>
        <span>Question {currentIndex + 1} of {currentSet.length}</span>
        <span style={{ color: timeLeft < 300 ? 'var(--error-color)' : 'inherit' }}>Time: {formatTime(timeLeft)}</span>
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
              background: currentAnswers[currentIndex] === i ? 'rgba(79, 70, 229, 0.1)' : 'var(--surface-color)', 
              border: currentAnswers[currentIndex] === i ? '2px solid var(--primary-color)' : '1px solid var(--glass-border)',
              textAlign: 'left',
              padding: '1rem 1.5rem',
              color: 'var(--text-primary)'
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
          disabled={!hasAnswered}
        >
          {currentIndex === currentSet.length - 1 ? (examState === 'SET_A' ? 'Submit Set A' : 'Finish Exam') : 'Next'}
        </button>
      </div>
    </div>
  );
}
