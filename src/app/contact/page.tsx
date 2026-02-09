"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, User, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <main className="bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-b from-primary/5 to-white">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Get in Touch</span>
                        <h1 className="text-5xl md:text-7xl font-black text-accent mb-6">
                            Let's Engineer Your <br />
                            <span className="gradient-text">Next Big Growth.</span>
                        </h1>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Have questions? Ready to start your campaign? Our team of media experts is standing by to help you scale your business.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-32 relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20">

                        {/* Contact Form Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-12 rounded-[40px] border border-primary/10 shadow-2xl relative"
                        >
                            <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
                                <MessageSquare className="text-primary" />
                                Send us a Message
                            </h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                                            <User size={14} className="text-primary" /> Full Name
                                        </label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-[#f8faff] border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                                            <Mail size={14} className="text-primary" /> Email Address
                                        </label>
                                        <input type="email" placeholder="john@example.com" className="w-full bg-[#f8faff] border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                                        <Briefcase size={14} className="text-primary" /> Interesting In
                                    </label>
                                    <select className="w-full bg-[#f8faff] border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold appearance-none">
                                        <option>Select a Service</option>
                                        <option>Paid Social Advertising</option>
                                        <option>Google Ads (SEM)</option>
                                        <option>Media Planning & Buying</option>
                                        <option>SEO Services</option>
                                        <option>Web Development</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                                        Message
                                    </label>
                                    <textarea rows={5} placeholder="Tell us about your goals..." className="w-full bg-[#f8faff] border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold"></textarea>
                                </div>
                                <button className="btn-primary w-full py-5 text-xl flex items-center justify-center gap-3 active:scale-95">
                                    Send Your Message
                                    <Send size={20} />
                                </button>
                            </form>
                        </motion.div>

                        {/* Info and Map Side */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div>
                                    <h3 className="text-3xl font-black mb-6">Contact Information</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-6 p-6 rounded-3xl bg-[#f8faff] border border-gray-100 group hover:border-primary/20 transition-all shadow-sm">
                                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg ring-1 ring-gray-100 group-hover:scale-110 transition-transform">
                                                <Phone size={24} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Call Us Anywhere</p>
                                                <p className="text-xl font-black text-accent">08113656033</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-6 p-6 rounded-3xl bg-[#f8faff] border border-gray-100 group hover:border-primary/20 transition-all shadow-sm">
                                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg ring-1 ring-gray-100 group-hover:scale-110 transition-transform">
                                                <Mail size={24} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Send an Email</p>
                                                <p className="text-xl font-black text-accent">info@thinqmedia.com.ng</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-6 p-6 rounded-3xl bg-[#f8faff] border border-gray-100 group hover:border-primary/20 transition-all shadow-sm">
                                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg ring-1 ring-gray-100 group-hover:scale-110 transition-transform">
                                                <MapPin size={24} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Our Studio</p>
                                                <p className="text-xl font-black text-accent leading-tight">15 New Life Baptist church street, Okeafa, Lagos State Nigeria</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Map Component */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="h-[350px] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl relative group"
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15856.335961053073!2d3.31500355!3d6.5110599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8eec80c5f2b7%3A0x6b4fb24e4d580f1c!2sIsolo%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all duration-700"
                                ></iframe>
                                <div className="absolute top-4 right-4 glass px-4 py-2 rounded-xl text-xs font-bold pointer-events-none group-hover:opacity-0 transition-opacity">
                                    📍 Click to expand
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
