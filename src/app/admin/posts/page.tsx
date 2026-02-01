import {
    Plus,
    Edit,
    Trash2,
    Eye,
    FileText,
    Filter
} from "lucide-react";
import Link from "next/link";
import { getPosts, deletePost } from "@/app/actions/blog";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function PostsPage() {
    const posts = await getPosts();

    return (
        <div>
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h1 className="text-4xl font-black text-accent mb-2">Blog Posts</h1>
                    <p className="text-gray-500 font-medium">Manage and create insights for the Thinq blog ({posts.length} posts).</p>
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
                            {posts.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-8 py-20 text-center text-gray-400 font-bold">
                                        No posts found. Start by creating one.
                                    </td>
                                </tr>
                            ) : (
                                posts.map((post) => (
                                    <tr key={post.id} className="group hover:bg-[#f8faff]/50 transition-all font-medium">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary overflow-hidden">
                                                    {post.image ? (
                                                        <img src={post.image} alt="" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <FileText size={20} />
                                                    )}
                                                </div>
                                                <span className="font-black text-accent">{post.title}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                                                {post.category}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-gray-400 text-sm">{new Date(post.createdAt).toLocaleDateString()}</td>
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
                                                <DeleteButton id={post.id} />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
