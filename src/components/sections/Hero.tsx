"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-charcoal">
            {/* Background Graphic/Pattern */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a4a4a_1px,transparent_1px),linear-gradient(to_bottom,#4a4a4a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-charcoal via-transparent to-charcoal" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-muted-orange/10 blur-[120px] rounded-full" />

            <div className="container-custom relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-muted-orange font-bold uppercase tracking-[0.3em] text-sm mb-6 block">
                            ESTABLISHED 1994
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.1] mb-8 tracking-tight">
                            Engineering <br />
                            <span className="text-white/40">The Future Of</span> <br />
                            Infrastructure.
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
                            Navi Construction Group is a leading engineering and construction firm dedicated to delivering complex projects with precision, safety, and innovation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link
                                href="/projects"
                                className="bg-muted-orange text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-orange-600 transition-all transform hover:-translate-y-1 rounded-sm text-center"
                            >
                                View Our Portfolio
                            </Link>
                            <Link
                                href="/about"
                                className="bg-transparent border border-white/20 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all transform hover:-translate-y-1 rounded-sm text-center text-balance"
                            >
                                Our Legacy
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="flex flex-col items-center gap-4">
                    <span className="text-[10px] text-white/30 uppercase tracking-[0.4em] rotate-90 mb-8 origin-left">Scroll</span>
                    <div className="w-[1px] h-20 bg-gradient-to-b from-muted-orange via-muted-orange/20 to-transparent" />
                </div>
            </motion.div>
        </section>
    );
}
