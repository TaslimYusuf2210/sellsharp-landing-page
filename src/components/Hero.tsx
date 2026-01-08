import { motion } from "framer-motion"
import { Send, Zap, Sparkles } from "lucide-react"

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -z-10" />

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-violet-900/30 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
                        <Sparkles className="inline w-3 h-3 mr-1" />
                        AI-Powered Sales
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Turn Cold Leads into <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-emerald-400">Hot Conversations</span>
                        <span className="block text-2xl md:text-3xl mt-2 text-slate-400 font-normal opacity-80">—At Scale.</span>
                    </h1>
                    <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto md:mx-0">
                        Stop sending templates that get ignored. SellSharp researches, personalizes, and delivers emails that actually get replies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                            Start Free Trial
                        </button>
                        <button className="px-8 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold transition-all">
                            View Demo
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Glassmorphism Card */}
            <motion.div
                className="flex-1 w-full max-w-md relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl animate-float">
                    {/* Email Header */}
                    <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                        <div className="w-10 h-10 rounded-full bg-slate-700 items-center justify-center flex text-sm font-bold text-white">JD</div>
                        <div>
                            <div className="text-sm font-medium text-white">John Doe <span className="text-slate-500 text-xs ml-2">&lt;john@techcorp.com&gt;</span></div>
                            <div className="text-xs text-slate-400">Re: Partnership Opportunity</div>
                        </div>
                        <div className="ml-auto text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">High Priority</div>
                    </div>

                    {/* Email Body */}
                    <div className="space-y-3 mb-6">
                        <div className="h-4 bg-white/10 rounded w-3/4"></div>
                        <div className="h-4 bg-white/10 rounded w-full"></div>
                        <div className="h-4 bg-white/10 rounded w-5/6"></div>
                    </div>

                    {/* Action */}
                    <div className="flex justify-end">
                        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg text-sm font-medium transition-colors">
                            <Send className="w-4 h-4" />
                            Send email
                        </button>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -top-4 -right-4 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full border border-violet-400 shadow-lg">
                        <Zap className="w-3 h-3 inline mr-1" />
                        98% Score
                    </div>
                </div>

                {/* Background Decorative Element */}
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 to-emerald-500/30 rounded-2xl transform rotate-3 scale-105 -z-10 blur-sm"></div>
            </motion.div>
        </section>
    )
}
