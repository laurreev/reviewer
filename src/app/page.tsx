"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { user, signInWithGoogle, loading } = useAuth();

  return (
    <main className="bg-gradient">
      <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div className="glass-card" style={{ maxWidth: '600px', width: '100%' }}>
          <h1 style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            CHRA 2026
          </h1>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Certified Human Resource Associate Reviewer
          </h2>
          
          <p style={{ marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
            Your comprehensive guide to Labor Laws, Statutory Benefits, and HR Management Principles.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', justifyContent: 'center', minHeight: '80px' }}>
            {loading ? (
              <div style={{ padding: '0.75rem', color: 'var(--text-secondary)' }}>Loading...</div>
            ) : user ? (
              <Link href="/dashboard" className="btn btn-primary">
                Go to Dashboard
              </Link>
            ) : (
              <>
                <button onClick={signInWithGoogle} className="btn btn-primary">
                  Sign in with Google
                </button>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>to get started</span>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
