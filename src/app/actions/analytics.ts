"use server";

import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function trackVisit(page: string) {
    try {
        const headerList = await headers();
        const ip = headerList.get("x-forwarded-for") || "127.0.0.1";
        const userAgent = headerList.get("user-agent") || "unknown";

        const device = userAgent.includes("Mobi") ? "Mobile" : "Desktop";
        const location = "Remote Access"; // Basic placeholder as we don't have geo-ip library here

        await prisma.visitor.create({
            data: {
                ip,
                page,
                device,
                location,
            },
        });
    } catch (error) {
        console.error("Failed to track visit:", error);
    }
}
