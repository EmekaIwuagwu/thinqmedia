"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(formData: FormData) {
    try {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        console.log(`[Auth] Login attempt for: ${email}`);

        const admin = await prisma.admin.findUnique({
            where: { email },
        });

        if (!admin || admin.password !== password) {
            console.log(`[Auth] Failed login for: ${email}`);
            return { error: "Invalid email or security key" };
        }

        console.log(`[Auth] Successful login for: ${email}`);

        // Very simple cookie-based session for demo
        const cookieStore = await cookies();
        cookieStore.set("admin_session", "true", {
            path: "/",
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 // 1 day
        });

        return { success: true };
    } catch (error: any) {
        console.error("[Auth] Login error:", error);
        return { error: "Database connection error. Please ensure remote MySQL is accessible." };
    }
}


export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete("admin_session");
    redirect("/admin/login");
}

export async function checkAuth() {
    const cookieStore = await cookies();
    return cookieStore.has("admin_session");
}
