"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "lingua-learn-progress";

export interface UserProgress {
    completedItems: string[];
    quizScores: { quizId: string; score: number; total: number }[];
    overallProgress: number;
}

export const useProgress = () => {
    const [progress, setProgress] = useState<UserProgress>({
        completedItems: [],
        quizScores: [],
        overallProgress: 0,
    });

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                setProgress(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse progress", e);
            }
        }
    }, []);

    const saveProgress = (newProgress: UserProgress) => {
        setProgress(newProgress);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
    };

    const markItemAsComplete = (itemId: string) => {
        if (progress.completedItems.includes(itemId)) return;
        const newCompleted = [...progress.completedItems, itemId];
        saveProgress({
            ...progress,
            completedItems: newCompleted,
            // Recalculate percentage elsewhere or here
        });
    };

    return { progress, markItemAsComplete, saveProgress };
};
