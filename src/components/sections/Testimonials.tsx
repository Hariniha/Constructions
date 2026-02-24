"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        quote: "Navi consistently delivers beyond expectation. Their technical expertise in large-scale bridge projects is unmatched in the Northeast region.",
        author: "Jameson Wright",
        title: "Director of Infrastructure, DOT",
    },
    {
        quote: "The level of precision and adherence to safety protocols demonstrated by the Navi team during our corporate headquarters build was exceptional.",
        author: "Elena Rodriguez",
        title: "Project Lead, Vesto Corp",
    }
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-24 bg-off-white overflow-hidden">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center relative">
                    <div className="text-muted-orange/20 absolute -top-10 left-1/2 -translate-x-1/2">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 opacity-20">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L14.017 3C13.8443 3 13.6826 3.03125 13.5352 3.09082C13.2539 3.20508 13.0078 3.39844 12.8223 3.65234C12.6367 3.90625 12.5352 4.19531 12.5352 4.5V9C12.5352 10.1046 11.6397 11 10.5352 11H7.53516C6.98287 11 6.53516 11.4477 6.53516 12V18C6.53516 18.5523 6.98287 19 7.53516 19H10.5352C11.6397 19 12.5352 19.8954 12.5352 21L12.5352 21C12.7079 21 12.8696 20.9688 13.0171 20.9092C13.2983 20.7949 13.5444 20.6016 13.73 20.3477C13.9155 20.0938 14.0171 19.8047 14.0171 19.5V15" />
                        </svg>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="relative z-10"
                        >
                            <p className="text-2xl md:text-3xl lg:text-4xl text-charcoal font-medium leading-relaxed italic mb-10">
                                "{testimonials[index].quote}"
                            </p>
                            <div>
                                <h4 className="text-lg font-bold text-charcoal">{testimonials[index].author}</h4>
                                <p className="text-sm text-steel uppercase tracking-widest font-bold mt-1">
                                    {testimonials[index].title}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center gap-6 mt-16">
                        <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-charcoal hover:text-white transition-all group">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={next} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-charcoal hover:text-white transition-all">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
