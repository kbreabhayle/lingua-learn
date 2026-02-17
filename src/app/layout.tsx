import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/context/SettingsContext";
import SettingsBar from "@/components/SettingsBar";

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
        <SettingsProvider>
          <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
              <a href="/" className="font-bold text-lg sm:text-xl tracking-tighter text-foreground transition-colors">LINGUA LEARN</a>
              <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-foreground transition-colors">
                <a href="/lessons" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">Lessons</a>
                <a href="/quizzes" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">Quizzes</a>
                <a href="/progress" className="hover:underline opacity-80 hover:opacity-100 transition-opacity">Progress</a>
              </div>
            </div>
          </nav>
          <SettingsBar />
          <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full transition-colors duration-300">
            {children}
          </main>
        </SettingsProvider>
      </body>
    </html>
  );
}
