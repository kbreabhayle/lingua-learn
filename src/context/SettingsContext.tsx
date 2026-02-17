"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Level = 'beginner' | 'advanced';
type Theme = 'gray' | 'purple';

interface SettingsContextType {
    level: Level;
    setLevel: (level: Level) => void;
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
    const [level, setLevel] = useState<Level>('beginner');
    const [theme, setTheme] = useState<Theme>('gray');

    // Load settings from localStorage on mount
    useEffect(() => {
        const savedLevel = localStorage.getItem('lingua-level') as Level;
        const savedTheme = localStorage.getItem('lingua-theme') as Theme;

        if (savedLevel) setLevel(savedLevel);
        if (savedTheme) setTheme(savedTheme);
    }, []);

    // Save settings when they change
    useEffect(() => {
        localStorage.setItem('lingua-level', level);
        localStorage.setItem('lingua-theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [level, theme]);

    return (
        <SettingsContext.Provider value={{ level, setLevel, theme, setTheme }}>
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
