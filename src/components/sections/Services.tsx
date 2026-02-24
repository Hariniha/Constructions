"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Civil Engineering",
        description: "Designing and overseeing the construction of public and private infrastructure projects.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        title: "Project Management",
        description: "End-to-end management ensuring timelines, budgets, and quality standards are exceeded.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
        ),
    },
    {
        title: "Eco-Construction",
        description: "Implementing sustainable building practices and green energy integration in every build.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
    },
    {
        title: "Industrial Design",
        description: "Large-scale industrial solutions for manufacturing, logistics, and processing plants.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 20h20M5 20V8l7-4 7 4v12M9 20v-4h6v4" />
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <section className="py-24 bg-off-white">
            <div className="container-custom">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold text-muted-orange uppercase tracking-[.3em] mb-4">
                        Our Expertise
                    </h2>
                    <h3 className="text-4xl md:text-5xl text-charcoal font-bold mb-6">
                        Comprehensive Building Solutions
                    </h3>
                    <p className="text-steel-gray">
                        We provide a full range of construction and engineering services, tailored to meet the specific requirements of each project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-10 group hover:bg-charcoal transition-all duration-500 rounded-sm border-b-4 border-transparent hover:border-muted-orange shadow-sm"
                        >
                            <div className="w-14 h-14 text-muted-orange mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:text-white">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-charcoal mb-4 group-hover:text-white">
                                {service.title}
                            </h4>
                            <p className="text-steel-gray text-sm leading-relaxed group-hover:text-gray-400">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
