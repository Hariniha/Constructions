"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        title: "Centennial Bridge",
        category: "Infrastructure",
        location: "Chicago, IL",
        year: "2023"
    },
    {
        title: "Skyline Corporate Hub",
        category: "Commercial",
        location: "Houston, TX",
        year: "2022"
    },
    {
        title: "Green Valley High-Rise",
        category: "Residential",
        location: "Miami, FL",
        year: "2024"
    }
];

export default function FeaturedProjects() {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold text-muted-orange uppercase tracking-[.3em] mb-4">
                            Building Legacy
                        </h2>
                        <h3 className="text-4xl md:text-5xl text-charcoal font-bold">
                            Signature Projects.
                        </h3>
                    </div>
                    <Link href="/projects" className="text-sm font-bold uppercase tracking-widest text-charcoal hover:text-muted-orange transition-colors flex items-center gap-2 group">
                        View All Projects
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative h-[500px] bg-off-white overflow-hidden rounded-sm"
                        >
                            {/* Image Placeholder with Overlay */}
                            <div className="absolute inset-0 bg-charcoal/20 transition-all duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-20 h-20 text-white/10 group-hover:text-white/20 transition-colors" strokeWidth="0.5">
                                    <path d="M3 21h18M3 10h18M5 10v11M19 10v11M8 10v11M11 10v11M14 10v11M17 10v11M12 3l8 7H4l8-7z" />
                                </svg>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-orange mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    {project.category}
                                </span>
                                <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                                <div className="flex justify-between items-center text-xs text-gray-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                    <span>{project.location}</span>
                                    <span>{project.year}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
