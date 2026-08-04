import { modulesData } from "@/data/modulesData";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export function generateStaticParams() {
  return modulesData.map((module) => ({
    id: module.id,
  }));
}

export default function ModulePage({ params }: { params: { id: string } }) {
  const module = modulesData.find((m) => m.id === params.id);

  if (!module) {
    return (
      <div className="container section" style={{ textAlign: "center" }}>
        <h2>Module Not Found</h2>
        <Link href="/modules" className="btn btn-primary" style={{ marginTop: "1rem" }}>
          Back to Modules
        </Link>
      </div>
    );
  }

  return (
    <div className="container section" style={{ maxWidth: "800px" }}>
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/modules" style={{ color: "var(--primary-color)", fontWeight: 500 }}>
          ← Back to Modules
        </Link>
      </div>
      
      <div className="glass-card" style={{ padding: "var(--card-padding)" }}>
        <h1 style={{ marginBottom: "1rem" }}>{module.title}</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", marginBottom: "3rem", borderBottom: "1px solid var(--glass-border)", paddingBottom: "2rem" }}>
          {module.description}
        </p>
        
        <div className="module-content" style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-primary)' }}>
          <ReactMarkdown
            components={{
              h2: ({node, ...props}) => <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }} {...props} />,
              h3: ({node, ...props}) => <h3 style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }} {...props} />,
              p: ({node, ...props}) => <p style={{ marginBottom: '1rem' }} {...props} />,
              ul: ({node, ...props}) => <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }} {...props} />,
              li: ({node, ...props}) => <li style={{ marginBottom: '0.5rem' }} {...props} />
            }}
          >
            {module.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
