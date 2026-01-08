import { AlertCircle, Clock, Battery } from "lucide-react"

export function ProblemSection() {
    const problems = [
        {
            title: "The Template Trap",
            description: "Generic templates get generic results. Prospects can smell a mass email from a mile away.",
            icon: <AlertCircle className="w-10 h-10 text-red-500" />,
        },
        {
            title: "The Time Sink",
            description: "Researching meaningful personalization takes 15+ minutes per lead. It's unscalable.",
            icon: <Clock className="w-10 h-10 text-orange-500" />,
        },
        {
            title: "The Follow-up Fatigue",
            description: "Most reps stop after 2 attempts. 80% of sales happen after the 5th contact.",
            icon: <Battery className="w-10 h-10 text-yellow-500" />,
        },
    ]

    return (
        <section className="py-20 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                    Why Your Cold Outreach is <span className="text-red-500">Failing</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((prob, idx) => (
                        <div key={idx} className="bg-midnight-950 border border-white/5 p-8 rounded-2xl hover:border-red-500/30 transition-colors">
                            <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                {prob.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{prob.title}</h3>
                            <p className="text-slate-400">{prob.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
