"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "30%", label: "Sales Growth" },
  { value: "150+", label: "Brands Scaled" },
  { value: "15M+", label: "Ad Reach" },
  { value: "95%", label: "Client Retention" },
];

export default function Stats() {
  return (
    <section className="relative z-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="glass grid grid-cols-2 md:grid-cols-4 gap-8 p-10 md:p-16 rounded-[40px] border border-white/40 shadow-xl overflow-hidden relative">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-6xl font-black text-primary mb-3">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
