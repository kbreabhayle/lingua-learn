"use client";

import { useProgress } from "@/hooks/useProgress";
import { VOCABULARY } from "@/data/vocabulary";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ProgressPage() {
    const { progress } = useProgress();

    const totalItems = VOCABULARY.length;
    const completedCount = progress.completedItems.length;
    const completionPercentage = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

    const averageQuizScore = progress.quizScores.length > 0
        ? Math.round((progress.quizScores.reduce((acc, curr) => acc + (curr.score / curr.total), 0) / progress.quizScores.length) * 100)
        : 0;

    return (
        <div className="space-y-12 animate-fade-in">
            <div className="border-l-8 border-primary pl-6 py-2">
                <h1 className="text-5xl font-black uppercase">Your Progress</h1>
                <p className="text-foreground/60 font-medium">Tracking your journey to fluency.</p>
            </div>

            {/* Stats Overview */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="border-4 border-primary p-8 bg-black text-white">
                    <span className="text-sm font-bold uppercase opacity-60 block mb-1">Total Completion</span>
                    <span className="text-6xl font-black">{completionPercentage}%</span>
                    <p className="text-xs mt-4 font-bold opacity-60 uppercase">{completedCount} / {totalItems} items</p>
                </div>
                <div className="border-4 border-primary p-8">
                    <span className="text-sm font-bold uppercase opacity-60 block mb-1">Avg. Quiz Score</span>
                    <span className="text-6xl font-black">{averageQuizScore}%</span>
                    <p className="text-xs mt-4 font-bold opacity-40 uppercase">{progress.quizScores.length} Quizzes taken</p>
                </div>
                <div className="border-4 border-primary p-8 bg-muted">
                    <span className="text-sm font-bold uppercase opacity-60 block mb-1">Study Streak</span>
                    <span className="text-6xl font-black">1 DAY</span>
                    <p className="text-xs mt-4 font-bold opacity-40 uppercase">Keep it up!</p>
                </div>
            </div>

            {/* Quiz History */}
            <section className="space-y-6">
                <h2 className="text-3xl font-black uppercase tracking-tight">Quiz History</h2>
                {progress.quizScores.length === 0 ? (
                    <div className="border-2 border-primary border-dashed p-12 text-center">
                        <p className="text-foreground/40 font-bold mb-4 uppercase italic">No quiz history found.</p>
                        <Link href="/quizzes" className="inline-block bg-primary text-secondary px-6 py-2 font-bold uppercase">Take your first quiz</Link>
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {progress.quizScores.slice().reverse().map((q, idx) => (
                            <div key={idx} className="border-2 border-primary p-6 flex justify-between items-center bg-background">
                                <div>
                                    <span className="text-xs font-bold uppercase opacity-40 block">{new Date(q.quizId).toLocaleDateString()}</span>
                                    <span className="text-lg font-black uppercase tracking-tight">General Vocabulary Quiz</span>
                                </div>
                                <div className="text-right">
                                    <span className={cn(
                                        "text-2xl font-black px-4 py-1 border-2 border-primary",
                                        (q.score / q.total) >= 0.8 ? "bg-black text-white" : ""
                                    )}>
                                        {q.score} / {q.total}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Achievements / Next Steps */}
            <div className="bg-primary text-secondary p-12">
                <h2 className="text-3xl font-black uppercase mb-4">Mastery Awaits</h2>
                <p className="font-medium max-w-xl mb-8">
                    Focus on Phrasal Verbs to improve your score. Research shows that consistent daily practice is more effective than marathon sessions.
                </p>
                <Link href="/lessons" className="text-secondary font-black underline underline-offset-4 hover:opacity-80 transition-opacity">
                    RESUME LEARNING &rarr;
                </Link>
            </div>
        </div>
    );
}
