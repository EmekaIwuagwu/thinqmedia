"use client";

import { motion } from "framer-motion";
import { Share2, Search, Target, BarChart3, TrendingUp, Globe, Rocket, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const detailedServices = [
    {
        title: "Social Media Advertising",
        description: "We build powerful brand awareness and drive effective audience engagement across Facebook, Instagram, LinkedIn, and TikTok. Our creative-first approach ensures your message resonates and converts.",
        benefits: ["Targeted Audience Reach", "Engagement Optimization", "Creative Ad Design"],
        icon: <Share2 size={32} />,
        color: "from-blue-500 to-blue-700"
    },
    {
        title: "SEO & SEM Excellence",
        description: "Capture high-intent traffic directly from search engines. Our combined SEO and Google Ads strategies increase visibility by up to 50% through continuous campaign optimization and technical excellence.",
        benefits: ["High Intent Conversion", "Keyword Dominance", "Performance Reporting"],
        icon: <Search size={32} />,
        color: "from-red-500 to-red-700"
    },
    {
        title: "Web Development",
        description: "We create stunning, functional websites tailored to your unique business needs. Our web solutions are built for speed, conversion, and impeccable user experience on all devices.",
        benefits: ["Responsive Design", "Conversion Optimized", "Lightning Fast Load"],
        icon: <Globe size={32} />,
        color: "from-cyan-500 to-cyan-700"
    },
    {
        title: "Media Planning & Buying",
        description: "Maximize your budget efficiency. We strategically place your ads across the most effective channels, leveraging data-driven insights to ensure your brand reaches the right people at the right time.",
        benefits: ["Budget Optimization", "Global Channel Reach", "Strategic Allocation"],
        icon: <Target size={32} />,
        color: "from-purple-500 to-purple-700"
    },
    {
        title: "Digital Strategy Consulting",
        description: "Craft winning strategies to maximize your ROI. Our expert consultants analyze your market and competitors to develop a comprehensive roadmap for sustained digital growth.",
        benefits: ["Market Analysis", "Growth Roadmap", "ROI Framework"],
        icon: <TrendingUp size={32} />,
        color: "from-orange-500 to-orange-700"
    },
    {
        title: "Analytics & Optimization",
        description: "Data-driven decisions only. We use granular tracking and attribution models to prove exactly where your ROI is coming from and continuously tweak campaigns for peak performance.",
        benefits: ["Daily A/B Testing", "Granular Performance Stats", "Transparent Reporting"],
        icon: <BarChart3 size={32} />,
        color: "from-emerald-500 to-emerald-700"
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-white">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-accent text-white rounded-b-[60px] md:rounded-b-[100px]">
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <Image
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
                        alt="Media Services"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-accent via-accent/80 to-transparent" />
                <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 block">Our Expertise</span>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] text-white">
                            Engineered <br />
                            <span className="text-primary italic text-white/90">Precision</span> Media.
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                            We provide comprehensive digital advertising solutions designed to scale your business effectively and predictably.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Detailed Grid */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {detailedServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % 2) * 0.1 }}
                                className="group p-10 md:p-14 rounded-[50px] bg-[#f8faff] border border-gray-100 hover:bg-white hover:shadow-[0_40px_100px_rgba(0,0,0,0.05)] transition-all duration-500 relative overflow-hidden"
                            >
                                {/* Background Number */}
                                <div className="absolute top-8 right-12 text-8xl font-black text-primary/5 select-none transition-all group-hover:text-primary/10">
                                    0{index + 1}
                                </div>

                                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} text-white rounded-3xl flex items-center justify-center mb-10 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-500`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-3xl font-black mb-6 group-hover:text-primary transition-colors text-accent">{service.title}</h3>
                                <p className="text-lg text-gray-500 mb-10 leading-relaxed font-medium">
                                    {service.description}
                                </p>

                                <div className="space-y-4 mb-10">
                                    {service.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-3 text-accent">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                <Zap size={14} fill="currentColor" />
                                            </div>
                                            <span className="font-bold text-accent/80 text-sm uppercase tracking-wide">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:gap-4 transition-all">
                                    Start this Project <Rocket size={18} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results CTA */}
            <section className="pb-32">
                <div className="container mx-auto px-6">
                    <div className="bg-primary rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-20">
                            <Image
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                                alt="Growth Session"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
                        <div className="relative z-10 text-white">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                                Not sure which service <br /> you need?
                            </h2>
                            <p className="text-xl text-white/80 max-w-xl mx-auto mb-12 font-bold">
                                Let's have a quick 15-minute strategy call to audit your current presence and find the best growth path.
                            </p>
                            <Link href="/contact" className="bg-accent text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform inline-block shadow-2xl">
                                Get an Audit Call
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
