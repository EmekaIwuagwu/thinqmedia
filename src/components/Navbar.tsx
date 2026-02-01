"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || pathname !== "/" ? "glass border-b border-primary/10 py-3 shadow-sm" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="relative flex items-center group transition-transform hover:scale-105">
          <Image
            src="/logo.png"
            alt="ThinqMedia Logo"
            width={140}
            height={35}
            className="w-auto h-8 object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-black uppercase tracking-widest transition-all duration-300 hover:text-primary relative group ${pathname === link.href ? "text-primary" : "text-accent"}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${pathname === link.href ? "w-full" : ""}`} />
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !py-2.5 !px-8 text-sm !font-black uppercase tracking-tighter">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-accent p-2 hover:bg-primary/5 rounded-xl transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full p-8 flex flex-col gap-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-500 border-t border-primary/5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-2xl font-black uppercase tracking-wider ${pathname === link.href ? "text-primary px-4 border-l-4 border-primary" : "text-accent hover:text-primary transition-all"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary w-full py-4 text-center text-lg" onClick={() => setMobileMenuOpen(false)}>
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
