import Quiz from "@/components/Quiz";
import { Suspense } from "react";

export default function QuizzesPage() {
    return (
        <div className="container py-8 sm:py-12">
            <Suspense fallback={<div className="text-center p-12">Loading Quiz...</div>}>
                <Quiz />
            </Suspense>
        </div>
    );
}
