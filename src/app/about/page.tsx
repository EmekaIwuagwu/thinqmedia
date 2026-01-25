"use client";

import { motion } from "framer-motion";
import { Users, Eye, TrendingUp, Award, CheckCircle2, Heart, Lightbulb, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="bg-white">
            <Navbar />

            {/* Visual Header */}
            <section className="relative pt-48 pb-32 overflow-hidden bg-white">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 block">Our Story</span>
                            <h1 className="text-6xl md:text-8xl font-black text-accent mb-10 leading-[1.1]">
                                Thinking <br />
                                <span className="gradient-text italic">Ahead</span>.
                            </h1>
                            <p className="text-2xl text-gray-500 font-medium leading-relaxed mb-12">
                                ThinqMedia was founded on the principles of innovation and creativity, specifically designed to help businesses navigate the complexity of the digital age.
                            </p>
                            <div className="flex gap-10">
                                <div>
                                    <h4 className="text-4xl font-black text-primary">50%</h4>
                                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mt-2">Visibility Lift</p>
                                </div>
                                <div className="border-l border-gray-100 pl-10">
                                    <h4 className="text-4xl font-black text-primary">200%</h4>
                                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mt-2">SEO Reach</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="relative z-10 rounded-[60px] overflow-hidden aspect-square border-8 border-white shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                                    alt="ThinqMedia Strategy Team"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                            </div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
                            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary-dark/10 rounded-full blur-[100px]" />

                            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl z-20 shadow-xl border border-white">
                                <p className="text-sm font-black uppercase tracking-widest text-primary mb-1">Impact First</p>
                                <h4 className="text-2xl font-black text-accent">Strategic Vision</h4>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Stats />

            {/* Mission & Philosophy */}
            <section className="py-32 bg-[#f8faff]">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        <motion.div
                            className="glass p-16 rounded-[60px] border border-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                                <Heart size={32} />
                            </div>
                            <h2 className="text-4xl font-black mb-8">Our Mission</h2>
                            <p className="text-xl text-gray-500 leading-relaxed font-medium mb-12">
                                "To deliver personalized digital media solutions that drive measurable results, foster long-term partnerships, and make a lasting impact on our clients’ success."
                            </p>
                            <ul className="space-y-4">
                                {["Innovation-Led", "Measurable Impact", "Partnership Focus"].map((t) => (
                                    <li key={t} className="flex items-center gap-3 font-black text-sm uppercase tracking-widest text-primary">
                                        <CheckCircle2 size={18} /> {t}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="glass p-16 rounded-[60px] border border-white bg-accent text-white overflow-hidden relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-primary-dark text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                                    <Lightbulb size={32} />
                                </div>
                                <h2 className="text-4xl font-black mb-8">Our Philosophy</h2>
                                <p className="text-xl text-gray-300 leading-relaxed font-medium mb-12">
                                    We believe in engineering growth, not just running ads. Our strategy is founded on deep market data, creative excellence, and the relentless pursuit of your ROI.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <p className="text-2xl font-black mb-1">Data</p>
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Insights Driven</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <p className="text-2xl font-black mb-1">Scale</p>
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Growth Focused</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                                    alt="Data Analysis"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Image Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="relative h-[500px] rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
                        <Image
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
                            alt="Digital Agency Office"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/20" />
                    </div>
                </div>
            </section>

            {/* Leadership / Team Values */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-10 block">Why it Works</span>
                    <div className="grid md:grid-cols-3 gap-16">
                        {[
                            { icon: <Users size={40} />, title: "Collaborative Team", desc: "Our specialists work as an extension of your marketing department." },
                            { icon: <Eye size={40} />, title: "Full Transparency", desc: "No hidden dashboards. Real metrics that you can access 24/7." },
                            { icon: <Award size={40} />, title: "Proven Track Record", desc: "Years of experience delivering 30%+ sales lift for global brands." },
                        ].map((v, i) => (
                            <motion.div
                                key={i}
                                className="space-y-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                            >
                                <div className="text-primary flex justify-center">{v.icon}</div>
                                <h3 className="text-2xl font-black uppercase tracking-tight">{v.title}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
