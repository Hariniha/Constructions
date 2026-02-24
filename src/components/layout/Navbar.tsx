"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-border-subtle"
                    : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-charcoal flex items-center justify-center rounded-sm transition-colors group-hover:bg-muted-orange">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-6 h-6 text-white"
                            strokeWidth="2.5"
                        >
                            <path d="M3 21h18M3 10h18M5 10v11M19 10v11M8 10v11M11 10v11M14 10v11M17 10v11M12 3l8 7H4l8-7z" />
                        </svg>
                    </div>
                    <span
                        className={cn(
                            "text-2xl font-bold tracking-tighter uppercase font-heading",
                            isScrolled ? "text-charcoal" : "text-charcoal" // Keeping it consistent for visibility
                        )}
                    >
                        Navi
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium uppercase tracking-widest transition-colors hover:text-muted-orange relative py-1",
                                pathname === link.href ? "text-muted-orange" : "text-charcoal"
                            )}
                        >
                            {link.name}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted-orange"
                                />
                            )}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-charcoal text-white px-6 py-2.5 text-sm font-bold uppercase tracking-widest hover:bg-muted-orange transition-colors rounded-sm"
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-charcoal"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-8 h-8"
                            strokeWidth="2"
                        >
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-8 h-8"
                            strokeWidth="2"
                        >
                            <path d="M4 8h16M4 16h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-border-subtle p-6 flex flex-col gap-4 md:hidden shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={cn(
                                    "text-lg font-bold uppercase tracking-widest",
                                    pathname === link.href ? "text-muted-orange" : "text-charcoal"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="bg-charcoal text-white px-6 py-3 text-center font-bold uppercase tracking-widest mt-4 rounded-sm"
                        >
                            Get a Quote
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
