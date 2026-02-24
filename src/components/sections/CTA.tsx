"use client";

import React from "react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-20 bg-muted-orange">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
                    <div className="max-w-2xl">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Start Your Next Landmark Project?
                        </h3>
                        <p className="text-white/80 text-lg">
                            Partner with the engineering firm that prioritizes your vision and technical requirements. Get in touch for a consultation.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="bg-charcoal text-white px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all shadow-xl rounded-sm whitespace-nowrap"
                    >
                        Request a Consultation
                    </Link>
                </div>
            </div>
        </section>
    );
}
