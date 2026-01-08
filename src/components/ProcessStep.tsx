import { motion } from "framer-motion"
import { ScanSearch, Pencil, Send } from "lucide-react"

export function ProcessStep() {
    const steps = [
        {
            title: "Connect Data",
            description: "Sync your CRM and LinkedIn. SellSharp ingests your prospect list instantly.",
            icon: <ScanSearch className="w-8 h-8 text-white" />,
        },
        {
            title: "AI Analysis",
            description: "Our engine builds a psychometric profile and drafts hyper-personalized copy.",
            icon: <Pencil className="w-8 h-8 text-white" />,
        },
        {
            title: "Launch & Scale",
            description: "Approve drafts in bulk and watch your response rates triple automatically.",
            icon: <Send className="w-8 h-8 text-white" />,
        },
    ]

    return (
        <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
                <p className="text-slate-400">From cold lead to warm handshake in three steps.</p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-violet-600/20 via-violet-600 to-violet-600/20 -z-10" />

                {steps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="flex flex-col items-center text-center relative"
                    >
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center mb-6 shadow-lg shadow-violet-600/20 border border-white/10 z-10 relative">
                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-midnight-950 border border-violet-500 flex items-center justify-center text-white font-bold text-sm">
                                {idx + 1}
                            </div>
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-slate-400 max-w-xs">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
