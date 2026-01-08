import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
                    Loved by High-Growth Teams
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white border border-slate-200 p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-all"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100" />
                            <p className="text-slate-600 italic mb-6">
                                "SellSharp completely transformed our outbound play. We went from a 2% reply rate to 12% in just two weeks. It's insane."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-200" />
                                <div>
                                    <div className="text-slate-900 font-semibold">Sarah Jenkins</div>
                                    <div className="text-slate-500 text-sm">VP of Sales, TechFlow</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
