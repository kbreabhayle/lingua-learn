"use client";

import { VOCABULARY, Category } from "@/data/vocabulary";
import { useProgress } from "@/hooks/useProgress";
import { useParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function CategoryPage() {
    const params = useParams();
    const categorySlug = params.category as string;
    const categoryName = categorySlug.replace("-", " ");

    const items = VOCABULARY.filter(v => v.category === categoryName);
    const { progress, markItemAsComplete } = useProgress();

    const [listeningId, setListeningId] = useState<string | null>(null);

    const handleSpeaking = (id: string, text: string) => {
        setListeningId(id);

        // Simulate listening duration (or use Web Speech API in future)
        setTimeout(() => {
            setListeningId(null);
            markItemAsComplete(id);
            // Could add toast here
        }, 2000);
    };

    return (
        <div className="space-y-12 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
                <div className="border-l-4 sm:border-l-8 border-primary pl-4 sm:pl-6 py-1 sm:py-2">
                    <Link href="/lessons" className="text-[10px] sm:text-xs font-bold hover:underline uppercase opacity-50">&larr; All Categories</Link>
                    <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">{categoryName}</h1>
                </div>
                <div className="bg-muted px-4 sm:px-6 py-3 sm:py-4 border-2 border-primary w-fit self-start sm:self-auto flex flex-col items-end gap-2">
                    <div>
                        <span className="text-[10px] sm:text-xs font-black uppercase opacity-60 block mb-1">Category Progress</span>
                        <span className="text-xl sm:text-2xl font-black">
                            {items.filter(i => progress.completedItems.includes(i.id)).length} / {items.length}
                        </span>
                    </div>
                    <Link
                        href={`/quizzes?category=${categorySlug}`}
                        className="text-[10px] font-bold uppercase bg-primary text-secondary px-3 py-1 rounded hover:opacity-80 transition-opacity"
                    >
                        Take {categoryName} Quiz &rarr;
                    </Link>
                </div>
            </div>

            <div className="grid gap-4 sm:gap-6">
                {items.map((item) => {
                    const isCompleted = progress.completedItems.includes(item.id);
                    const isListening = listeningId === item.id;

                    return (
                        <div
                            key={item.id}
                            className={cn(
                                "border-2 border-primary p-5 sm:p-6 transition-all card-hover",
                                isCompleted ? "bg-muted/50 border-dashed opacity-60" : "bg-background",
                                isListening ? "ring-4 ring-primary/20 scale-[1.02] border-primary" : ""
                            )}
                        >
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0 mb-3 sm:mb-4">
                                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight">{item.word_or_phrase}</h2>
                                <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                                    {/* Audio Button */}
                                    <button
                                        onClick={() => {
                                            const u = new SpeechSynthesisUtterance(item.word_or_phrase);
                                            u.rate = 0.9;
                                            window.speechSynthesis.speak(u);
                                        }}
                                        className="p-2 border border-primary/20 rounded-md hover:bg-primary/5 active:scale-95 transition-all text-primary"
                                        title="Listen"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                                    </button>

                                    {/* Speaking Button */}
                                    <button
                                        onClick={() => handleSpeaking(item.id, item.word_or_phrase)}
                                        disabled={isListening || isCompleted}
                                        className={cn(
                                            "p-2 border border-primary/20 rounded-md transition-all text-primary flex items-center gap-2",
                                            isListening ? "bg-red-50 border-red-200 text-red-500 animate-pulse" : "hover:bg-primary/5 active:scale-95"
                                        )}
                                        title="Practice Speaking"
                                    >
                                        {isListening ? (
                                            <>
                                                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                                                <span className="text-xs font-bold">LISTENING...</span>
                                            </>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                                        )}
                                    </button>

                                    <button
                                        onClick={() => markItemAsComplete(item.id)}
                                        className={cn(
                                            "text-[10px] sm:text-xs font-bold px-3 py-1.5 border border-primary transition-all uppercase flex-1 sm:flex-none",
                                            isCompleted ? "bg-primary text-secondary" : "hover:bg-primary hover:text-secondary"
                                        )}
                                    >
                                        {isCompleted ? "COMPLETED" : "MARK AS DONE"}
                                    </button>
                                </div>
                            </div>
                            <p className="text-base sm:text-lg mb-4 font-medium italic leading-snug">{item.meaning}</p>
                            <div className="bg-black/[0.03] p-3 sm:p-4 border-l-2 sm:border-l-4 border-primary">
                                <span className="text-[10px] font-black uppercase opacity-40 block mb-1">Example</span>
                                <p className="font-sans text-sm sm:text-base leading-relaxed opacity-90">{item.example_sentence}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
