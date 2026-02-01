"use client";

import { motion } from "framer-motion";
import {
    Plus,
    ArrowLeft,
    Save,
    Image as ImageIcon,
    Link as LinkIcon,
    Layout,
    Loader2
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { createPost } from "@/app/actions/blog";

export default function NewPostPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [category, setCategory] = useState("Media Buying");
    const [image, setImage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (!title || !content) {
            alert("Please fill in the title and content.");
            return;
        }

        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("excerpt", excerpt || content.substring(0, 150) + "...");
        formData.append("category", category);
        formData.append("image", image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop");

        try {
            await createPost(formData);
        } catch (err) {
            console.error(err);
            alert("Failed to create post. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-end mb-10">
                <div>
                    <Link href="/admin/posts" className="inline-flex items-center gap-2 text-gray-400 font-bold text-sm mb-4 hover:text-accent transition-all">
                        <ArrowLeft size={16} /> Back to Posts
                    </Link>
                    <h1 className="text-4xl font-black text-accent mb-2">Create New Post</h1>
                    <p className="text-gray-500 font-medium">Compose a new performance insight for your audience.</p>
                </div>
                <div className="flex gap-4">
                    <button className="bg-white px-8 py-4 rounded-2xl border border-gray-100 font-bold text-accent hover:bg-gray-50 transition-all shadow-sm">
                        Save Draft
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="btn-primary !py-4 flex items-center gap-2 disabled:opacity-50"
                    >
                        {isSubmitting ? (
                            <Loader2 className="animate-spin" size={18} />
                        ) : (
                            <Save size={18} />
                        )}
                        Publish Post
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 space-y-8">
                        <div className="space-y-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">Post Title</label>
                            <input
                                type="text"
                                placeholder="Enter a compelling title..."
                                className="w-full text-3xl font-black text-accent border-none focus:ring-0 placeholder:text-gray-100 p-0"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="h-px bg-gray-100 w-full" />

                        <div className="space-y-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">Excerpt (Short Summary)</label>
                            <textarea
                                placeholder="A brief summary for the blog listing..."
                                className="w-full text-lg text-gray-500 font-medium border-none focus:ring-0 p-0 resize-none h-20"
                                value={excerpt}
                                onChange={(e) => setExcerpt(e.target.value)}
                            />
                        </div>

                        <div className="h-px bg-gray-100 w-full" />

                        <div className="space-y-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">Content</label>
                            <div className="min-h-[400px] border-none focus:ring-0 w-full p-0">
                                <textarea
                                    placeholder="Start writing your strategy..."
                                    className="w-full min-h-[400px] border-none focus:ring-0 text-lg text-gray-600 font-medium leading-relaxed resize-none p-0"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 space-y-6">
                        <h3 className="text-xl font-black text-accent flex items-center gap-2">
                            <Layout size={20} className="text-primary" /> Settings
                        </h3>

                        <div className="space-y-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest block">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full bg-[#f8faff] border border-gray-100 rounded-2xl px-6 py-4 font-bold text-accent focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            >
                                <option>Media Buying</option>
                                <option>Performance Strategy</option>
                                <option>Industry News</option>
                                <option>Case Studies</option>
                            </select>
                        </div>

                        <div className="space-y-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest block">Featured Image URL</label>
                            <div className="relative">
                                <ImageIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={16} />
                                <input
                                    type="text"
                                    placeholder="https://..."
                                    className="w-full bg-[#f8faff] border border-gray-100 rounded-2xl px-14 py-4 font-bold text-accent focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
