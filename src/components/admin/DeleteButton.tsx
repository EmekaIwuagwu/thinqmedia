"use client";

import { Trash2, Loader2 } from "lucide-react";
import { useState } from "react";
import { deletePost } from "@/app/actions/blog";

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this post?")) return;

        setIsDeleting(true);
        try {
            await deletePost(id);
            router.refresh();
        } catch (err) {
            alert("Failed to delete post.");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/5 rounded-lg transition-all disabled:opacity-50"
        >
            {isDeleting ? <Loader2 className="animate-spin" size={18} /> : <Trash2 size={18} />}
        </button>
    );
}
