"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText("+36 30 293 5766");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: "Kezdőlap", href: "#hero" },
    { name: "Miért mi?", href: "#miert-mi" },
    { name: "Szolgáltatások", href: "#szolgaltatasok" },
    { name: "Vélemények", href: "#velemenyek" },
    { name: "Kapcsolat", href: "#kapcsolat" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="#hero" className="flex items-center group">
          <div className="relative w-24 h-12 overflow-hidden transition-all duration-300">
            <Image 
              src="/MLBlogo.webp" 
              alt="MLB Logo" 
              fill 
              className="object-contain p-1 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
          <button
            onClick={handleCopyNumber}
            className="flex items-center gap-2 bg-accent text-background px-6 py-2.5 rounded-full font-black text-sm hover:shadow-[0_0_20px_rgba(200,255,0,0.4)] transition-all active:scale-95 min-w-[160px] justify-center"
          >
            <Phone size={16} fill="currentColor" />
            {copied ? "Másolva!" : "+36 30 293 5766"}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-xl bg-white/5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-white/10 md:hidden overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-black uppercase italic border-b border-white/5 pb-2 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={handleCopyNumber}
                className="flex items-center justify-center gap-3 bg-accent text-background px-4 py-4 rounded-2xl font-black text-xl shadow-lg active:scale-95 transition-all"
              >
                <Phone size={24} fill="currentColor" />
                {copied ? "Telefonszám Másolva!" : "Hívás: +36 30 293 5766"}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
