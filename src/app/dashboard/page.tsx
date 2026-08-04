"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Dashboard() {
  const { user } = useAuth();
  const [examScore, setExamScore] = useState<{score: number, total: number} | null>(null);

  useEffect(() => {
    if (!user) return;
    const fetchProgress = async () => {
      try {
        const docRef = doc(db, "users", user.uid, "results", "mock-exam-1");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setExamScore({ score: docSnap.data().score, total: docSnap.data().total });
        }
      } catch (error) {
        console.error("Error fetching score", error);
      }
    };
    fetchProgress();
  }, [user]);

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <h2>Your Dashboard</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Track your progress and pick up where you left off.
      </p>

      {user && examScore && (
        <div className="glass-card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--success-color)' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Recent Performance</h3>
          <p>Practice Mock Exam: <strong style={{ color: 'var(--primary-color)', fontSize: '1.25rem' }}>{examScore.score} / {examScore.total}</strong></p>
        </div>
      )}

      {!user && (
        <div className="glass-card" style={{ marginBottom: '2rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
          <p style={{ color: 'var(--error-color)' }}>Please sign in to save your progress and take exams.</p>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="glass-card">
          <h3>Study Modules</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Review Labor Laws, Statutory Benefits, and HR Principles.
          </p>
          <Link href="/modules" className="btn btn-primary">
            Start Studying
          </Link>
        </div>

        <div className="glass-card">
          <h3>Practice Exams</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Test your knowledge with timed practice quizzes.
          </p>
          <Link href="/practice" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
            Take Exam
          </Link>
        </div>
      </div>
    </div>
  );
}
