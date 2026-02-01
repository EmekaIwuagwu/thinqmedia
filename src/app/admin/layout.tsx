"use client";

import {
    BarChart3,
    Users,
    FileText,
    Settings,
    LogOut,
    Search,
    Bell,
    ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // Don't show sidebar on login page
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    const menuItems = [
        { id: "dashboard", label: "Dashboard", href: "/admin/dashboard", icon: <BarChart3 size={20} /> },
        { id: "posts", label: "Blog Posts", href: "/admin/posts", icon: <FileText size={20} /> },
        { id: "visitors", label: "Visitors", href: "/admin/visitors", icon: <Users size={20} /> },
        { id: "settings", label: "Settings", href: "/admin/settings", icon: <Settings size={20} /> },
    ];

    return (
        <div className="min-h-screen bg-[#f0f2f5] flex">
            {/* Sidebar */}
            <aside className="w-80 bg-accent text-white p-8 flex flex-col hidden lg:flex sticky top-0 h-screen">
                <div className="mb-16">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="ThinqMedia"
                            width={140}
                            height={35}
                            className="h-8 w-auto object-contain brightness-0 invert mb-2"
                        />
                    </Link>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] ml-1">Admin Control</p>
                </div>

                <nav className="flex-1 space-y-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${pathname === item.href || (item.id === 'posts' && pathname.includes('/admin/posts')) ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-white/50 hover:bg-white/5 hover:text-white"}`}
                        >
                            {item.icon}
                            {item.label}
                            {pathname === item.href && <ChevronRight size={16} className="ml-auto" />}
                        </Link>
                    ))}
                </nav>

                <div className="pt-8 border-t border-white/10">
                    <Link href="/admin/login" className="flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-red-400 hover:bg-red-400/10 transition-all">
                        <LogOut size={20} />
                        Logout
                    </Link>
                </div>
            </aside>

            {/* Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Header */}
                <header className="bg-white px-10 py-6 flex justify-between items-center sticky top-0 z-30 shadow-sm">
                    <div className="relative w-96">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search data..."
                            className="w-full bg-[#f8faff] border border-gray-100 rounded-2xl px-14 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-sm"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative w-12 h-12 rounded-2xl bg-[#f8faff] flex items-center justify-center text-gray-400 hover:text-primary transition-all">
                            <Bell size={20} />
                            <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                        </button>
                        <div className="flex items-center gap-4 pl-6 border-l border-gray-100">
                            <div className="text-right">
                                <p className="text-sm font-black text-accent">Admin Strategist</p>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Super User</p>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-lg">AS</div>
                        </div>
                    </div>
                </header>

                <main className="p-10">
                    {children}
                </main>
            </div>
        </div>
    );
}
