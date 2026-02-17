"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Level = 'beginner' | 'intermediate' | 'advanced';
type Theme = 'black' | 'white' | 'purple';

interface SettingsContextType {
    level: Level;
    setLevel: (level: Level) => void;
    theme: Theme;
    setTheme: (theme: Theme) => void;
    // Habits
    streak: number;
    dailyGoal: number;
    dailyProgress: number;
    incrementDailyProgress: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
    const [level, setLevel] = useState<Level>('beginner');
    const [theme, setTheme] = useState<Theme>('white');

    // Habit Tracking State
    const [streak, setStreak] = useState<number>(0);
    const [dailyGoal, setDailyGoal] = useState<number>(5); // Default 5 items
    const [dailyProgress, setDailyProgress] = useState<number>(0);

    // Load settings and calculate streak on mount
    useEffect(() => {
        const savedLevel = localStorage.getItem('lingua-level') as Level;
        const savedTheme = localStorage.getItem('lingua-theme') as string;

        // Habit data
        const savedStreak = parseInt(localStorage.getItem('lingua-streak') || '0');
        const lastVisit = localStorage.getItem('lingua-last-visit');
        const savedProgress = parseInt(localStorage.getItem('lingua-daily-progress') || '0');
        const savedGoal = parseInt(localStorage.getItem('lingua-daily-goal') || '5');

        if (savedLevel) setLevel(savedLevel);

        // Migrate legacy 'gray' theme
        if (savedTheme === 'gray' || savedTheme === 'white' || savedTheme === 'black' || savedTheme === 'purple') {
            setTheme(savedTheme === 'gray' ? 'white' : savedTheme as Theme);
        }

        // Streak Logic
        const today = new Date().toDateString();

        if (lastVisit === today) {
            // Same day, keep progress
            setDailyProgress(savedProgress);
            setStreak(savedStreak);
        } else {
            // New day
            setDailyProgress(0); // Reset daily progress

            if (lastVisit) {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);

                if (lastVisit === yesterday.toDateString()) {
                    // Consecutive day, keep streak
                    setStreak(savedStreak);
                } else {
                    // Missed a day (or more), reset streak
                    // We could implement a "streak freeze" feature later
                    setStreak(0);
                }
            } else {
                // First visit
                setStreak(0);
            }
        }

        // Always update last visit to today
        localStorage.setItem('lingua-last-visit', today);
        setDailyGoal(savedGoal);

    }, []);

    // Save settings when they change
    useEffect(() => {
        localStorage.setItem('lingua-level', level);
        localStorage.setItem('lingua-theme', theme);
        localStorage.setItem('lingua-streak', streak.toString());
        localStorage.setItem('lingua-daily-progress', dailyProgress.toString());
        localStorage.setItem('lingua-daily-goal', dailyGoal.toString());
        document.documentElement.setAttribute('data-theme', theme);
    }, [level, theme, streak, dailyProgress, dailyGoal]);

    const incrementDailyProgress = () => {
        setDailyProgress(prev => {
            const newProgress = prev + 1;
            // If goal just met, maybe show animation? (UI handled)
            return newProgress;
        });
    };

    return (
        <SettingsContext.Provider value={{
            level, setLevel,
            theme, setTheme,
            streak, dailyGoal, dailyProgress, incrementDailyProgress
        }}>
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
}
