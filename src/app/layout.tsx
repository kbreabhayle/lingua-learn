import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lingua Learn | English Phrasal Verbs & Slang",
  description: "Modern, minimal language learning application for beginner to intermediate learners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <nav className="border-b border-border bg-background sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="font-bold text-xl tracking-tighter">LINGUA LEARN</a>
            <div className="flex gap-6 text-sm font-medium">
              <a href="/lessons" className="hover:underline">Lessons</a>
              <a href="/quizzes" className="hover:underline">Quizzes</a>
              <a href="/progress" className="hover:underline">Progress</a>
            </div>
          </div>
        </nav>
        <main className="max-w-5xl mx-auto px-6 py-12">
          {children}
        </main>
        <footer className="border-t border-border mt-24 py-12 bg-muted">
          <div className="max-w-5xl mx-auto px-6 text-center text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Lingua Learn. Built for Vercel.
          </div>
        </footer>
      </body>
    </html>
  );
}
