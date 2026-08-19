import { officialQuestionBank } from "@/data/officialQuestionBank";
import Link from "next/link";

export function generateStaticParams() {
  return [
    { id: 'A' },
    { id: 'B' }
  ];
}

export default async function OfficialModulePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  if (id !== 'A' && id !== 'B') {
    return (
      <div className="container section" style={{ textAlign: "center" }}>
        <h2>Set Not Found</h2>
        <Link href="/official-modules" className="btn btn-primary" style={{ marginTop: "1rem" }}>
          Back to Official Modules
        </Link>
      </div>
    );
  }

  const questions = officialQuestionBank.filter(q => q.setId === id);

  return (
    <div className="container section" style={{ maxWidth: "900px" }}>
      <div style={{ 
        position: "fixed", 
        bottom: "2rem", 
        right: "2rem", 
        zIndex: 1000 
      }}>
        <Link href="/official-modules" className="btn btn-primary" style={{ 
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)", 
          borderRadius: "30px", 
          padding: "0.75rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontWeight: 600
        }}>
          ← Back to Modules
        </Link>
      </div>
      
      <div className="glass-card" style={{ padding: "var(--card-padding)" }}>
        <h1 style={{ marginBottom: "1rem" }}>Set {id} Reviewer</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", marginBottom: "3rem", borderBottom: "1px solid var(--glass-border)", paddingBottom: "2rem" }}>
          Study all {questions.length} questions for Set {id}.
        </p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {questions.map((q, index) => (
            <div key={q.id || index} style={{ padding: "1.5rem", backgroundColor: "var(--background-color)", borderRadius: "8px", borderLeft: "4px solid var(--primary-color)" }}>
              <div style={{ fontWeight: "bold", marginBottom: "0.5rem", color: "var(--primary-color)", fontSize: "0.9rem" }}>
                Question {index + 1} {q.category ? `• ${q.category}` : ""}
              </div>
              <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem", lineHeight: "1.5" }}>
                {q.text}
              </h3>
              
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ fontWeight: 600, color: "var(--success-color)", marginBottom: "0.25rem" }}>Correct Answer:</div>
                <div style={{ padding: "0.75rem", backgroundColor: "rgba(16, 185, 129, 0.1)", borderRadius: "4px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                  {q.correctAnswer}
                </div>
              </div>
              
              <div>
                <div style={{ fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.25rem" }}>Rationale:</div>
                <div style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>
                  {q.rationale}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
