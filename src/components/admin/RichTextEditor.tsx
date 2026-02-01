"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import {
    Bold,
    Italic,
    List,
    ListOrdered,
    Quote,
    Heading1,
    Heading2,
    Link as LinkIcon,
    Image as ImageIcon,
    Undo,
    Redo,
    Code
} from "lucide-react";

const MenuBar = ({ editor }: { editor: any }) => {
    if (!editor) {
        return null;
    }

    const addLink = () => {
        const url = window.prompt("URL");
        if (url) {
            editor.chain().focus().setLink({ href: url }).run();
        }
    };

    const addImage = () => {
        const url = window.prompt("Image URL");
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };

    return (
        <div className="flex flex-wrap gap-2 p-4 border-b border-gray-100 bg-[#f8faff] sticky top-0 z-10">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`p-2 rounded-lg transition-all ${editor.isActive("bold") ? "bg-primary text-white" : "text-gray-400 hover:bg-primary/5 hover:text-primary"}`}
                title="Bold"
            >
                <Bold size={18} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`p-2 rounded-lg transition-all ${editor.isActive("italic") ? "bg-primary text-white" : "text-gray-400 hover:bg-primary/5 hover:text-primary"}`}
                title="Italic"
            >
                <Italic size={18} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                className={`p-2 rounded-lg transition-all ${editor.isActive("code") ? "bg-primary text-white" : "text-gray-400 hover:bg-primary/5 hover:text-primary"}`}
                title="Code"
            >
                <Code size={18} />
            </button>

            <div className="w-px h-6 bg-gray-200 my-auto mx-1" />

            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`p-2 rounded-lg transition-all ${editor.isActive("heading", { level: 1 }) ? "bg-primary text-white" : "text-gray-400 hover:bg-primary/5 hover:text-primary"}`}
                title="Heading 1"
            >
                <Heading1 size={18} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`p-2 rounded-lg transition-all ${editor.isActive("heading", { level: 2 }) ? "bg-primary text-white" : "text-gray-400 hover:bg-primary/5 hover:text-primary"}`}
                title="Heading 2"
            >
                <Heading2 size={18} />
            </button>

            <div className="w-px h-6 bg-gray-200 my-auto mx-1" />

            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-2 rounded-lg transition-all ${editor.isActive("bulletList") ? "bg-primary text-white" : "text-gray-400 hover:bg-primary/5 hover:text-primary"}`}
                title="Bullet List"
            >
                <List size={18} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-2 rounded-lg transition-all ${editor.isActive("orderedList") ? "bg-primary text-white" : "text-gray-400 hover:bg-primary/5 hover:text-primary"}`}
                title="Ordered List"
            >
                <ListOrdered size={18} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`p-2 rounded-lg transition-all ${editor.isActive("blockquote") ? "bg-primary text-white" : "text-gray-400 hover:bg-primary/5 hover:text-primary"}`}
                title="Quote"
            >
                <Quote size={18} />
            </button>

            <div className="w-px h-6 bg-gray-200 my-auto mx-1" />

            <button
                onClick={addLink}
                className={`p-2 rounded-lg transition-all ${editor.isActive("link") ? "bg-primary text-white" : "text-gray-400 hover:bg-primary/5 hover:text-primary"}`}
                title="Add Link"
            >
                <LinkIcon size={18} />
            </button>
            <button
                onClick={addImage}
                className="p-2 rounded-lg transition-all text-gray-400 hover:bg-primary/5 hover:text-primary"
                title="Add Image"
            >
                <ImageIcon size={18} />
            </button>

            <div className="flex-1" />

            <button
                onClick={() => editor.chain().focus().undo().run()}
                className="p-2 rounded-lg transition-all text-gray-400 hover:bg-primary/5 hover:text-primary"
                title="Undo"
            >
                <Undo size={18} />
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                className="p-2 rounded-lg transition-all text-gray-400 hover:bg-primary/5 hover:text-primary"
                title="Redo"
            >
                <Redo size={18} />
            </button>
        </div>
    );
};

export default function RichTextEditor({ content, onChange }: { content: string, onChange: (content: string) => void }) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
            }),
            Image,
        ],
        content: content,
        editorProps: {
            attributes: {
                class: "prose prose-xl max-w-none focus:outline-none min-h-[400px] p-8",
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    return (
        <div className="w-full bg-white rounded-3xl border border-gray-100 overflow-hidden focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
}
