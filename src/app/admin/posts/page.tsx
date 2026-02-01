"use client";

import { motion } from "framer-motion";
import {
    Plus,
    ExternalLink,
    Edit,
    Trash2,
    Eye,
    FileText,
    Filter
} from "lucide-react";
import Link from "next/link";

export default function PostsPage() {
    const posts = [
        { title: "How to Scale Your Ad Spend Without Losing ROI", date: "May 12, 2024", views: "1,240", status: "Published", category: "Media Buying" },
        { title: "The Shift to Performance-First Media Planning", date: "June 05, 2024", views: "892", status: "Published", category: "Strategy" },
        { title: "Maximizing ROAS in the 2024 Digital Landscape", date: "June 20, 2024", views: "2,105", status: "Published", category: "Optimization" },
    ];

    return (
        <div>
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h1 className="text-4xl font-black text-accent mb-2">Blog Posts</h1>
                    <p className="text-gray-500 font-medium">Manage and create insights for the Thinq blog.</p>
                </div>
                <div className="flex gap-4">
                    <button className="bg-white px-6 py-4 rounded-2xl border border-gray-100 font-bold flex items-center gap-2 hover:bg-gray-50 transition-all shadow-sm">
                        <Filter size={18} /> Filters
                    </button>
                    <Link href="/admin/posts/new" className="btn-primary !py-4 flex items-center gap-2">
                        <Plus size={18} /> New Blog Post
                    </Link>
                </div>
            </div>

            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#f8faff] text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                                <th className="px-8 py-6">Post Details</th>
                                <th className="px-8 py-6">Category</th>
                                <th className="px-8 py-6">Date</th>
                                <th className="px-8 py-6">Views</th>
                                <th className="px-8 py-6">Status</th>
                                <th className="px-8 py-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {posts.map((post, i) => (
                                <tr key={i} className="group hover:bg-[#f8faff]/50 transition-all font-medium">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                                <FileText size={20} />
                                            </div>
                                            <span className="font-black text-accent">{post.title}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                                            {post.category}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-gray-400 text-sm">{post.date}</td>
                                    <td className="px-8 py-6 text-gray-400 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Eye size={14} className="text-primary" /> {post.views}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-xs font-black text-green-600 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full" /> {post.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                                                <Edit size={18} />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/5 rounded-lg transition-all">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
