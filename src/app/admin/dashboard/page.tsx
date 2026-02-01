import {
    Users,
    FileText,
    Plus,
    ExternalLink,
    Edit,
    TrendingUp,
    Eye,
    MessageSquare
} from "lucide-react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getPosts } from "@/app/actions/blog";
import AnimatedStats from "@/components/admin/AnimatedStats";

export default async function AdminDashboard() {
    const posts = await getPosts();
    const visitorCount = await prisma.visitor.count();

    // Basic calculation for recent growth
    const recentVisitors = await prisma.visitor.count({
        where: {
            startTime: {
                gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24h
            }
        }
    });

    const stats = [
        { label: "Total Visitors", value: visitorCount.toLocaleString(), change: `+${recentVisitors} today`, icon: <Users className="text-blue-500" /> },
        { label: "Blog Posts", value: posts.length.toString(), change: `Total: ${posts.length}`, icon: <FileText className="text-purple-500" /> },
        { label: "Total Views", value: posts.reduce((acc: number, p) => acc + p.views, 0).toLocaleString(), change: "Live", icon: <TrendingUp className="text-green-500" /> },
        { label: "Lead Inquiries", value: "0", change: "+0%", icon: <MessageSquare className="text-orange-500" /> },
    ];

    const recentPosts = posts.slice(0, 5);

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
            <AnimatedStats stats={stats} />

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
                                {recentPosts.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="px-8 py-10 text-center text-gray-400 font-bold">No posts yet.</td>
                                    </tr>
                                ) : (
                                    recentPosts.map((post) => (
                                        <tr key={post.id} className="group hover:bg-[#f8faff]/50 transition-all font-medium">
                                            <td className="px-8 py-6 font-black text-accent">{post.title}</td>
                                            <td className="px-8 py-6 text-gray-400 text-sm">
                                                {new Date(post.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="px-8 py-6 text-gray-400 text-sm flex items-center gap-2">
                                                <Eye size={14} className="text-primary" /> {post.views}
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Link href={`/admin/posts/edit/${post.id}`} className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                                                        <Edit size={18} />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions / Activity */}
                <div className="space-y-10">
                    <div className="bg-accent rounded-[40px] p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                        <h3 className="text-xl font-black mb-6 relative z-10">System Status</h3>
                        <p className="text-white/70 font-bold mb-6 relative z-10 leading-relaxed">
                            ThinqMedia Core is connected to PostgreSQL. All systems operational. {visitorCount} total interactions captured.
                        </p>
                        <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest relative z-10">
                            Live
                        </div>
                    </div>

                    <div className="bg-white rounded-[40px] p-8 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-black text-accent mb-6">Traffic Summary</h3>
                        <div className="space-y-6">
                            {[
                                { label: "Direct Access", value: Math.min(100, visitorCount > 0 ? 100 : 0), color: "bg-primary" },
                                { label: "Search / Organic", value: 0, color: "bg-blue-500" },
                                { label: "Referred", value: 0, color: "bg-purple-500" },
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
