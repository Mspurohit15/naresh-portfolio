export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div
        className="absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, var(--gradient-start) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute -bottom-60 -right-60 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, var(--gradient-end) 0%, transparent 65%)',
        }}
      />
    </div>
  );
}
