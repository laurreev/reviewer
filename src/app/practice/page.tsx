import Link from "next/link";

export default function Practice() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <h2>Practice Exams</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Simulate the actual CHRA exam environment to test your readiness.
      </p>

      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h3>Full Mock Exam</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          3 items covering Labor Laws (Demo).
        </p>
        
        <div style={{ marginTop: '2rem' }}>
          <Link href="/practice/exam" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem', display: 'inline-block' }}>
            Start Exam
          </Link>
        </div>
      </div>
      
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link href="/dashboard" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>
          &larr; Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
