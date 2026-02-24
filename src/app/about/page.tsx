import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Page Header */}
            <section className="pt-40 pb-20 bg-charcoal text-white">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Legacy</h1>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        Rooted in heritage, driven by innovation. Navi Construction has been redefining the skyline since 1994.
                    </p>
                </div>
            </section>

            {/* History */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-sm font-bold text-muted-orange uppercase tracking-[.3em] mb-4">Our History</h2>
                            <h3 className="text-4xl font-bold text-charcoal mb-8">From Regional Roots to Global Infrastructure.</h3>
                            <div className="space-y-6 text-steel leading-relaxed">
                                <p>
                                    Founded by Arthur Navi in 1994, our company began as a small family-owned masonry firm in Philadelphia. Over the decades, we transitioned through specialized civil engineering into the multi-disciplinary infrastructure conglomerate we are today.
                                </p>
                                <p>
                                    Our journey is marked by pivotal projects that have connected communities, from the first interstate bridge expansion in 1999 to the sustainable industrial hubs we are building today across the East Coast.
                                </p>
                            </div>
                        </div>
                        <div className="bg-off-white aspect-square rounded-sm relative overflow-hidden flex items-center justify-center border border-border-subtle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-32 h-32 text-charcoal/10" strokeWidth="0.5">
                                <path d="M12 2v20M2 12h20" />
                            </svg>
                            <div className="absolute inset-0 bg-[radial-gradient(#4a4a4a_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-off-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-12 shadow-sm border-t-4 border-muted-orange">
                            <h3 className="text-2xl font-bold text-charcoal mb-4 uppercase tracking-tighter">Our Mission</h3>
                            <p className="text-steel leading-relaxed">
                                To engineer and construct infrastructure that enhances human connectivity while minimizing environmental footprint through technical excellence and unwavering integrity.
                            </p>
                        </div>
                        <div className="bg-white p-12 shadow-sm border-t-4 border-charcoal">
                            <h3 className="text-2xl font-bold text-charcoal mb-4 uppercase tracking-tighter">Our Vision</h3>
                            <p className="text-steel leading-relaxed">
                                To be the global benchmark for sustainable engineering, transforming the way the world builds for the next century of progress.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-24 bg-white">
                <div className="container-custom text-center mb-16">
                    <h2 className="text-sm font-bold text-muted-orange uppercase tracking-[.3em] mb-4">Leadership</h2>
                    <h3 className="text-4xl font-bold text-charcoal">The Minds Behind The Machine.</h3>
                </div>
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Person 1 */}
                        <div className="group">
                            <div className="aspect-[3/4] bg-charcoal mb-6 overflow-hidden rounded-sm relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-16 h-16 text-white/10" strokeWidth="1">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                {/* Decorative Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/90 to-transparent p-6 flex flex-col justify-end">
                                    <h4 className="text-xl font-bold text-white">Arthur Navi</h4>
                                    <p className="text-muted-orange text-xs uppercase tracking-[0.2em] font-bold">Founder & Chairman</p>
                                </div>
                            </div>
                        </div>
                        {/* Person 2 */}
                        <div className="group">
                            <div className="aspect-[3/4] bg-steel/20 mb-6 overflow-hidden rounded-sm relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-16 h-16 text-charcoal/10" strokeWidth="1">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/90 to-transparent p-6 flex flex-col justify-end">
                                    <h4 className="text-xl font-bold text-white">Sarah Chen</h4>
                                    <p className="text-muted-orange text-xs uppercase tracking-[0.2em] font-bold">Chief Executive Officer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-charcoal text-white">
                <div className="container-custom">
                    <h2 className="text-sm font-bold text-muted-orange uppercase tracking-[.3em] mb-12 text-center">Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Safety Always", desc: "Uncompromising commitment to the well-being of our workers and the public." },
                            { title: "Technical Mastery", desc: "Pushing the boundaries of engineering through continuous research and training." },
                            { title: "Community Impact", desc: "Building projects that serve people and strengthen societal foundations." }
                        ].map((v, i) => (
                            <div key={i} className="border-l border-white/10 pl-8">
                                <h4 className="text-xl font-bold mb-4">{v.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
