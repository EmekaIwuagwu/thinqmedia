"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-48 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary-dark px-4 py-2 rounded-full text-sm font-bold mb-8">
              <Sparkles size={16} />
              <span>Transforming Media Presence</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[1.1] mb-8 text-accent">
              Expert Media <br />
              <span className="gradient-text">Solutions.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              Propel your brand to new heights with our expert solutions. We've helped businesses increase sales by up to <span className="text-primary font-bold">30%</span> through strategic ad management.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="btn-primary !text-lg flex items-center justify-center gap-2 group">
                Scale Your Business
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="px-8 py-4 rounded-full border-2 border-primary/20 font-bold hover:border-primary/50 transition-all flex items-center justify-center">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative lg:block h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-[60px] overflow-hidden border-8 border-white shadow-2xl z-0">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop"
                alt="Digital Strategy"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>

            <div className="relative z-20 glass p-10 rounded-[40px] border border-white/50 animate-float shadow-2xl mt-20 ml-10 max-w-[320px]">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Total ROI</p>
                  <h3 className="text-5xl font-black text-primary">+30%</h3>
                </div>
                <div className="h-24 w-40 flex items-end gap-2">
                  {[40, 60, 45, 90, 75, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-primary to-primary-light rounded-t-md" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center font-bold">GA</div>
                  <div>
                    <p className="text-sm font-bold">Google Ads Performance</p>
                    <p className="text-xs text-gray-500">Optimizing reach...</p>
                  </div>
                  <div className="ml-auto text-green-600 font-bold">+12%</div>
                </div>
                <div className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">FB</div>
                  <div>
                    <p className="text-sm font-bold">Social Media Growth</p>
                    <p className="text-xs text-gray-500">Active campaigns</p>
                  </div>
                  <div className="ml-auto text-blue-600 font-bold">+18%</div>
                </div>
              </div>
            </div>

            {/* Background decorative circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary-dark/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
