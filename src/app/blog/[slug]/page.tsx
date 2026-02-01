"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { useParams } from "next/navigation";

// This would normally come from a database based on the slug
const blogPosts = [
    {
        title: "How to Scale Your Ad Spend Without Losing ROI",
        excerpt: "Scaling campaigns is more than just increasing the budget. Learn the precision tactics we use to maintain performance at scale.",
        content: `
      <p>Scaling a digital advertising campaign is one of the most challenging tasks for any performance marketer. It's not as simple as just increasing your daily budget and watching the revenue grow. In fact, most businesses find that as they scale, their efficiency drops, and their ROAS (Return on Ad Spend) begins to plummet.</p>
      
      <h3>The Myth of Linear Scaling</h3>
      <p>Many advertisers believe that if they spend $1,000 and get a 3x ROAS, spending $10,000 will net them the same return. Unfortunately, the digital advertising ecosystem doesn't work that way. As you increase budget, you move deeper into the audience pool, often reaching less qualified prospects or competing for higher-priced auctions.</p>
      
      <h3>1. Incremental Budget Increases</h3>
      <p>Avoid doubling your budget overnight. We recommend the "20% Rule" — increasing your budget by no more than 20% every 48-72 hours. This gives the platform's algorithm (especially on Meta and Google) time to stabilize and optimize for the new spend level.</p>
      
      <h3>2. Creative Variation is Key</h3>
      <p>When you spend more, your ads are seen more frequently. This leads to "Ad Fatigue" much faster. To combat this, you must have a pipeline of fresh creatives ready to be tested and deployed. A scaling campaign requires at least 3-5 distinct creative angles running simultaneously.</p>
      
      <h3>3. Audience Expansion</h3>
      <p>Don't just spend more on your best-performing audience. Instead, find "Lookalike" audiences or broaden your targeting. Sometimes, "Broad" targeting (no interests) works best at high spend levels because it gives the AI more room to find converters.</p>
    `,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        author: "Strategy Lead",
        date: "May 12, 2024",
        category: "Media Buying",
        slug: "scale-ad-spend-roi"
    }
];

export default function BlogPost() {
    const params = useParams();
    const slug = params?.slug;

    // Find post by slug or use the first one as a fallback for demo
    const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];

    return (
        <main className="bg-white">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-48 pb-20 overflow-hidden">
                <div className="container mx-auto px-6">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 font-black uppercase tracking-widest text-sm mb-12 hover:text-primary transition-colors">
                        <ArrowLeft size={18} /> Back to Blog
                    </Link>

                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 block">{post.category}</span>
                            <h1 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] text-accent">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-8 text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">
                                <span className="flex items-center gap-2"><Calendar size={18} className="text-primary" /> {post.date}</span>
                                <span className="flex items-center gap-2"><User size={18} className="text-primary" /> {post.author}</span>
                                <span className="flex items-center gap-2"><Share2 size={18} className="text-primary" /> Share this strategy</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="mb-24 px-6">
                <div className="container mx-auto">
                    <div className="relative aspect-[21/9] rounded-[60px] overflow-hidden shadow-2xl">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="pb-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div
                            className="prose prose-xl prose-primary font-medium text-gray-600 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-10">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black">TM</div>
                                <div>
                                    <p className="font-black text-accent">{post.author}</p>
                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Thinq Media Strategy</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                    <button key={i} className="w-12 h-12 rounded-2xl bg-[#f8faff] flex items-center justify-center text-gray-400 hover:text-primary hover:shadow-lg transition-all border border-gray-100">
                                        <Icon size={18} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
