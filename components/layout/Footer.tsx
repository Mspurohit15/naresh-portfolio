export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-8 px-6"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
          © {year} Naresh Kumar Purohit &mdash; All rights reserved
        </p>
        <p className="text-sm" style={{ color: 'var(--text-dim)', opacity: 0.6 }}>
          Built with Passion by Naresh Kumar Purohit &middot; 🇩🇪
        </p>
      </div>
    </footer>
  );
}
