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

type ExamState = 'INTRO' | 'EXAM' | 'REVIEW';

export default function OfficialExamEngine({ questionsData, mode }: { questionsData: QuestionData[], mode: string }) {
  const { user } = useAuth();
  const [examState, setExamState] = useState<ExamState>('INTRO');
  
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 mins in seconds
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const prepareSet = (qData: QuestionData[]) => {
      return qData.map(q => {
        const allOptions = shuffle([q.correctAnswer, ...q.incorrectAnswers]);
        const correctIndex = allOptions.indexOf(q.correctAnswer);
        return { ...q, options: allOptions, correctOptionIndex: correctIndex };
      });
    };
    const maxItems = mode === 'Both' ? 200 : 100;
    setQuestions(shuffle(prepareSet(questionsData)).slice(0, maxItems));
  }, [questionsData, mode]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (examState === 'EXAM' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && examState === 'EXAM') {
      finishExam();
    }
    return () => clearInterval(timer);
  }, [examState, timeLeft]);

  const startExam = () => {
    setExamState('EXAM');
    setCurrentIndex(0);
    setTimeLeft(3600);
  };

  const handleAnswer = (index: number) => {
    setAnswers(prev => ({ ...prev, [currentIndex]: index }));
  };

  const goNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finishExam();
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? h + ':' : ''}${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctOptionIndex) score++;
    });
    return questions.length > 0 ? Math.round((score / questions.length) * 100) : 0; 
  };

  const finishExam = async () => {
    setExamState('REVIEW');
    if (!user) return;
    
    setSaving(true);
    try {
      const score = calculateScore();
      const passed = score >= 50;
      
      // We log the result to a different collection for official exams
      await addDoc(collection(db, "usersREVIEWER", user.uid, "historyOFFICIAL"), {
        score,
        passedOverall: passed,
        mode,
        userEmail: user.email || 'unknown',
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
        <h2 style={{ color: 'var(--primary-color)' }}>Official Practice Exam: {mode}</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          This exam tests your knowledge on the official reference material. 
          You will have 1 hour to complete the questions.
        </p>
        <button onClick={startExam} className="btn btn-primary" style={{ padding: '1rem 3rem', background: 'linear-gradient(135deg, #10b981, #059669)', border: 'none' }}>
          Begin Exam
        </button>
      </div>
    );
  }

  if (examState === 'REVIEW') {
    const score = calculateScore();
    const passed = score >= 50;

    return (
      <div>
        <div className="glass-card" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Exam Results</h2>
          <div style={{ margin: '2rem 0' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: passed ? 'var(--success-color)' : 'var(--error-color)' }}>{score}%</div>
            <div>Final Score</div>
          </div>
          
          <h3 style={{ color: passed ? 'var(--success-color)' : 'var(--error-color)', fontSize: '2rem' }}>
            {passed ? "PASSED! 🎉" : "FAILED ❌"}
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            {passed ? "Congratulations! You met the passing mark." : "Keep studying!"}
          </p>
          
          {saving && <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Saving results to dashboard...</p>}
        </div>

        <h3 style={{ marginBottom: '1.5rem' }}>Detailed Review</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          {questions.map((q, i) => (
            <div key={i} className="glass-card" style={{ borderLeft: answers[i] === q.correctOptionIndex ? '4px solid var(--success-color)' : '4px solid var(--error-color)' }}>
              <p><strong>Q{i+1}: {q.text}</strong></p>
              <p style={{ color: answers[i] === q.correctOptionIndex ? 'var(--success-color)' : 'var(--error-color)', margin: '0.5rem 0' }}>
                Your Answer: {answers[i] !== undefined ? q.options[answers[i]] : 'No Answer'}
              </p>
              {answers[i] !== q.correctOptionIndex && (
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

  const currentQ = questions[currentIndex];
  if (!currentQ) return <div className="glass-card" style={{ textAlign: 'center' }}>No questions available for this module yet.</div>;
  
  const progress = (currentIndex / questions.length) * 100;
  const hasAnswered = answers[currentIndex] !== undefined;

  return (
    <div className="glass-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <span style={{ fontWeight: 600, color: 'var(--primary-color)', fontSize: '1.1rem' }}>{mode}</span>
        <span style={{ fontSize: '1.1rem' }}>Question {currentIndex + 1} of {questions.length}</span>
        <div style={{ 
          background: timeLeft < 300 ? 'rgba(239, 68, 68, 0.1)' : 'rgba(79, 70, 229, 0.1)', 
          color: timeLeft < 300 ? 'var(--error-color)' : 'var(--primary-color)',
          border: `1px solid ${timeLeft < 300 ? 'var(--error-color)' : 'var(--primary-color)'}`,
          padding: '0.5rem 1rem',
          borderRadius: '9999px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '1rem'
        }}>
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
              background: answers[currentIndex] === i ? 'rgba(79, 70, 229, 0.1)' : '#ffffff', 
              border: answers[currentIndex] === i ? '2px solid var(--primary-color)' : '1px solid #e2e8f0',
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
          {currentIndex === questions.length - 1 ? 'Finish Exam' : 'Next'}
        </button>
      </div>
    </div>
  );
}
