"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

interface MenuItem {
    id: string;
    label: string;
    href: string;
    icon: React.ReactNode;
}

export default function SidebarLink({ item }: { item: MenuItem }) {
    const pathname = usePathname();
    const isActive = pathname === item.href || (item.id === 'posts' && pathname.includes('/admin/posts'));

    return (
        <Link
            href={item.href}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${isActive ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-white/50 hover:bg-white/5 hover:text-white"}`}
        >
            {item.icon}
            {item.label}
            {isActive && <ChevronRight size={16} className="ml-auto" />}
        </Link>
    );
}
