import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getPosts } from "@/app/actions/blog";
import BlogListing from "@/components/blog/BlogListing";

export default async function BlogPage() {
    const posts = await getPosts();

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
                    <div>
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 block">Thinq Insights</span>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] text-white">
                            The <span className="text-primary italic text-white/90">Growth</span> Blog.
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Expert insights on media buying, performance marketing, and scaling ambitious brands.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Listing - Client Component for Interactivity */}
            <BlogListing initialPosts={posts.map(p => ({
                ...p,
                date: new Date(p.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
            }))} />

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
                                <button type="button" className="bg-accent text-white px-10 py-4 rounded-full font-black hover:scale-105 transition-transform shadow-xl">
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
