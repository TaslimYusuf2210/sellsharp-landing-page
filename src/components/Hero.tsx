import { motion } from "framer-motion"
import { Send, Zap, Sparkles } from "lucide-react"

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 overflow-hidden">
            {/* Background - No Gradients, just clean white */}

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm font-medium mb-6">
                        <Sparkles className="inline w-3 h-3 mr-1" />
                        AI-Powered Sales
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 mb-6">
                        Turn Cold Leads into <span className="text-blue-600">Hot Conversations</span>
                        <span className="block text-2xl md:text-3xl mt-2 text-slate-500 font-normal">—At Scale.</span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0">
                        Stop sending templates that get ignored. SellSharp researches, personalizes, and delivers emails that actually get replies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all hover:scale-105 shadow-sm">
                            Start Free Trial
                        </button>
                        <button className="px-8 py-3 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold transition-all">
                            View Demo
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Glassmorphism Card -> Clean Card */}
            <motion.div
                className="flex-1 w-full max-w-md relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="relative z-10 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm animate-float">
                    {/* Email Header */}
                    <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 items-center justify-center flex text-sm font-bold text-slate-600">JD</div>
                        <div>
                            <div className="text-sm font-medium text-slate-900">John Doe <span className="text-slate-400 text-xs ml-2">&lt;john@techcorp.com&gt;</span></div>
                            <div className="text-xs text-slate-500">Re: Partnership Opportunity</div>
                        </div>
                        <div className="ml-auto text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">High Priority</div>
                    </div>

                    {/* Email Body */}
                    <div className="space-y-3 mb-6">
                        <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                        <div className="h-4 bg-slate-100 rounded w-full"></div>
                        <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                    </div>

                    {/* Action */}
                    <div className="flex justify-end">
                        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                            <Send className="w-4 h-4" />
                            Send email
                        </button>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full border border-blue-500 shadow-md">
                        <Zap className="w-3 h-3 inline mr-1" />
                        98% Score
                    </div>
                </div>

                {/* Background Decorative Element - replaced with solid border or removed */}
                <div className="absolute inset-0 bg-slate-100 rounded-2xl transform rotate-3 scale-105 -z-10 border border-slate-200"></div>
            </motion.div>
        </section>
    )
}
