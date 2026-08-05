"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, getDocs, limit } from "firebase/firestore";

interface ExamResult {
  id: string;
  scoreA: number;
  scoreB: number;
  passedA: boolean;
  passedB: boolean;
  passedOverall: boolean;
  timestamp: any;
  categoryScores?: Record<string, { correct: number, total: number }>;
}

export default function Dashboard() {
  const { user, loading } = useAuth();
  const [history, setHistory] = useState<ExamResult[]>([]);
  const [fetching, setFetching] = useState(true);

  const [overallAccuracy, setOverallAccuracy] = useState(0);
  const [categoryStats, setCategoryStats] = useState<{name: string, accuracy: number, correct: number, total: number}[]>([]);
  const [examsPassed, setExamsPassed] = useState(0);

  useEffect(() => {
    if (!user) {
      setFetching(false);
      return;
    }
    const fetchHistory = async () => {
      try {
        const q = query(
          collection(db, "usersREVIEWER", user.uid, "historyREVIEWER"),
          orderBy("timestamp", "desc"),
          limit(20) // Fetch up to 20 past exams for robust analytics
        );
        const querySnapshot = await getDocs(q);
        const results: ExamResult[] = [];
        querySnapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() } as ExamResult);
        });
        setHistory(results);
      } catch (error) {
        console.error("Error fetching history", error);
      } finally {
        setFetching(false);
      }
    };
    fetchHistory();
  }, [user]);

  useEffect(() => {
    if (history.length > 0) {
      let totalQuestions = 0;
      let totalCorrect = 0;
      let passed = 0;

      const aggCategories: Record<string, { correct: number, total: number }> = {};

      history.forEach(h => {
        if (h.passedOverall) passed++;
        totalQuestions += 200; // 100 per set
        totalCorrect += (h.scoreA + h.scoreB); // scoreA and scoreB represent correct out of 100

        if (h.categoryScores) {
          Object.entries(h.categoryScores).forEach(([cat, stats]) => {
            if (!aggCategories[cat]) aggCategories[cat] = { correct: 0, total: 0 };
            aggCategories[cat].correct += stats.correct;
            aggCategories[cat].total += stats.total;
          });
        }
      });

      setExamsPassed(passed);
      setOverallAccuracy(Math.round((totalCorrect / totalQuestions) * 100));

      const catArray = Object.entries(aggCategories).map(([name, stats]) => ({
        name,
        correct: stats.correct,
        total: stats.total,
        accuracy: Math.round((stats.correct / stats.total) * 100)
      })).sort((a, b) => b.accuracy - a.accuracy);

      setCategoryStats(catArray);
    }
  }, [history]);

  if (loading) return null;

  return (
    <div className="container section">
      <h2>Your Dashboard</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Track your progress, analyze your strengths, and pick up where you left off.
      </p>

      {!user && !loading && (
        <div className="glass-card" style={{ marginBottom: '2rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
          <p style={{ color: 'var(--error-color)' }}>Please sign in to save your progress and take exams.</p>
        </div>
      )}

      {user && !fetching && history.length > 0 && (
        <>
          <div className="grid-cards" style={{ marginBottom: '2rem' }}>
            <div className="glass-card" style={{ textAlign: 'center', borderTop: '4px solid var(--primary-color)' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-color)', lineHeight: 1 }}>{overallAccuracy}%</div>
              <div style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600 }}>Overall Accuracy</div>
            </div>
            <div className="glass-card" style={{ textAlign: 'center', borderTop: '4px solid var(--success-color)' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--success-color)', lineHeight: 1 }}>{history.length}</div>
              <div style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600 }}>Exams Attempted</div>
            </div>
            <div className="glass-card" style={{ textAlign: 'center', borderTop: '4px solid var(--warning-color)' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--warning-color)', lineHeight: 1 }}>{examsPassed}</div>
              <div style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600 }}>Exams Passed</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            {/* Category Stats */}
            {categoryStats.length > 0 && (
              <div className="glass-card">
                <h3 style={{ marginBottom: '1.5rem' }}>Strengths & Weaknesses</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {categoryStats.map((cat, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        <span style={{ fontWeight: 600 }}>{cat.name}</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{cat.accuracy}%</span>
                      </div>
                      <div style={{ width: '100%', backgroundColor: 'var(--background-color)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                        <div 
                          style={{ 
                            height: '100%', 
                            width: `${cat.accuracy}%`, 
                            backgroundColor: cat.accuracy >= 75 ? 'var(--success-color)' : cat.accuracy >= 50 ? 'var(--warning-color)' : 'var(--error-color)',
                            transition: 'width 1s ease-in-out'
                          }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Exam History */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Exam History</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto', maxHeight: '400px', paddingRight: '0.5rem' }}>
                {history.map((h, i) => (
                  <div key={h.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: 'var(--background-color)', borderRadius: '8px', borderLeft: h.passedOverall ? '4px solid var(--success-color)' : '4px solid var(--error-color)' }}>
                    <div>
                      <strong>Attempt {history.length - i}</strong>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                        {h.timestamp ? new Date(h.timestamp.toDate()).toLocaleDateString() : 'Just now'}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', textAlign: 'center' }}>
                      <div>
                        <div style={{ fontWeight: 600, color: h.passedA ? 'var(--success-color)' : 'var(--error-color)' }}>{h.scoreA}%</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Set A</div>
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, color: h.passedB ? 'var(--success-color)' : 'var(--error-color)' }}>{h.scoreB}%</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Set B</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.8rem', padding: '0.25rem 0.5rem', borderRadius: '4px', backgroundColor: h.passedOverall ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: h.passedOverall ? 'var(--success-color)' : 'var(--error-color)' }}>
                          {h.passedOverall ? 'PASS' : 'FAIL'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <div className="grid-cards">
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
