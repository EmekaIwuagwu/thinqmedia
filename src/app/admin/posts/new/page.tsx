"use client";

import { motion } from "framer-motion";
import {
    Plus,
    ArrowLeft,
    Save,
    Image as ImageIcon,
    Type,
    Link as LinkIcon,
    Layout
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NewPostPage() {
    const [title, setTitle] = useState("");

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
                    <button className="btn-primary !py-4 flex items-center gap-2">
                        <Save size={18} /> Publish Post
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-8">
                    {/* Main Editor Area */}
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
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">Content</label>
                            <div className="min-h-[400px] border-none focus:ring-0 w-full p-0">
                                <textarea
                                    placeholder="Start writing your strategy..."
                                    className="w-full min-h-[400px] border-none focus:ring-0 text-lg text-gray-600 font-medium leading-relaxed resize-none p-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Publishing Options */}
                    <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 space-y-6">
                        <h3 className="text-xl font-black text-accent flex items-center gap-2">
                            <Layout size={20} className="text-primary" /> Settings
                        </h3>

                        <div className="space-y-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest block">Category</label>
                            <select className="w-full bg-[#f8faff] border border-gray-100 rounded-2xl px-6 py-4 font-bold text-accent focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                                <option>Media Buying</option>
                                <option>Performance Strategy</option>
                                <option>Industry News</option>
                                <option>Case Studies</option>
                            </select>
                        </div>

                        <div className="space-y-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest block">Slug (URL)</label>
                            <div className="relative">
                                <LinkIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={16} />
                                <input
                                    type="text"
                                    placeholder="post-url-slug"
                                    className="w-full bg-[#f8faff] border border-gray-100 rounded-2xl px-14 py-4 font-bold text-accent focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100 space-y-6">
                        <h3 className="text-xl font-black text-accent flex items-center gap-2">
                            <ImageIcon size={20} className="text-primary" /> Cover Image
                        </h3>

                        <div className="aspect-video bg-[#f8faff] border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center text-center p-6 cursor-pointer hover:border-primary/40 transition-all">
                            <Plus size={32} className="text-primary/40 mb-2" />
                            <p className="text-sm font-bold text-gray-400">Click to upload <br /> featured image</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
