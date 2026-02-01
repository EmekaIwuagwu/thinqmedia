"use client";

import { LogOut, Loader2 } from "lucide-react";
import { useState } from "react";
import { logout } from "@/app/actions/auth";

export default function LogoutButton() {
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = async () => {
        setIsLoggingOut(true);
        await logout();
    };

    return (
        <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-red-400 hover:bg-red-400/10 transition-all disabled:opacity-50"
        >
            {isLoggingOut ? <Loader2 className="animate-spin" size={20} /> : <LogOut size={20} />}
            Logout
        </button>
    );
}
