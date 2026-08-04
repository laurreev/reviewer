export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div style={{ width: '100%', backgroundColor: 'var(--glass-border)', borderRadius: '9999px', overflow: 'hidden', height: '12px', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
      <div style={{ 
        width: `${progress}%`, 
        backgroundColor: 'var(--success-color)', 
        height: '100%', 
        transition: 'width 0.3s ease' 
      }} />
    </div>
  );
}
