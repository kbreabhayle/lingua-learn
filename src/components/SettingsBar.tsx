"use client";

import { useSettings } from "@/context/SettingsContext";

export default function SettingsBar() {
    const { level, setLevel, theme, setTheme } = useSettings();

    return (
        <div className="glass-panel border-b border-white/20 sticky top-16 z-40">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">

                {/* Level Toggle */}
                <div className="flex items-center gap-3">
                    <span className="font-bold uppercase opacity-60 tracking-wider text-foreground">Level:</span>
                    <div className="flex bg-muted/50 p-1 rounded-lg">
                        <button
                            onClick={() => setLevel('beginner')}
                            className={`px-4 py-1.5 rounded-md font-bold transition-all ${level === 'beginner'
                                    ? 'bg-primary text-secondary shadow-sm'
                                    : 'text-foreground/60 hover:text-foreground'
                                }`}
                        >
                            Beginner
                        </button>
                        <button
                            onClick={() => setLevel('advanced')}
                            className={`px-4 py-1.5 rounded-md font-bold transition-all ${level === 'advanced'
                                    ? 'bg-primary text-secondary shadow-sm'
                                    : 'text-foreground/60 hover:text-foreground'
                                }`}
                        >
                            Advanced
                        </button>
                    </div>
                </div>

                {/* Theme Toggle */}
                <div className="flex items-center gap-3">
                    <span className="font-bold uppercase opacity-60 tracking-wider text-foreground">Theme:</span>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setTheme('gray')}
                            className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${theme === 'gray' ? 'border-primary ring-2 ring-primary/30' : 'border-transparent'
                                }`}
                            style={{ background: '#374151' }} // Gray representation
                            aria-label="Gray Theme"
                        />
                        <button
                            onClick={() => setTheme('purple')}
                            className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${theme === 'purple' ? 'border-purple-600 ring-2 ring-purple-600/30' : 'border-transparent'
                                }`}
                            style={{ background: '#7c3aed' }} // Purple representation
                            aria-label="Purple Theme"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
