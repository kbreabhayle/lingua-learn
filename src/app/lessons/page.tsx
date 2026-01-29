import { VOCABULARY } from "@/data/vocabulary";
import Link from "next/link";

export default function LessonsPage() {
    const categories = [
        {
            name: "Phrasal Verbs",
            slug: "phrasal-verbs",
            description: "Verbs combined with prepositions or adverbs.",
            count: VOCABULARY.filter(v => v.category === 'phrasal verbs').length
        },
        {
            name: "Slang Words",
            slug: "slang-words",
            description: "Informal language and contemporary expressions.",
            count: VOCABULARY.filter(v => v.category === 'slang words').length
        }
    ];

    return (
        <div className="space-y-12 animate-fade-in">
            <div className="border-l-8 border-primary pl-6 py-2">
                <h1 className="text-5xl font-black uppercase">Lessons</h1>
                <p className="text-foreground/60 font-medium">Select a category to begin your study session.</p>
            </div>

            <div className="grid gap-6">
                {categories.map((cat) => (
                    <Link
                        key={cat.slug}
                        href={`/lessons/${cat.slug}`}
                        className="group border-2 border-primary p-8 hover:bg-primary hover:text-secondary transition-all flex flex-col md:flex-row md:items-center justify-between"
                    >
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black uppercase tracking-tight">{cat.name}</h2>
                            <p className="opacity-70 group-hover:opacity-100 transition-opacity max-w-md">
                                {cat.description}
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0 text-right">
                            <span className="text-4xl font-black">{cat.count}</span>
                            <p className="text-xs font-bold uppercase opacity-60">Total Items</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
