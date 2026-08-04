"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, signInWithGoogle, logOut } = useAuth();

  return (
    <nav style={{ padding: '1rem 2rem', background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--glass-border)', position: 'sticky', top: 0, zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 700, background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        CHRA 2026
      </Link>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {user ? (
          <>
            <Link href="/dashboard" style={{ fontWeight: 500 }}>Dashboard</Link>
            <button onClick={logOut} className="btn" style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid var(--error-color)', color: 'var(--error-color)' }}>
              Log Out
            </button>
          </>
        ) : (
          <button onClick={signInWithGoogle} className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
            Sign In with Google
          </button>
        )}
      </div>
    </nav>
  );
}
