"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const admin = await prisma.admin.findUnique({
        where: { email },
    });

    if (!admin || admin.password !== password) {
        return { error: "Invalid credentials" };
    }

    // Very simple cookie-based session for demo
    const cookieStore = await cookies();
    cookieStore.set("admin_session", "true", {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 // 1 day
    });

    redirect("/admin/dashboard");
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
