import { VOCABULARY } from "@/data/vocabulary";
import Link from "next/link";

export default function Home() {
  const phrasalVerbs = VOCABULARY.filter(v => v.category === 'phrasal verbs');
  const slangWords = VOCABULARY.filter(v => v.category === 'slang words');

  return (
    <div className="space-y-16 sm:space-y-24">
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
      <section className="grid sm:grid-cols-2 gap-8 sm:gap-12 px-4 sm:px-0">
        <div className="border-4 border-primary p-6 sm:p-8 space-y-4 hover:bg-muted/50 transition-all group card-hover relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">Phrasal Verbs</h2>
          <p className="text-sm sm:text-base text-foreground/60 font-medium leading-relaxed">
            Essential combinations of verbs and prepositions/adverbs that every fluent speaker knows.
          </p>
          <div className="pt-4 flex items-center justify-between">
            <span className="text-[10px] sm:text-xs font-bold opacity-30">{phrasalVerbs.length} ITEMS</span>
            <Link
              href="/lessons/phrasal-verbs"
              className="font-black text-sm sm:text-base group-hover:translate-x-1 transition-transform underline underline-offset-4"
            >
              EXPLORE &rarr;
            </Link>
          </div>
        </div>

        <div className="border-4 border-primary p-6 sm:p-8 space-y-4 hover:bg-muted/50 transition-all group card-hover relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">Slang Words</h2>
          <p className="text-sm sm:text-base text-foreground/60 font-medium leading-relaxed">
            The informal language used by native speakers. Stay current with modern daily speech.
          </p>
          <div className="pt-4 flex items-center justify-between">
            <span className="text-[10px] sm:text-xs font-bold opacity-30">{slangWords.length} ITEMS</span>
            <Link
              href="/lessons/slang-words"
              className="font-black text-sm sm:text-base group-hover:translate-x-1 transition-transform underline underline-offset-4"
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
