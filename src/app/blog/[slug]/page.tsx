import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Share2, Facebook, X, Linkedin } from "lucide-react";
import { getPostBySlug } from "@/app/actions/blog";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    // Increment views (skip during build)
    if (!process.env.NEXT_BUILD) {
        await prisma.post.update({
            where: { slug },
            data: { views: { increment: 1 } }
        }).catch(() => { }); // Ignore error if update fails
    }

    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

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
                        <div>
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 block">{post.category}</span>
                            <h1 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] text-accent">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-8 text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">
                                <span className="flex items-center gap-2"><Calendar size={18} className="text-primary" /> {formattedDate}</span>
                                <span className="flex items-center gap-2"><User size={18} className="text-primary" /> {post.author}</span>
                                <span className="flex items-center gap-2"><Share2 size={18} className="text-primary" /> Share this strategy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="mb-24 px-6">
                <div className="container mx-auto">
                    <div className="relative aspect-[21/9] rounded-[60px] overflow-hidden shadow-2xl">
                        <Image
                            src={post.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"}
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
                            className="prose prose-xl prose-primary font-medium text-gray-600 leading-relaxed whitespace-pre-wrap"
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
                                {[Facebook, X, Linkedin].map((Icon, i) => (
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
