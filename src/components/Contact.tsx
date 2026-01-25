"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="section-padding bg-white pt-0">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden bg-accent rounded-[60px] p-12 md:p-24 text-white">
          {/* Background visuals */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/30 to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white">
                Ready to <br />
                <span className="text-primary italic">Exponentially</span> <br />
                Grow?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-lg leading-relaxed font-medium">
                Unlock the full potential of your brand with data-driven advertising that actually moves the needle and boosts your bottom line.
              </p>
              <Link href="/contact" className="bg-white text-accent px-10 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform flex items-center gap-3 w-fit">
                Book Your Strategy Call
                <ArrowRight className="text-primary" />
              </Link>
            </div>

            <motion.div
              className="hidden lg:flex justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-80 h-80 border-4 border-primary/30 rounded-full flex items-center justify-center relative">
                <div className="w-64 h-64 border-2 border-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-primary rounded-full flex items-center justify-center text-4xl font-black shadow-[0_0_60px_rgba(3,169,244,0.4)]">
                    30%
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-0 left-0 w-12 h-12 bg-white/10 backdrop-blur rounded-xl border border-white/20 animate-bounce" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-10 right-0 w-16 h-16 bg-white/10 backdrop-blur rounded-full border border-white/20 animate-bounce" style={{ animationDuration: '5s' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
