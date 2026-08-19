import Link from "next/link";

export default function OfficialModules() {
  return (
    <div className="container section">
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/dashboard" style={{ color: "var(--primary-color)", fontWeight: 500 }}>
          ← Back to Dashboard
        </Link>
      </div>
      <h2>Official Reviewer Modules</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Read and study the official exam questions, answers, and rationales.
      </p>

      <div className="grid-cards">
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.25rem' }}>Set A Reviewer</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
            Study all 250 questions from Set A, including correct answers and detailed rationales.
          </p>
          <Link href={`/official-modules/A`} className="btn btn-primary" style={{ alignSelf: 'flex-start', background: 'linear-gradient(135deg, #10b981, #059669)', border: 'none' }}>
            Review Set A
          </Link>
        </div>
        
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.25rem' }}>Set B Reviewer</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
            Study all 250 questions from Set B, including correct answers and detailed rationales.
          </p>
          <Link href={`/official-modules/B`} className="btn btn-primary" style={{ alignSelf: 'flex-start', background: 'linear-gradient(135deg, #10b981, #059669)', border: 'none' }}>
            Review Set B
          </Link>
        </div>
      </div>
    </div>
  );
}
