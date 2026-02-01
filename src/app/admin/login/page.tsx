"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // This will be replaced with actual authentication
        if (email === "admin@thinqmedia.com" && password === "admin123") {
            router.push("/admin/dashboard");
        } else {
            alert("Invalid credentials. For demo use: admin@thinqmedia.com / admin123");
        }
    };

    return (
        <main className="min-h-screen bg-accent flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
                    alt="Media background"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-xl relative z-10"
            >
                <div className="text-center mb-12">
                    <Link href="/" className="inline-block mb-8">
                        <Image
                            src="/logo.png"
                            alt="ThinqMedia"
                            width={180}
                            height={45}
                            className="h-10 w-auto object-contain brightness-0 invert"
                        />
                    </Link>
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                        <ShieldCheck size={14} />
                        <span>Secure Admin Access</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
                        Welcome Back, <br />
                        <span className="text-primary italic">Strategist.</span>
                    </h1>
                </div>

                <div className="glass p-10 md:p-16 rounded-[40px] border border-white/10 shadow-2xl">
                    <form className="space-y-8" onSubmit={handleLogin}>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-white/50 uppercase tracking-widest ml-4">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={20} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@thinqmedia.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-16 py-5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white font-bold placeholder:text-white/20"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black text-white/50 uppercase tracking-widest ml-4">Security Key</label>
                            <div className="relative">
                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={20} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-16 py-5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white font-bold placeholder:text-white/20"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-5 rounded-3xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/30"
                        >
                            Authorize Login <ArrowRight size={20} />
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <Link href="/" className="text-sm font-black text-white/40 hover:text-white transition-colors uppercase tracking-widest">
                            Return to Website
                        </Link>
                    </div>
                </div>

                <p className="text-center mt-12 text-white/20 text-xs font-black uppercase tracking-[0.3em]">
                    &copy; {new Date().getFullYear()} ThinqMedia Core Systems
                </p>
            </motion.div>
        </main>
    );
}
