"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import ProgressBar from "./ProgressBar";
import { db } from "@/lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

interface Question {
  id: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
}

export default function Quiz({ questions, moduleId }: { questions: Question[], moduleId: string }) {
  const { user } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleAnswer = async (index: number) => {
    const isCorrect = index === questions[currentIndex].correctOptionIndex;
    const newScore = isCorrect ? score + 1 : score;
    setScore(newScore);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
      await saveScore(newScore);
    }
  };

  const saveScore = async (finalScore: number) => {
    if (!user) return;
    setSaving(true);
    try {
      const resultDoc = doc(db, "users", user.uid, "results", moduleId);
      await setDoc(resultDoc, {
        score: finalScore,
        total: questions.length,
        timestamp: serverTimestamp()
      }, { merge: true });
    } catch (error) {
      console.error("Error saving score", error);
    } finally {
      setSaving(false);
    }
  };

  if (isFinished) {
    return (
      <div className="glass-card" style={{ textAlign: 'center' }}>
        <h2>Quiz Complete!</h2>
        <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
          You scored <strong style={{ color: 'var(--primary-color)' }}>{score}</strong> out of {questions.length}
        </p>
        {saving ? (
          <p style={{ color: 'var(--text-secondary)' }}>Saving your results...</p>
        ) : (
          <p style={{ color: 'var(--success-color)' }}>Results saved successfully!</p>
        )}
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const progress = (currentIndex / questions.length) * 100;

  return (
    <div className="glass-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <span>Question {currentIndex + 1} of {questions.length}</span>
        <span>{Math.round(progress)}% Completed</span>
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
              background: 'var(--surface-color)', 
              border: '1px solid var(--glass-border)',
              textAlign: 'left',
              padding: '1rem 1.5rem',
              color: 'var(--text-primary)'
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
