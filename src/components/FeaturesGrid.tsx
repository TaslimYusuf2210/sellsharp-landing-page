import { motion } from "framer-motion"
import { Users, Crosshair, Workflow } from "lucide-react"

interface FeatureCardProps {
    title: string
    description: string
    icon: React.ReactNode
    className?: string
    delay?: number
}

function FeatureCard({ title, description, icon, className = "", delay = 0 }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group ${className}`}
        >
            <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center mb-4 text-violet-400 group-hover:text-violet-300 group-hover:scale-110 transition-all">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </motion.div>
    )
}

export function FeaturesGrid() {
    return (
        <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Precision at Every Step</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Our AI doesn't just write. It understands your prospect, predicts their needs, and builds the perfect path to conversion.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 grid-rows-none md:grid-rows-2 h-auto md:h-[500px]">
                {/* Large Card */}
                <FeatureCard
                    title="Persona Mimic"
                    description="Analyze your best sales reps and clone their tone, style, and objection handling. Consistently deliver top-tier communication without the burnout."
                    icon={<Users className="w-6 h-6" />}
                    className="md:col-span-2 md:row-span-2 flex flex-col justify-center bg-gradient-to-br from-white/5 to-violet-900/10"
                    delay={0.1}
                />

                {/* Top Right */}
                <FeatureCard
                    title="Predictive Scoring"
                    description="Prioritize leads based on engagement probability."
                    icon={<Crosshair className="w-6 h-6" />}
                    delay={0.3}
                />

                {/* Bottom Right */}
                <FeatureCard
                    title="Sequence Architect"
                    description="Drag-and-drop workflow builder for multi-channel touches."
                    icon={<Workflow className="w-6 h-6" />}
                    delay={0.4}
                />
            </div>
        </section>
    )
}
