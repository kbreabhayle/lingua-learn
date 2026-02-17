"use client";

import { useProgress } from "@/hooks/useProgress";
import { VOCABULARY } from "@/data/vocabulary";
import DailyGoal from "@/components/DailyGoal";
import { useSettings } from "@/context/SettingsContext";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ProgressPage() {
    const { progress } = useProgress();
    const { level, streak } = useSettings();
    const completedIds = progress.completedItems;
    const completedVocab = VOCABULARY.filter(v => completedIds.includes(v.id));

    return (
        <div className="space-y-12 animate-fade-in">
            <div className="border-l-4 sm:border-l-8 border-primary pl-4 sm:pl-6 py-2">
                <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">Your Progress</h1>
                <p className="text-foreground/60 font-medium text-sm sm:base">Track your journey to fluency.</p>
            </div>

            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Daily Goal Card */}
                <div className="md:col-span-1">
                    <DailyGoal />
                </div>

                {/* Total Stats */}
                <div className="glass-panel p-6 rounded-xl flex flex-col justify-center items-center text-center border border-white/20">
                    <span className="text-4xl font-black text-primary">{completedIds.length}</span>
                    <span className="text-xs font-bold uppercase opacity-60">Words Mastered</span>
                </div>

                {/* Current Level */}
                <div className="glass-panel p-6 rounded-xl flex flex-col justify-center items-center text-center border border-white/20">
                    <span className="text-2xl font-black text-primary uppercase">{level}</span>
                    <span className="text-xs font-bold uppercase opacity-60">Current Level</span>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">Mastered Vocabulary</h2>
                {completedVocab.length === 0 ? (
                    <div className="text-center py-12 bg-muted/30 rounded-xl border-dashed border-2 border-muted-foreground/20">
                        <p className="text-foreground/50 font-medium">No items mastered yet. Start a lesson!</p>
                        <Link href="/lessons" className="inline-block mt-4 text-primary font-bold underline underline-offset-4 hover:opacity-80">
                            Go to Lessons &rarr;
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {completedVocab.map((item) => (
                            <div key={item.id} className="bg-background border border-border p-4 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg">{item.word_or_phrase}</h3>
                                <p className="text-sm opacity-70 truncate">{item.meaning}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Quiz History */}
            <section className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">Quiz History</h2>
                {progress.quizScores.length === 0 ? (
                    <div className="border-2 border-primary border-dashed p-8 sm:p-12 text-center rounded-xl bg-muted/30">
                        <p className="text-foreground/40 font-bold mb-4 uppercase italic text-sm sm:base">No quiz history found.</p>
                        <Link href="/quizzes" className="inline-block bg-primary text-secondary px-6 py-3 font-bold uppercase text-sm sm:base rounded-lg hover:opacity-90 transition-opacity">Take your first quiz</Link>
                    </div>
                ) : (
                    <div className="grid gap-3 sm:gap-4">
                        {progress.quizScores.slice().reverse().map((q, idx) => (
                            <div key={idx} className="border-2 border-primary p-4 sm:p-6 flex justify-between items-center bg-background card-hover rounded-xl">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold uppercase opacity-40 block">{new Date(q.quizId).toLocaleDateString()}</span>
                                    <span className="text-base sm:text-lg font-black uppercase tracking-tight">{q.topic || "Vocabulary Quiz"}</span>
                                    {q.level && <span className="text-[10px] font-bold uppercase block text-primary/70">{q.level} Level</span>}
                                </div>
                                <div className="text-right">
                                    <span className={cn(
                                        "text-xl sm:text-2xl font-black px-3 sm:px-4 py-1 border-2 border-primary leading-none inline-block rounded-md",
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
        </div>
    );
}
