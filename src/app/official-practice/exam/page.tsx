"use client";
import OfficialExamEngine from "@/components/OfficialExamEngine";
import Link from "next/link";
import { officialQuestionBank } from "@/data/officialQuestionBank";
import { useAuth } from "@/context/AuthContext";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function OfficialExamPageContent() {
  const { user, loading } = useAuth();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || 'A';
  
  // Filter the bank for the specific official mode
  const questionsData = mode === 'Both' 
    ? officialQuestionBank 
    : officialQuestionBank.filter(q => q.setId === mode);

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
        <h2>Official Practice Exam</h2>
        <Link href="/dashboard" style={{ color: 'var(--error-color)', fontWeight: 500, padding: '0.5rem', border: '1px solid var(--error-color)', borderRadius: '8px' }}>
          Quit Exam
        </Link>
      </div>

      <OfficialExamEngine questionsData={questionsData} mode={mode} />
    </div>
  );
}

export default function OfficialExamPage() {
  return (
    <Suspense fallback={<div className="container section" style={{ textAlign: 'center' }}>Loading Exam...</div>}>
      <OfficialExamPageContent />
    </Suspense>
  );
}
