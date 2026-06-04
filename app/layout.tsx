import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Naresh Kumar Purohit – Full Stack Developer | Berlin, Germany",
  description: "Full Stack Software Engineer based in Berlin, Germany. Open to work across Europe. 3+ years experience in Angular, ASP.NET, Node.js, Azure. German B1. Available for remote, hybrid, and on-site roles.",
  keywords: [
    "Full Stack Developer", "Software Engineer", "Berlin", "Germany", "Europe",
    "Angular Developer", "ASP.NET Developer", "Full Stack Germany", "Angular",
    "React", "Next.js", "TypeScript", "Azure", "Open to Work", "Remote Developer Europe",
  ],
  authors: [{ name: "Naresh Kumar Purohit" }],
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Naresh Kumar Purohit – Full Stack Developer | Berlin, Germany",
    description: "Full Stack Software Engineer open to European opportunities. Angular, ASP.NET, Azure specialist.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naresh Kumar Purohit – Full Stack Developer | Berlin, Germany",
    description: "Open to work across Europe. Angular · ASP.NET · Azure · Node.js",
    creator: "@MSpurohit15",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        {/* Prevent flash of wrong theme on load */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t);}})();`
        }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
