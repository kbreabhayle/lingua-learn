import { VOCABULARY } from "@/data/vocabulary";
import Link from "next/link";

export default function Home() {
  const phrasalVerbs = VOCABULARY.filter(v => v.category === 'phrasal verbs');
  const slangWords = VOCABULARY.filter(v => v.category === 'slang words');

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center pt-8 pb-16 space-y-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
          English <br /> Unlocked
        </h1>
        <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
          Master 500+ phrasal verbs and slang words. Minimalist design for maximum focus.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="/lessons"
            className="bg-primary text-secondary px-8 py-3 font-bold hover:scale-105 transition-transform high-contrast-focus"
          >
            START LEARNING
          </Link>
          <Link
            href="/quizzes"
            className="border-2 border-primary px-8 py-3 font-bold hover:bg-primary hover:text-secondary transition-colors high-contrast-focus"
          >
            TAKE A QUIZ
          </Link>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="grid md:grid-cols-2 gap-12">
        <div className="border-4 border-primary p-8 space-y-4 hover:bg-muted transition-colors group">
          <h2 className="text-3xl font-black uppercase tracking-tight">Phrasal Verbs</h2>
          <p className="text-foreground/60 font-medium">
            Essential combinations of verbs and prepositions/adverbs that every fluent speaker knows.
          </p>
          <div className="pt-4 flex items-center justify-between">
            <span className="text-sm font-bold opacity-40">{phrasalVerbs.length} ITEMS</span>
            <Link
              href="/lessons/phrasal-verbs"
              className="font-black group-hover:translate-x-2 transition-transform underline underline-offset-4"
            >
              EXPLORE &rarr;
            </Link>
          </div>
        </div>

        <div className="border-4 border-primary p-8 space-y-4 hover:bg-muted transition-colors group">
          <h2 className="text-3xl font-black uppercase tracking-tight">Slang Words</h2>
          <p className="text-foreground/60 font-medium">
            The informal language used by native speakers. Stay current with modern daily speech.
          </p>
          <div className="pt-4 flex items-center justify-between">
            <span className="text-sm font-bold opacity-40">{slangWords.length} ITEMS</span>
            <Link
              href="/lessons/slang-words"
              className="font-black group-hover:translate-x-2 transition-transform underline underline-offset-4"
            >
              EXPLORE &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Lesson / Quick Start */}
      <section className="bg-primary text-secondary p-12 text-center space-y-6">
        <h2 className="text-2xl font-bold italic">"Language is the road map of a culture."</h2>
        <p className="max-w-xl mx-auto text-secondary/80">
          Our adaptive system prioritizes words you find challenging, ensuring efficient learning.
        </p>
      </section>
    </div>
  );
}
