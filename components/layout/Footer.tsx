export default function Footer() {
  return (
    <footer className="glass border-t border-white/10 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-white/60">
          © {new Date().getFullYear()} Naresh Kumar Purohit. All rights reserved. | Built with passion and code ❤️
        </p>
      </div>
    </footer>
  );
}
