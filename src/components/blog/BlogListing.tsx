"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { useState } from "react";

export default function BlogListing({ initialPosts }: { initialPosts: any[] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All Posts");

    const filteredPosts = initialPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === "All Posts" || post.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto">
                        {["All Posts", "Media Buying", "Performance Strategy", "Industry News", "Case Studies"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-3 rounded-full font-bold text-sm whitespace-nowrap transition-all ${activeCategory === cat ? "bg-primary text-white shadow-lg" : "bg-[#f8faff] text-gray-500 hover:bg-primary/10 hover:text-primary"}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#f8faff] border border-gray-100 rounded-full px-8 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                        />
                        <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>

                {filteredPosts.length === 0 ? (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-black text-accent mb-4">No insights found.</h3>
                        <p className="text-gray-500 font-medium">Try adjusting your search or category filter.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {filteredPosts.map((post, index) => (
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
                                            src={post.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"}
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

                                    <p className="text-gray-500 mb-8 leading-relaxed font-medium line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:gap-4 transition-all">
                                        Read Article <ArrowRight size={18} />
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
