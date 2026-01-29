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
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="border-l-8 border-primary pl-6 py-2">
                    <Link href="/lessons" className="text-xs font-bold hover:underline uppercase opacity-50">&larr; All Categories</Link>
                    <h1 className="text-5xl font-black uppercase">{categoryName}</h1>
                </div>
                <div className="bg-muted px-6 py-4 border-2 border-primary">
                    <span className="text-xs font-black uppercase opacity-60 block">Category Progress</span>
                    <span className="text-2xl font-black">
                        {items.filter(i => progress.completedItems.includes(i.id)).length} / {items.length}
                    </span>
                </div>
            </div>

            <div className="grid gap-4">
                {items.map((item) => {
                    const isCompleted = progress.completedItems.includes(item.id);
                    return (
                        <div
                            key={item.id}
                            className={cn(
                                "border-2 border-primary p-6 transition-colors",
                                isCompleted ? "bg-muted border-dashed opacity-70" : "bg-background"
                            )}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-black uppercase tracking-tight">{item.word_or_phrase}</h2>
                                <button
                                    onClick={() => markItemAsComplete(item.id)}
                                    className={cn(
                                        "text-xs font-bold px-3 py-1 border border-primary transition-all",
                                        isCompleted ? "bg-primary text-secondary" : "hover:bg-primary hover:text-secondary"
                                    )}
                                >
                                    {isCompleted ? "COMPLETED" : "MARK AS DONE"}
                                </button>
                            </div>
                            <p className="text-lg mb-4 font-medium italic">{item.meaning}</p>
                            <div className="bg-black/5 p-4 border-l-4 border-primary">
                                <span className="text-[10px] font-black uppercase opacity-50 block mb-1">Example</span>
                                <p className="font-sans leading-relaxed">{item.example_sentence}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
