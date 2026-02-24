"use client";

import React from "react";
import { motion } from "framer-motion";

const strengths = [
    {
        title: "Precision Engineering",
        desc: "Rigorous standards and technical excellence in every detail."
    },
    {
        title: "Safety First",
        desc: "Maintaining the highest safety ratings in the industry."
    },
    {
        title: "Sustainable Focus",
        desc: "Eco-friendly materials and energy-efficient designs."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-charcoal text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-steel/5 -skew-x-12 translate-x-1/4" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-sm font-bold text-muted-orange uppercase tracking-[.3em] mb-4">
                            Our Core Strengths
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-10">
                            Why Industry Leaders <br />Partner With Navi.
                        </h3>

                        <div className="space-y-8">
                            {strengths.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-6"
                                >
                                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0 rounded-sm">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-muted-orange" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 p-12 lg:p-20 rounded-sm border border-white/10 flex flex-col justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                            {[
                                { val: "250+", label: "Expert Professionals" },
                                { val: "15M+", label: "Safe Work Hours" },
                                { val: "45", label: "Global Awards" },
                                { val: "100%", label: "Project Success" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <span className="text-4xl font-bold text-white block mb-2">{stat.val}</span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-orange">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-16 pt-12 border-t border-white/10">
                            <p className="text-gray-400 italic text-lg">
                                "Our reputation is built on the strength of our foundations and the integrity of our people."
                            </p>
                            <p className="mt-4 font-bold uppercase tracking-widest text-xs">- Marcus Thorne, CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
