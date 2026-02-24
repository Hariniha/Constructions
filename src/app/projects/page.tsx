"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const projects = [
    { id: 1, title: "Grand Terminal Hub", category: "Commercial Development", location: "New York, NY", size: "2.4M sq / ft" },
    { id: 2, title: "Steel River Bridge", category: "Infrastructure / Civil", location: "Pittsburgh, PA", size: "1.2 km Span" },
    { id: 3, title: "Willow Creek Estates", category: "Residential", location: "Asheville, NC", size: "45 Units" },
    { id: 4, title: "Metro Power Plant", category: "Industrial Facility", location: "Cleveland, OH", size: "500MW Capacity" },
    { id: 5, title: "The Meridian Plaza", category: "Commercial Development", location: "Seattle, WA", size: "45 Floors" },
    { id: 6, title: "Eco-Village Alpha", category: "Residential", location: "Austin, TX", size: "20 Sustainable Homes" },
    { id: 7, title: "Summit Executive Suites", category: "Premium", location: "San Francisco, CA", size: "Luxury Build" },
    { id: 8, title: "Pine Crest Housing", category: "Residential - Basic", location: "Denver, CO", size: "Starter Homes" },
    { id: 9, title: "Oakwood Community", category: "Residential - Moderate", location: "Portland, OR", size: "Family Ready" },
];

const categories = ["All", "Infrastructure / Civil", "Commercial Development", "Industrial Facility", "Premium", "Residential", "Residential - Basic", "Residential - Moderate"];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-20 bg-white border-b border-border-subtle">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6">Our Portfolio</h1>
                    <p className="text-xl text-steel max-w-2xl mb-12">
                        A showcase of our most complex and rewarding engineering achievements across the country.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-sm",
                                    activeCategory === cat
                                        ? "bg-charcoal text-white"
                                        : "bg-off-white text-charcoal hover:bg-gray-200"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5 }}
                                    className="group relative aspect-square bg-off-white overflow-hidden cursor-pointer"
                                >
                                    {/* Background Icon/Graphic */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-40 h-40" strokeWidth="0.5">
                                            <path d="M3 21h18M3 10h18M5 10v11M19 10v11M8 10v11M11 10v11M14 10v11M17 10v11M12 3l8 7H4l8-7z" />
                                        </svg>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-charcoal translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out px-10 py-12 flex flex-col justify-between text-white">
                                        <div>
                                            <span className="text-muted-orange text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">
                                                {project.category}
                                            </span>
                                            <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                                            <p className="text-gray-400 text-sm">{project.location}</p>
                                        </div>

                                        <div className="border-t border-white/10 pt-6">
                                            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
                                                <span className="text-white/50">Scale</span>
                                                <span>{project.size}</span>
                                            </div>
                                            <div className="mt-8 flex items-center gap-2 group/btn">
                                                <span className="text-xs font-bold uppercase tracking-widest">View Details</span>
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" strokeWidth="2">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Default State Content (Bottom) */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 group-hover:opacity-0 transition-opacity">
                                        <h4 className="text-xl font-bold text-charcoal">{project.title}</h4>
                                        <p className="text-steel text-xs uppercase tracking-widest font-bold mt-1">{project.location}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
