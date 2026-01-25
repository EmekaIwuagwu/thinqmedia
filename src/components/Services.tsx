"use client";

import { motion } from "framer-motion";
import { Share2, MousePointer2, Target, BarChart3, TrendingUp, Search } from "lucide-react";

const services = [
  {
    title: "Paid Social Ads",
    description: "Dominating feeds on Meta, LinkedIn, and TikTok with conversion-first creative strategies.",
    icon: <Share2 className="w-8 h-8" />,
    color: "bg-blue-500",
  },
  {
    title: "Google Ads (SEM)",
    description: "Capture intent at the perfect moment. We manage search, display, and shopping campaigns.",
    icon: <Search className="w-8 h-8" />,
    color: "bg-red-500",
  },
  {
    title: "Media Planning",
    description: "Advanced channel allocation to ensure your budget is spent where it actually converts.",
    icon: <Target className="w-8 h-8" />,
    color: "bg-cyan-500",
  },
  {
    title: "Performance Data",
    description: "Granular tracking and attribution models to prove exactly where your ROI is coming from.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "bg-purple-500",
  },
  {
    title: "Creative Strategy",
    description: "Content that stops the scroll and starts the sale, tailored to each platform's psyche.",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "bg-orange-500",
  },
  {
    title: "Global Reach",
    description: "Local expertise with global execution capabilities to scale your brand across borders.",
    icon: <MousePointer2 className="w-8 h-8" />,
    color: "bg-green-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4 block">Core Expertise</span>
            <h2 className="text-5xl md:text-7xl font-black text-accent mb-0">
              Future-Proof <br />
              <span className="gradient-text">Media Services.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-sm mb-2">
            We don't follow trends. We set the standard for high-performance digital advertising.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group p-10 rounded-[32px] bg-[#f8faff] border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
