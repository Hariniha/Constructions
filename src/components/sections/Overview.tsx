"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Overview() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold text-muted-orange uppercase tracking-[.3em] mb-4">
                            Our Identity
                        </h2>
                        <h3 className="text-4xl md:text-5xl text-charcoal font-bold leading-tight mb-8">
                            Excellence in Engineering, <br />Built on Integrity.
                        </h3>
                        <p className="text-steel-gray text-lg leading-relaxed mb-8">
                            For over three decades, Navi has been at the forefront of the construction industry. We don't just build structures; we create landmarks that stand the test of time. Our approach combines traditional craftsmanship with cutting-edge engineering technology.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-3xl font-bold text-charcoal mb-1">30+</h4>
                                <p className="text-xs text-steel-gray uppercase tracking-widest font-bold">Years of Experience</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-charcoal mb-1">500+</h4>
                                <p className="text-xs text-steel-gray uppercase tracking-widest font-bold">Projects Delivered</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] bg-off-white relative overflow-hidden rounded-sm group">
                            {/* This represents a large professional image */}
                            <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-24 h-24 text-charcoal/20" strokeWidth="1">
                                    <path d="M3 21h18M3 10h18M5 10v11M19 10v11M8 10v11M11 10v11M14 10v11M17 10v11M12 3l8 7H4l8-7z" />
                                </svg>
                            </div>

                            {/* Abstract Blueprint Grid Overlay */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4a4a4a_1px,transparent_1px)] [background-size:20px_20px]" />

                            <div className="absolute -bottom-6 -left-6 bg-muted-orange text-white p-10 hidden md:block">
                                <span className="text-5xl font-bold block mb-2">98%</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Client Satisfaction Rate</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
