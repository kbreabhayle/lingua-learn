import { VOCABULARY } from "@/data/vocabulary";
import Link from "next/link";
import { useSettings } from "@/context/SettingsContext";

export default function LessonsPage() {
    const { level } = useSettings();

    // Filter vocabulary based on selected level
    // Map 'advanced' setting to 'intermediate' data for now, or assume data will be updated
    const targetDifficulty = level === 'beginner' ? 'beginner' : 'intermediate';

    const filteredVocab = VOCABULARY.filter(v => v.difficulty === targetDifficulty);

    const categories = [
        {
            name: "Phrasal Verbs",
            slug: "phrasal-verbs",
            description: "Verbs combined with prepositions or adverbs.",
            count: filteredVocab.filter(v => v.category === 'phrasal verbs').length
        },
        {
            name: "Slang Words",
            slug: "slang-words",
            description: "Informal language and contemporary expressions.",
            count: filteredVocab.filter(v => v.category === 'slang words').length
        }
    ];

    return (
        <div className="space-y-12 animate-fade-in">
            <div className="border-l-4 sm:border-l-8 border-primary pl-4 sm:pl-6 py-2">
                <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">Lessons</h1>
                <p className="text-foreground/60 font-medium text-sm sm:base">Select a category to begin your study session.</p>
            </div>

            <div className="grid gap-4 sm:gap-6">
                {categories.map((cat) => (
                    <Link
                        key={cat.slug}
                        href={`/lessons/${cat.slug}`}
                        className="group glass-panel p-6 sm:p-8 hover:bg-white/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between card-hover rounded-xl text-foreground"
                    >
                        <div className="space-y-1 sm:space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-primary">{cat.name}</h2>
                            <p className="text-sm sm:text-base opacity-70 group-hover:opacity-100 transition-opacity max-w-md">
                                {cat.description}
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-0 text-left sm:text-right">
                            <span className="text-3xl sm:text-4xl font-black block text-primary">{cat.count}</span>
                            <p className="text-[10px] sm:text-xs font-bold uppercase opacity-60">Total Items</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
