"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    const excerpt = formData.get("excerpt") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const image = formData.get("image") as string;
    const author = "Admin Strategist"; // Default for now

    const slug = title
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");

    await prisma.post.create({
        data: {
            title,
            slug,
            excerpt,
            content,
            category,
            image,
            author,
            status: "Published",
        },
    });

    revalidatePath("/blog");
    revalidatePath("/admin/posts");
    return { success: true };
}

export async function getPosts() {
    return await prisma.post.findMany({
        orderBy: { createdAt: "desc" },
    });
}

export async function getPostById(id: string) {
    return await prisma.post.findUnique({
        where: { id },
    });
}

export async function getPostBySlug(slug: string) {
    return await prisma.post.findUnique({
        where: { slug },
    });
}

export async function deletePost(id: string) {
    await prisma.post.delete({
        where: { id },
    });
    revalidatePath("/blog");
    revalidatePath("/admin/posts");
}

export async function updatePost(id: string, formData: FormData) {
    const title = formData.get("title") as string;
    const excerpt = formData.get("excerpt") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const image = formData.get("image") as string;

    const slug = title
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");

    await prisma.post.update({
        where: { id },
        data: {
            title,
            slug,
            excerpt,
            content,
            category,
            image,
        },
    });

    revalidatePath("/blog");
    revalidatePath("/admin/posts");
    return { success: true };
}

