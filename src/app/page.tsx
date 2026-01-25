"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Stats />

      {/* Why Us Section - Redesigned to link to About */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl bg-primary/5 aspect-square lg:aspect-auto lg:h-[600px] border-8 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                  alt="Digital Marketing Growth"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col items-center justify-end p-12 text-center text-white">
                  <h3 className="text-8xl font-black mb-4">30%</h3>
                  <p className="text-2xl font-bold opacity-90 max-w-xs">Average Sales Lift for Our Managed Clients</p>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary-dark/10 rounded-full blur-3xl" />
            </motion.div>

            <div>
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-6 block">The Strategic Advantage</span>
              <h2 className="text-5xl md:text-7xl font-black text-accent mb-8 leading-[1.1]">
                Why Brands <br />
                <span className="gradient-text">Trust Us.</span>
              </h2>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">
                We remove the guesswork from digital advertising. Our methodology combines high-level strategy with granular data analysis to deliver results that impact your bottom line.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                {[
                  { title: "Precision Targeting", desc: "No wasted spend on non-converters." },
                  { title: "Aggressive Optimization", desc: "Daily tweaks for peak performance." },
                  { title: "Transparent ROI", desc: "Real-time dashboards you can trust." },
                  { title: "Growth Mindset", desc: "We scale as your business scales." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-primary shrink-0" size={24} />
                    <div>
                      <h4 className="font-black text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-primary">
                Explore Our Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Dynamic Results Summary Section */}
      <section className="section-padding bg-[#f8faff]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12">
            Ready to See <span className="text-primary">30%</span> Growth?
          </h2>
          <div className="flex justify-center gap-6">
            <Link href="/contact" className="btn-primary !px-12 !py-5 text-xl">
              Get a Free Strategy Audit
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
