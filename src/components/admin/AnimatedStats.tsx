"use client";

import { motion } from "framer-motion";

export default function AnimatedStats({ stats }: { stats: any[] }) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100"
                >
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-[#f8faff] flex items-center justify-center">
                            {stat.icon}
                        </div>
                        <span className={`text-xs font-black px-3 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                            {stat.change}
                        </span>
                    </div>
                    <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-2">{stat.label}</p>
                    <h3 className="text-3xl font-black text-accent">{stat.value}</h3>
                </motion.div>
            ))}
        </div>
    );
}
