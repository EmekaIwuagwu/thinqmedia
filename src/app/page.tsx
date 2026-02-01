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

      {/* NEW SECTION: Pain Point & Solution */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-12 md:p-20 rounded-[60px] border border-primary/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-4xl md:text-5xl font-black text-accent mb-6 leading-tight">
                    If Your Ads Are Spending but Not Converting, <span className="text-primary">You’re Not Alone</span>
                  </h2>
                </div>
                <div className="md:w-1/2">
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                    Many businesses invest heavily in ads but struggle with poor ROAS, inconsistent leads, or unclear performance insights. The problem isn’t traffic — it’s strategy, execution, and optimisation.
                  </p>
                  <p className="text-xl text-gray-600 leading-relaxed font-medium">
                    At Thinq Media, we don’t just plan campaigns. We actively manage, test, optimise, and scale media buying to ensure every naira works harder.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us Section - Redesigned to link to About */}
      <section className="section-padding bg-[#f8faff] overflow-hidden">
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

      {/* NEW SECTION: Worked With / Clients */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Proven Experience</span>
            <h2 className="text-5xl md:text-7xl font-black text-accent mb-8">
              Brands We’ve <br />
              <span className="gradient-text">Scaled.</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">
              With over 5+ years of hands-on media buying experience, we have managed performance campaigns across diverse industries including:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              "E-commerce", "Fintech", "Real Estate", "Edu-Tech", "Healthcare",
              "Hospitality", "Automotive", "Retail", "SaaS", "Fashion"
            ].map((industry, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#f8faff] border border-gray-100 flex items-center justify-center text-center hover:shadow-xl hover:bg-white transition-all group">
                <p className="text-lg font-black text-gray-400 group-hover:text-primary transition-colors">{industry}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 rounded-[40px] bg-accent text-white relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-primary/10" />
            <h3 className="text-3xl md:text-4xl font-black mb-4 relative z-10">5+ Years of Performance Marketing</h3>
            <p className="text-xl text-white/70 relative z-10 font-bold">Deep expertise in local and international markets.</p>
          </div>
        </div>
      </section>

      {/* Updated Bottom CTA Section */}
      <section className="section-padding bg-[#f8faff]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-accent">
            Ready to Turn <span className="text-primary">Ad Spend</span> into Revenue?
          </h2>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium">
            Whether you’re struggling with performance or ready to scale, we’ll review your setup and identify clear growth opportunities.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/contact" className="btn-primary !px-12 !py-5 text-xl shadow-2xl shadow-primary/40">
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
