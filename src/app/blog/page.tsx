"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "How to Scale Your Ad Spend Without Losing ROI",
        excerpt: "Scaling campaigns is more than just increasing the budget. Learn the precision tactics we use to maintain performance at scale.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        author: "Strategy Lead",
        date: "May 12, 2024",
        category: "Media Buying",
        slug: "scale-ad-spend-roi"
    },
    {
        id: 2,
        title: "The Shift to Performance-First Media Planning",
        excerpt: "Traditional media planning is dying. Discover why businesses are moving towards data-driven execution over static strategies.",
        image: "https://images.unsplash.com/photo-1551288049-bb848a4f691f?q=80&w=2670&auto=format&fit=crop",
        author: "Media Planner",
        date: "June 05, 2024",
        category: "Strategy",
        slug: "performance-first-media-planning"
    },
    {
        id: 3,
        title: "Maximizing ROAS in the 2024 Digital Landscape",
        excerpt: "With rising CPMs across platforms, here are the levers you can pull to ensure your return on ad spend remains healthy.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
        author: "Analyst",
        date: "June 20, 2024",
        category: "Optimization",
        slug: "maximizing-roas-2024"
    }
];

export default function BlogPage() {
    return (
        <main className="bg-white">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-accent text-white rounded-b-[60px] md:rounded-b-[100px]">
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <Image
                        src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2670&auto=format&fit=crop"
                        alt="Blog"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-accent via-accent/80 to-transparent" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 block">Thinq Insights</span>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] text-white">
                            The <span className="text-primary italic text-white/90">Growth</span> Blog.
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Expert insights on media buying, performance marketing, and scaling ambitious brands.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Listing */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                        <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto">
                            {["All Posts", "Media Buying", "Strategy", "Optimization"].map((cat) => (
                                <button
                                    key={cat}
                                    className={`px-8 py-3 rounded-full font-bold text-sm whitespace-nowrap transition-all ${cat === "All Posts" ? "bg-primary text-white shadow-lg" : "bg-[#f8faff] text-gray-500 hover:bg-primary/10 hover:text-primary"}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-80">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full bg-[#f8faff] border border-gray-100 rounded-full px-8 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                            />
                            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-8 shadow-xl">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-6 left-6">
                                            <span className="bg-white/90 backdrop-blur-md text-accent px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 mb-4 text-sm font-bold text-gray-400 uppercase tracking-widest">
                                        <span className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {post.date}</span>
                                        <span className="flex items-center gap-2"><User size={14} className="text-primary" /> {post.author}</span>
                                    </div>

                                    <h3 className="text-2xl font-black text-accent mb-4 group-hover:text-primary transition-colors leading-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-500 mb-8 leading-relaxed font-medium">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:gap-4 transition-all">
                                        Read Article <ArrowRight size={18} />
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="pb-32">
                <div className="container mx-auto px-6">
                    <div className="bg-primary rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-black mb-6">Join the Inner Circle</h2>
                            <p className="text-xl text-white/80 mb-10 font-bold">
                                Get monthly performance insights and media strategies delivered straight to your inbox.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-4 focus:outline-none focus:bg-white/20 transition-all text-white placeholder:text-white/60 font-bold"
                                />
                                <button className="bg-accent text-white px-10 py-4 rounded-full font-black hover:scale-105 transition-transform shadow-xl">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
