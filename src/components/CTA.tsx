import { ArrowRight } from "lucide-react"

export function CTA() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-5xl mx-auto bg-blue-600 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden group">

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to Fill Your Pipeline?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Join 2,000+ sales teams crushing their quota with SellSharp. No credit card required.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg">
                            Start Free Trial <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 rounded-xl bg-transparent border border-blue-400 text-white font-bold text-lg hover:bg-blue-700 transition-colors">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
