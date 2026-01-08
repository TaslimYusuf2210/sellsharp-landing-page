import { ArrowRight } from "lucide-react"

export function CTA() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-violet-900/50 to-indigo-900/50 border border-violet-500/30 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden group">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-violet-600/20 blur-[100px] rounded-full" />

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to Fill Your Pipeline?
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Join 2,000+ sales teams crushing their quota with SellSharp. No credit card required.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-violet-900 font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg">
                            Start Free Trial <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 rounded-xl bg-transparent border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-colors">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
