"use client";
import ExamEngine from "@/components/ExamEngine";
import Link from "next/link";
import { questionBank } from "@/data/questionBank";
import { useAuth } from "@/context/AuthContext";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ExamPageContent() {
  const { user, loading } = useAuth();
  const searchParams = useSearchParams();
  const mode = (searchParams.get("mode") as 'A' | 'B' | 'Both') || 'Both';
  
  // Filter the master bank into Set A and Set B
  const setAData = questionBank.filter(q => q.setId === 'A');
  const setBData = questionBank.filter(q => q.setId === 'B');

  if (loading) {
    return <div className="container section" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Loading Exam Engine...</div>;
  }

  if (!user) {
    return (
      <div className="container section" style={{ textAlign: 'center' }}>
        <h2>Sign In Required</h2>
        <p style={{ color: 'var(--text-secondary)' }}>You must be signed in to take the practice exam and save your scores.</p>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/" className="btn btn-primary">Go to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container section" style={{ maxWidth: '800px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>CHRA Practice Exam {mode !== 'Both' && `(Set ${mode})`}</h2>
        <Link href="/dashboard" style={{ color: 'var(--error-color)', fontWeight: 500, padding: '0.5rem', border: '1px solid var(--error-color)', borderRadius: '8px' }}>
          Quit Exam
        </Link>
      </div>

      <ExamEngine setAData={setAData} setBData={setBData} mode={mode} />
    </div>
  );
}

export default function ExamPage() {
  return (
    <Suspense fallback={<div className="container section" style={{ textAlign: 'center' }}>Loading Exam...</div>}>
      <ExamPageContent />
    </Suspense>
  );
}
