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
}

export default function Dashboard() {
  const { user, loading } = useAuth();
  const [history, setHistory] = useState<ExamResult[]>([]);
  const [fetching, setFetching] = useState(true);

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
          limit(5)
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

  if (loading) return null;

  return (
    <div className="container section">
      <h2>Your Dashboard</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Track your progress and pick up where you left off.
      </p>

      {!user && !loading && (
        <div className="glass-card" style={{ marginBottom: '2rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
          <p style={{ color: 'var(--error-color)' }}>Please sign in to save your progress and take exams.</p>
        </div>
      )}

      {user && !fetching && history.length > 0 && (
        <div className="glass-card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--primary-color)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Exam History</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {history.map((h, i) => (
              <div key={h.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: 'var(--background-color)', borderRadius: '8px', borderLeft: h.passedOverall ? '4px solid var(--success-color)' : '4px solid var(--error-color)' }}>
                <div>
                  <strong>Attempt {history.length - i}</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginLeft: '1rem' }}>
                    {h.timestamp ? new Date(h.timestamp.toDate()).toLocaleDateString() : 'Just now'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '2rem', textAlign: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 600, color: h.passedA ? 'var(--success-color)' : 'var(--error-color)' }}>{h.scoreA}%</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Set A</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: h.passedB ? 'var(--success-color)' : 'var(--error-color)' }}>{h.scoreB}%</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Set B</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '4px', backgroundColor: h.passedOverall ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: h.passedOverall ? 'var(--success-color)' : 'var(--error-color)' }}>
                      {h.passedOverall ? 'PASS' : 'FAIL'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
