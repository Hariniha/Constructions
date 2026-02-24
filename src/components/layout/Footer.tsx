import React from "react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal text-white pt-20 pb-10 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Col */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-muted-orange flex items-center justify-center rounded-sm">
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
                            <span className="text-2xl font-bold tracking-tighter uppercase font-heading">
                                Navi
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Building the future with precision engineering and sustainable infrastructure solutions since 1994.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons (Custom SVGs) */}
                            {[1, 2, 3].map((i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-muted-orange hover:border-muted-orange transition-colors"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.627h-3.12V24h6.116c.73 0 1.325-.597 1.325-1.326V1.326C24 .597 23.403 0 22.675 0z" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/50">Navigation</h4>
                        <ul className="space-y-4">
                            {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/50">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex gap-3">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-muted-orange shrink-0" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                123 Industrial Way, Suite 500<br />New York, NY 10001
                            </li>
                            <li className="flex gap-3 items-center">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-muted-orange shrink-0" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                                +1 (555) 123-4567
                            </li>
                            <li className="flex gap-3 items-center">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-muted-orange shrink-0" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                contact@navi.com
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/50">Stay Updated</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe for the latest project updates and industry news.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-gray-800 border-none px-4 py-2 text-sm w-full focus:ring-1 focus:ring-muted-orange"
                            />
                            <button className="bg-muted-orange px-4 py-2 hover:bg-orange-600 transition-colors">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
                    <p>© {currentYear} Navi Construction Group. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
