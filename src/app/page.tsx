import Link from "next/link";

export default function Home() {
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
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/dashboard" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
