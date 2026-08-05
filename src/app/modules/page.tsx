import Link from "next/link";
import { modulesData } from "@/data/modulesData";

export default function Modules() {
  return (
    <div className="container section">
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/dashboard" style={{ color: "var(--primary-color)", fontWeight: 500 }}>
          ← Back to Dashboard
        </Link>
      </div>
      <h2>Study Modules</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Select a module to start reading and reviewing the material.
      </p>

      <div className="grid-cards">
        {modulesData.map((module) => (
          <div key={module.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.25rem' }}>{module.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
              {module.description}
            </p>
            <Link href={`/modules/${module.id}`} className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              Read Module
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
