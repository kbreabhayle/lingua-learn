"use client";

import { useState, useMemo, useEffect } from "react";
import { VOCABULARY, VocabularyItem } from "@/data/vocabulary";
import { cn } from "@/lib/utils";
import { useProgress } from "@/hooks/useProgress";
import { useSettings } from "@/context/SettingsContext";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type QuizType = 'multiple_choice' | 'fill_in_the_blank';

export default function Quiz() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');

    const [step, setStep] = useState<'lobby' | 'active' | 'results'>('lobby');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState<{ isCorrect: boolean; show: boolean } | null>(null);
    const [inputValue, setInputValue] = useState("");

    const { progress, saveProgress } = useProgress();
    const { level } = useSettings();

    // Determine Quiz Topic Name
    const quizTopic = useMemo(() => {
        if (categoryParam) return categoryParam.replace('-', ' ') + " Quiz";
        return `${level.charAt(0).toUpperCase() + level.slice(1)} Vocabulary`;
    }, [categoryParam, level]);

    // Generate 10 random questions
    const quizItems = useMemo(() => {
        let sourceData = VOCABULARY;

        if (categoryParam) {
            // Filter by category if param exists
            const formattedCategory = categoryParam.replace('-', ' ');
            sourceData = VOCABULARY.filter(v => v.category.toLowerCase() === formattedCategory.toLowerCase());
        } else {
            // Otherwise filter by level
            const targetDifficulty = level === 'advanced' ? 'intermediate' : level;
            sourceData = VOCABULARY.filter(v => v.difficulty === targetDifficulty);
        }

        // Fallback if not enough items
        if (sourceData.length < 5) sourceData = VOCABULARY; // Ensure we have something

        return [...sourceData]
            .sort(() => Math.random() - 0.5)
            .slice(0, 10)
            .map((item, idx) => ({
                ...item,
                type: idx % 2 === 0 ? 'multiple_choice' : 'fill_in_the_blank' as QuizType
            }));
    }, [step === 'lobby', level, categoryParam]);

    const currentItem = quizItems[currentIndex];

    // Multiple choice options
    const options = useMemo(() => {
        if (!currentItem || currentItem.type !== 'multiple_choice') return [];
        const others = VOCABULARY
            .filter(v => v.id !== currentItem.id)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        return [...others, currentItem]
            .sort(() => Math.random() - 0.5);
    }, [currentIndex, quizItems]);

    const handleAnswer = (answer: string) => {
        if (feedback?.show) return;

        const isCorrect = answer.toLowerCase().trim() === currentItem.word_or_phrase.toLowerCase().trim();
        if (isCorrect) setScore(s => s + 1);

        setFeedback({ isCorrect, show: true });

        setTimeout(() => {
            setFeedback(null);
            setInputValue("");
            if (currentIndex < quizItems.length - 1) {
                setCurrentIndex(i => i + 1);
            } else {
                setStep('results');
                const finalScore = isCorrect ? score + 1 : score;

                // Save with Topic Metadata
                const newScores = [...progress.quizScores, {
                    quizId: new Date().toISOString(),
                    score: finalScore,
                    total: quizItems.length,
                    topic: quizTopic,
                    level: level
                }];
                saveProgress({ ...progress, quizScores: newScores });
            }
        }, 1500);
    };

    if (step === 'lobby') {
        return (
            <div className="text-center space-y-8 animate-fade-in glass-panel p-12 rounded-xl">
                <h1 className="text-4xl sm:text-6xl font-black uppercase text-primary">{quizTopic}</h1>
                <p className="text-xl font-medium text-foreground/60 max-w-md mx-auto">
                    Test your knowledge of {categoryParam ? categoryParam.replace('-', ' ') : level} terms.
                    <br />
                    Mixed Challenge: Multiple Choice & Fill-in-the-blank.
                </p>
                <button
                    onClick={() => {
                        setScore(0);
                        setCurrentIndex(0);
                        setStep('active');
                    }}
                    className="bg-primary text-secondary px-12 py-4 font-black transition-transform hover:scale-105 uppercase tracking-widest rounded-lg"
                >
                    Begin Test
                </button>
            </div>
        );
    }

    if (step === 'results') {
        const percentage = (score / quizItems.length) * 100;
        return (
            <div className="text-center space-y-8 animate-fade-in glass-panel p-12 rounded-xl">
                <h1 className="text-8xl font-black uppercase text-primary">{score} / {quizItems.length}</h1>
                <div className="space-y-2">
                    <p className="text-2xl font-bold text-foreground">{percentage >= 80 ? (percentage === 100 ? "PERFECT SCORE!" : "EXCELLENT!") : "KEEP PRACTICING!"}</p>
                    <p className="text-foreground/60">Your progress has been saved.</p>
                </div>
                <div className="pt-8 flex justify-center gap-4">
                    <button
                        onClick={() => setStep('lobby')}
                        className="bg-primary text-secondary px-8 py-3 font-bold uppercase rounded-lg"
                    >
                        Try Again
                    </button>
                    <Link href="/lessons" className="border-2 border-primary px-8 py-3 font-bold uppercase hover:bg-primary hover:text-secondary transition-colors rounded-lg text-primary hover:text-secondary">
                        Back to Lessons
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-12 animate-fade-in">
            <div className="flex justify-between items-end border-b-4 border-primary/20 pb-4">
                <div>
                    <span className="text-xs font-black uppercase opacity-40 text-foreground">Question {currentIndex + 1} of {quizItems.length}</span>
                    <h2 className="text-4xl font-black uppercase whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] md:max-w-none text-primary">
                        {currentItem.type === 'multiple_choice' ? "Definition Match" : "Complete the Word"}
                    </h2>
                </div>
                <div className="text-right">
                    <span className="text-4xl font-black text-primary">{score}</span>
                    <p className="text-xs font-bold uppercase opacity-40 leading-none text-foreground">Score</p>
                </div>
            </div>

            <div className="space-y-8">
                <div className="bg-white/50 backdrop-blur-sm p-12 border border-white/50 text-center rounded-xl shadow-sm">
                    <p className="text-xs font-black uppercase opacity-40 mb-4 tracking-widest text-foreground">
                        {currentItem.type === 'multiple_choice' ? "Identify the word for:" : "What is the word/phrase?"}
                    </p>
                    <p className="text-3xl font-bold italic tracking-tight uppercase text-primary">"{currentItem.meaning}"</p>
                    {currentItem.type === 'fill_in_the_blank' && (
                        <p className="mt-8 font-sans opacity-60 italic text-lg text-foreground">
                            Example: {currentItem.example_sentence.replace(new RegExp(currentItem.word_or_phrase, 'gi'), '_____')}
                        </p>
                    )}
                </div>

                {currentItem.type === 'multiple_choice' ? (
                    <div className="grid md:grid-cols-2 gap-4">
                        {options.map((opt) => (
                            <button
                                key={opt.id}
                                onClick={() => handleAnswer(opt.word_or_phrase)}
                                disabled={feedback?.show}
                                className={cn(
                                    "p-6 text-xl font-black uppercase border-2 border-primary transition-all text-left flex justify-between items-center group",
                                    feedback?.show && opt.word_or_phrase.toLowerCase() === currentItem.word_or_phrase.toLowerCase() && "bg-black text-white border-black animate-pulse",
                                    feedback?.show && opt.word_or_phrase.toLowerCase() !== currentItem.word_or_phrase.toLowerCase() && "opacity-30 border-dashed"
                                )}
                            >
                                <span>{opt.word_or_phrase}</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4">
                        <input
                            type="text"
                            autoFocus
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAnswer(inputValue)}
                            disabled={feedback?.show}
                            placeholder="Type your answer here..."
                            className="w-full border-4 border-primary p-6 text-2xl font-black uppercase tracking-widest focus:bg-muted outline-none transition-colors"
                        />
                        <button
                            onClick={() => handleAnswer(inputValue)}
                            disabled={feedback?.show}
                            className="w-full bg-primary text-secondary p-4 font-black uppercase tracking-widest text-xl hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                            Submit Answer
                        </button>
                    </div>
                )}
            </div>

            {feedback?.show && (
                <div className={cn(
                    "fixed inset-x-0 bottom-0 py-6 text-center font-black text-2xl uppercase tracking-[0.3em] z-[100]",
                    feedback.isCorrect ? "bg-black text-white" : "bg-white text-black border-t-8 border-black"
                )}>
                    {feedback.isCorrect ? "Correct!" : `Incorrect - It was "${currentItem.word_or_phrase.toUpperCase()}"`}
                </div>
            )}
        </div>
    );
}
