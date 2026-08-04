import Link from "next/link";

export default function Modules() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <h2>Study Modules</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Select a module to start reading and reviewing the material.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="glass-card">
          <h3>1. Labor Laws</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Philippine Labor Code, classifications of employment, and labor relations.
          </p>
        </div>

        <div className="glass-card">
          <h3>2. Statutory Benefits</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            SSS, PhilHealth, Pag-IBIG, 13th Month Pay, and leave benefits.
          </p>
        </div>

        <div className="glass-card">
          <h3>3. HR Management</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Recruitment, training and development, compensation and benefits, and employee relations.
          </p>
        </div>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <Link href="/dashboard" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>
          &larr; Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
