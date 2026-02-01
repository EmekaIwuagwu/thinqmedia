"use client";

import { motion } from "framer-motion";
import {
    Users,
    FileText,
    Plus,
    ExternalLink,
    Edit,
    Trash2,
    TrendingUp,
    Eye,
    MessageSquare
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
    const stats = [
        { label: "Total Visitors", value: "24,582", change: "+12.5%", icon: <Users className="text-blue-500" /> },
        { label: "Blog Posts", value: "14", change: "+2 this month", icon: <FileText className="text-purple-500" /> },
        { label: "Avg. Engagement", value: "4:20m", change: "+0:45s", icon: <TrendingUp className="text-green-500" /> },
        { label: "Lead Inquiries", value: "128", change: "+18%", icon: <MessageSquare className="text-orange-500" /> },
    ];

    const recentPosts = [
        { title: "How to Scale Your Ad Spend Without Losing ROI", date: "May 12, 2024", views: "1,240", status: "Published" },
        { title: "The Shift to Performance-First Media Planning", date: "June 05, 2024", views: "892", status: "Published" },
        { title: "Maximizing ROAS in the 2024 Digital Landscape", date: "June 20, 2024", views: "2,105", status: "Published" },
    ];

    return (
        <div>
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h1 className="text-4xl font-black text-accent mb-2">Command Center</h1>
                    <p className="text-gray-500 font-medium">Welcome back. Here's what's happening today.</p>
                </div>
                <Link href="/admin/posts/new" className="btn-primary !py-4 flex items-center gap-2">
                    <Plus size={18} /> New Blog Post
                </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-[#f8faff] flex items-center justify-center">
                                {stat.icon}
                            </div>
                            <span className={`text-xs font-black px-3 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-2">{stat.label}</p>
                        <h3 className="text-3xl font-black text-accent">{stat.value}</h3>
                    </motion.div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* Recent Posts Table */}
                <div className="lg:col-span-2 bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-8 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="text-xl font-black text-accent">Recent Blog Posts</h3>
                        <Link href="/blog" target="_blank" className="text-primary text-sm font-black flex items-center gap-1">
                            View Site <ExternalLink size={14} />
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#f8faff] text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                                    <th className="px-8 py-6">Title</th>
                                    <th className="px-8 py-6">Date</th>
                                    <th className="px-8 py-6">Views</th>
                                    <th className="px-8 py-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {recentPosts.map((post, i) => (
                                    <tr key={i} className="group hover:bg-[#f8faff]/50 transition-all font-medium">
                                        <td className="px-8 py-6 font-black text-accent">{post.title}</td>
                                        <td className="px-8 py-6 text-gray-400 text-sm">{post.date}</td>
                                        <td className="px-8 py-6 text-gray-400 text-sm flex items-center gap-2">
                                            <Eye size={14} className="text-primary" /> {post.views}
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

                {/* Quick Actions / Activity */}
                <div className="space-y-10">
                    <div className="bg-accent rounded-[40px] p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                        <h3 className="text-xl font-black mb-6 relative z-10">Quick Tip</h3>
                        <p className="text-white/70 font-bold mb-6 relative z-10 leading-relaxed">
                            Your most active visitor time is between 2:00 PM and 4:00 PM. Consider publishing your next post then for 20% more engagement.
                        </p>
                        <Link href="#" className="inline-block bg-white text-accent px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform relative z-10">
                            Read More
                        </Link>
                    </div>

                    <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-black text-accent mb-6">Traffic Sources</h3>
                        <div className="space-y-6">
                            {[
                                { label: "Google Search", value: 45, color: "bg-primary" },
                                { label: "Meta Ads", value: 30, color: "bg-blue-500" },
                                { label: "Direct", value: 15, color: "bg-purple-500" },
                                { label: "Others", value: 10, color: "bg-gray-200" },
                            ].map((source, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-xs font-black uppercase tracking-widest mb-2">
                                        <span className="text-gray-400">{source.label}</span>
                                        <span className="text-accent">{source.value}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-[#f8faff] rounded-full overflow-hidden">
                                        <div className={`h-full ${source.color}`} style={{ width: `${source.value}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
