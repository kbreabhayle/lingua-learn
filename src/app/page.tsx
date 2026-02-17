import { VOCABULARY } from "@/data/vocabulary";
import Link from "next/link";
import DailyGoal from "@/components/DailyGoal";

export default function Home() {
  const phrasalVerbs = VOCABULARY.filter(v => v.category === 'phrasal verbs');
  const slangWords = VOCABULARY.filter(v => v.category === 'slang words');
  const grammar = VOCABULARY.filter(v => v.category === 'grammar');
  const foundational = VOCABULARY.filter(v => v.category === 'foundational');

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Habit Tracker */}
      <section className="max-w-md mx-auto px-4 -mb-8 sm:-mb-16 relative z-10">
        <DailyGoal />
      </section>

      {/* Hero Section */}
      <section className="text-center pt-8 sm:pt-16 pb-12 sm:pb-24 space-y-6 sm:space-y-8 animate-fade-in px-4">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] sm:leading-none">
          English <br className="hidden sm:block" /> Unlocked
        </h1>
        <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
          Master 500+ phrasal verbs and slang words. Minimalist design for maximum focus.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link
            href="/lessons"
            className="bg-primary text-secondary px-8 py-3.5 font-bold hover:scale-105 transition-transform high-contrast-focus text-center"
          >
            START LEARNING
          </Link>
          <Link
            href="/quizzes"
            className="border-2 border-primary px-8 py-3.5 font-bold hover:bg-primary hover:text-secondary transition-all high-contrast-focus text-center"
          >
            TAKE A QUIZ
          </Link>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="glass-panel p-6 sm:p-8 space-y-4 hover:bg-white/50 transition-all group card-hover relative overflow-hidden rounded-xl">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-primary">Foundational</h2>
          <p className="text-sm sm:text-base text-foreground/80 font-medium leading-relaxed">
            The basics. Numbers, colors, days, and essential survival phrases.
          </p>
          <div className="pt-4 flex items-center justify-between">
            <span className="text-[10px] sm:text-xs font-bold opacity-50 text-foreground">{foundational.length} ITEMS</span>
            <Link
              href="/lessons/foundational"
              className="font-black text-sm sm:text-base group-hover:translate-x-1 transition-transform underline underline-offset-4 text-primary"
            >
              EXPLORE &rarr;
            </Link>
          </div>
        </div>

        <div className="glass-panel p-6 sm:p-8 space-y-4 hover:bg-white/50 transition-all group card-hover relative overflow-hidden rounded-xl">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-primary">Phrasal Verbs</h2>
          <p className="text-sm sm:text-base text-foreground/80 font-medium leading-relaxed">
            Essential combinations of verbs and prepositions/adverbs that every fluent speaker knows.
          </p>
          <div className="pt-4 flex items-center justify-between">
            <span className="text-[10px] sm:text-xs font-bold opacity-50 text-foreground">{phrasalVerbs.length} ITEMS</span>
            <Link
              href="/lessons/phrasal-verbs"
              className="font-black text-sm sm:text-base group-hover:translate-x-1 transition-transform underline underline-offset-4 text-primary"
            >
              EXPLORE &rarr;
            </Link>
          </div>
        </div>

        <div className="glass-panel p-6 sm:p-8 space-y-4 hover:bg-white/50 transition-all group card-hover relative overflow-hidden rounded-xl">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-primary">Slang Words</h2>
          <p className="text-sm sm:text-base text-foreground/80 font-medium leading-relaxed">
            The informal language used by native speakers. Stay current with modern daily speech.
          </p>
          <div className="pt-4 flex items-center justify-between">
            <span className="text-[10px] sm:text-xs font-bold opacity-50 text-foreground">{slangWords.length} ITEMS</span>
            <Link
              href="/lessons/slang-words"
              className="font-black text-sm sm:text-base group-hover:translate-x-1 transition-transform underline underline-offset-4 text-primary"
            >
              EXPLORE &rarr;
            </Link>
          </div>
        </div>

        <div className="glass-panel p-6 sm:p-8 space-y-4 hover:bg-white/50 transition-all group card-hover relative overflow-hidden rounded-xl sm:col-span-2 lg:col-span-1">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-primary">Grammar</h2>
          <p className="text-sm sm:text-base text-foreground/80 font-medium leading-relaxed">
            Master the rules of the language. Tenses, conditionals, and sentence structures.
          </p>
          <div className="pt-4 flex items-center justify-between">
            <span className="text-[10px] sm:text-xs font-bold opacity-50 text-foreground">{grammar.length} ITEMS</span>
            <Link
              href="/lessons/grammar"
              className="font-black text-sm sm:text-base group-hover:translate-x-1 transition-transform underline underline-offset-4 text-primary"
            >
              EXPLORE &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="bg-primary text-secondary p-8 sm:p-16 text-center space-y-6 sm:rounded-sm shadow-xl mx-4 sm:mx-0">
        <h2 className="text-xl sm:text-3xl font-bold italic opacity-90 leading-tight">"Language is the road map of a culture."</h2>
        <div className="h-1 w-12 bg-secondary/30 mx-auto" />
        <p className="max-w-xl mx-auto text-sm sm:text-base text-secondary/70 font-medium tracking-wide">
          Our adaptive system prioritizes words you find challenging, ensuring efficient learning.
        </p>
      </section>
    </div>
  );
}
