import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

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
  title: "Naresh Kumar Purohit - Full Stack Developer",
  description: "Results-driven Software Engineer with experience delivering scalable web applications. Skilled in C#, ASP.NET, Angular, SQL databases, and Azure Cloud Services. Creating content for 2.8M+ professionals.",
  keywords: ["Full Stack Developer", "Software Engineer", "Angular", "ASP.NET", "Next.js", "React", "TypeScript", "Azure"],
  authors: [{ name: "Naresh Kumar Purohit" }],
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Naresh Kumar Purohit - Full Stack Developer",
    description: "Building Solutions, One Commit at a Time. Sharing Insights on Tech & Innovation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naresh Kumar Purohit - Full Stack Developer",
    description: "Building Solutions, One Commit at a Time",
    creator: "@MSpurohit15",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
