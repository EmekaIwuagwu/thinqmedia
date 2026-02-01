"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f8faff] pt-32 pb-12 border-t border-gray-100 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-10 group">
              <Image
                src="/logo.png"
                alt="ThinqMedia"
                width={140}
                height={35}
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
              Strategically engineering growth for the world's most ambitious brands through precision media strategy and data-driven execution.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/share/1BXSdQfxck/?mibextid=wwXIfr" },
                { Icon: Twitter, href: "https://x.com/thinq_ads" },
                { Icon: Instagram, href: "https://www.instagram.com/thinq_ads/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/thinq-media/" }
              ].map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-gray-400 hover:text-primary hover:shadow-[0_10px_30px_rgba(3,169,244,0.15)] transition-all border border-gray-100 hover:border-primary/20"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black uppercase tracking-widest text-accent mb-10">Navigation</h4>
            <ul className="space-y-5">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 hover:text-primary font-bold transition-all flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:w-4 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black uppercase tracking-widest text-accent mb-10">Services</h4>
            <ul className="space-y-5">
              {[
                "Paid Social Ads",
                "Google Ads (SEM)",
                "Media Planning & Buying",
                "SEO Excellence",
                "Web Development"
              ].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-gray-500 hover:text-primary font-bold transition-all flex items-center gap-3 group">
                    <ExternalLink size={14} className="text-primary/40 group-hover:text-primary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black uppercase tracking-widest text-accent mb-10">Connect</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Send an Email</p>
                  <p className="font-black text-accent">info@thinqmedia.com.ng</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Call Anywhere</p>
                  <p className="font-black text-accent">(+234) 816 608 4855</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Our Studio</p>
                  <p className="font-black text-accent leading-tight">Plot 12 Oba Kabiru St, Isolo, Lagos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 font-bold text-sm">
            &copy; {new Date().getFullYear()} ThinqMedia Strategy. Engineered for Growth.
          </p>
          <div className="flex gap-10">
            <Link href="#" className="text-[10px] font-black text-gray-400 hover:text-primary uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-black text-gray-400 hover:text-primary uppercase tracking-widest transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
