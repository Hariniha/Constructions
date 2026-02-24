import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-40 pb-24 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-sm font-bold text-muted-orange uppercase tracking-[.3em] mb-4">Connect With Us</h2>
                            <h1 className="text-5xl font-bold text-charcoal mb-8">Start Your Next Project.</h1>
                            <p className="text-lg text-steel mb-12 leading-relaxed">
                                Whether you're planning a massive infrastructure build or a specialized commercial project, our team is ready to provide technical excellence and strategic insight.
                            </p>

                            <div className="space-y-10">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-off-white flex items-center justify-center shrink-0">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-charcoal" strokeWidth="1.5">
                                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-steel mb-2">Technical Support</h4>
                                        <p className="text-xl font-bold text-charcoal">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 bg-off-white flex items-center justify-center shrink-0">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-charcoal" strokeWidth="1.5">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-steel mb-2">Email Inquiries</h4>
                                        <p className="text-xl font-bold text-charcoal">tenders@navi.com</p>
                                    </div>
                                </div>

                                <div className="border-t border-border-subtle pt-10">
                                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-steel mb-6">Operational Hours</h4>
                                    <div className="grid grid-cols-2 gap-4 text-sm font-medium">
                                        <p className="text-steel">Monday - Friday</p>
                                        <p className="text-charcoal">08:00 AM - 06:00 PM</p>
                                        <p className="text-steel">Saturday</p>
                                        <p className="text-charcoal">09:00 AM - 01:00 PM</p>
                                        <p className="text-steel">Sunday</p>
                                        <p className="text-charcoal italic">Closed for Operations</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-off-white p-12 lg:p-16 rounded-sm shadow-sm border border-border-subtle">
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-steel">Full Name</label>
                                        <input type="text" className="w-full bg-white border border-gray-200 px-4 py-4 focus:ring-1 focus:ring-muted-orange outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-steel">Company</label>
                                        <input type="text" className="w-full bg-white border border-gray-200 px-4 py-4 focus:ring-1 focus:ring-muted-orange outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2 relative">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-steel">Project Type</label>
                                    <div className="relative">
                                        <select className="w-full bg-white border border-gray-200 px-4 py-4 focus:ring-1 focus:ring-muted-orange outline-none transition-all appearance-none cursor-pointer text-charcoal pr-12">
                                            <option value="">Select Project Type</option>
                                            <option value="infrastructure">Infrastructure / Civil</option>
                                            <option value="commercial">Commercial Development</option>
                                            <option value="industrial">Industrial Facility</option>
                                            <option value="premium">Premium</option>
                                            <option value="residential">Residential</option>
                                            <option value="residential-basic">Residential - Basic</option>
                                            <option value="residential-moderate">Residential - Moderate</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-steel" strokeWidth="2">
                                                <path d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-steel">Detailed Inquiry</label>
                                    <textarea rows={5} className="w-full bg-white border border-gray-200 px-4 py-4 focus:ring-1 focus:ring-muted-orange outline-none transition-all resize-none"></textarea>
                                </div>
                                <button className="w-full bg-charcoal text-white py-6 text-sm font-bold uppercase tracking-widest hover:bg-muted-orange transition-colors">
                                    Submit Project Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[500px] bg-steel/10 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 grayscale opacity-30">
                    {/* This represents a map background */}
                    <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(0,0,0,0.05)_20px,rgba(0,0,0,0.05)_40px)]" />
                </div>
                <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-muted-orange rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-bounce">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-white" strokeWidth="2.5">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-charcoal">Global Headquarters</h4>
                    <p className="text-steel font-medium mt-2 uppercase tracking-tighter">123 Industrial Way, New York, NY 10001</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
