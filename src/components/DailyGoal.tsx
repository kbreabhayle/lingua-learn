"use client";

import { useSettings } from "@/context/SettingsContext";

export default function DailyGoal() {
    const { streak, dailyGoal, dailyProgress } = useSettings();
    const progressPercentage = Math.min((dailyProgress / dailyGoal) * 100, 100);

    return (
        <div className="glass-panel p-4 flex items-center justify-between gap-4 rounded-xl border border-white/20">
            {/* Streak Section */}
            <div className="flex items-center gap-2">
                <div className={`p-2 rounded-full ${streak > 0 ? 'bg-orange-100 text-orange-600' : 'bg-muted text-foreground/40'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.246-2.056-2.05-4.33a5.955 5.955 0 0 1 2.6-2.9C9.9 1.55 11 3.1 11 5.9c0 .72-.28 1.44-.75 2.1-.5.7-1 1.4-1 2.1-.09.9.51 2.1 2.25 2.9.8.35 1.55.45 2.25.4.9-.05 1.7-.5 2.25-1.15.55-.65.25-1.5-.25-2.15l-1.6-2.1c-.2-.3-.5-.5-.85-.6 0 0 1.95.8 2.6 3.15.35 1.25.1 2.65-.55 3.9-.65 1.25-1.85 2.15-2.9 2.5-1.05.35-2.15.25-3.15-.35-.7-.45-1.35-1.05-1.75-1.75z" />
                    </svg>
                </div>
                <div>
                    <span className="text-xl font-black block leading-none">{streak}</span>
                    <span className="text-[10px] uppercase font-bold text-foreground/60">Day Streak</span>
                </div>
            </div>

            {/* divider */}
            <div className="w-px h-8 bg-foreground/10" />

            {/* Goal Progress */}
            <div className="flex-1 space-y-1.5">
                <div className="flex justify-between items-end">
                    <span className="text-xs font-bold uppercase opacity-70">Daily Goal</span>
                    <span className="text-xs font-bold">{dailyProgress} / {dailyGoal}</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-500 ease-out"
                        style={{ width: `${progressPercentage}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
