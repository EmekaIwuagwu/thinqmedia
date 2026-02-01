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
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SidebarLink from "@/components/admin/SidebarLink";
import LogoutButton from "@/components/admin/LogoutButton";
import { prisma } from "@/lib/prisma";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");

    // If no session, they are on the login page (enforced by middleware)
    // So we hide the sidebar and header.
    if (!session) {
        return <main className="bg-accent min-h-screen">{children}</main>;
    }

    // Fetch real admin data
    const admin = await prisma.admin.findFirst();
    const adminName = admin?.name || "Strategist";
    const adminInitials = adminName.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);

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
                        <SidebarLink key={item.id} item={item} />
                    ))}
                </nav>

                <div className="pt-8 border-t border-white/10">
                    <LogoutButton />
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
                                <p className="text-sm font-black text-accent">{adminName}</p>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Administrator</p>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-lg">{adminInitials}</div>
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
