"use client";

import { VOCABULARY, Category } from "@/data/vocabulary";
import { useProgress } from "@/hooks/useProgress";
import { useParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CategoryPage() {
    const params = useParams();
    const categorySlug = params.category as string;
    const categoryName = categorySlug.replace("-", " ");

    const items = VOCABULARY.filter(v => v.category === categoryName);
    const { progress, markItemAsComplete } = useProgress();

    return (
        <div className="space-y-12 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
                <div className="border-l-4 sm:border-l-8 border-primary pl-4 sm:pl-6 py-1 sm:py-2">
                    <Link href="/lessons" className="text-[10px] sm:text-xs font-bold hover:underline uppercase opacity-50">&larr; All Categories</Link>
                    <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">{categoryName}</h1>
                </div>
                <div className="bg-muted px-4 sm:px-6 py-3 sm:py-4 border-2 border-primary w-fit self-start sm:self-auto">
                    <span className="text-[10px] sm:text-xs font-black uppercase opacity-60 block mb-1">Category Progress</span>
                    <span className="text-xl sm:text-2xl font-black">
                        {items.filter(i => progress.completedItems.includes(i.id)).length} / {items.length}
                    </span>
                </div>
            </div>

            <div className="grid gap-4 sm:gap-6">
                {items.map((item) => {
                    const isCompleted = progress.completedItems.includes(item.id);
                    return (
                        <div
                            key={item.id}
                            className={cn(
                                "border-2 border-primary p-5 sm:p-6 transition-all card-hover",
                                isCompleted ? "bg-muted/50 border-dashed opacity-60" : "bg-background"
                            )}
                        >
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0 mb-3 sm:mb-4">
                                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight">{item.word_or_phrase}</h2>
                                <button
                                    onClick={() => markItemAsComplete(item.id)}
                                    className={cn(
                                        "text-[10px] sm:text-xs font-bold px-3 py-1.5 border border-primary transition-all uppercase w-full sm:w-auto",
                                        isCompleted ? "bg-primary text-secondary" : "hover:bg-primary hover:text-secondary"
                                    )}
                                >
                                    {isCompleted ? "COMPLETED" : "MARK AS DONE"}
                                </button>
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
