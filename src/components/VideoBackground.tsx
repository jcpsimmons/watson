export function VideoBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: '0',
        animation: 'scl-ambient-shift 14s ease-in-out infinite alternate',
        filter: 'blur(2px)',
      }}
    />
  );
}
