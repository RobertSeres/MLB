"use client";

import Image from "next/image";
import { Phone, Star, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <section 
      ref={targetRef} 
      id="hero" 
      className="relative min-h-screen flex items-center pt-24 pb-24 overflow-hidden bg-[#051a05]"
    >
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Modern Workshop Background"
          fill
          priority
          className="object-cover opacity-30 mix-blend-screen scale-110 blur-sm"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#051a05] via-[#051a05]/80 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-[#051a05] via-[#051a05]/20 to-transparent" />
      </div>

      {/* Moving mechanical elements (subtle) */}
      <div className="absolute top-1/4 right-10 w-96 h-96 border-40 border-accent/5 rounded-full animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 border-30 border-accent/5 rounded-full animate-reverse-spin pointer-events-none" />

      <div className="container mx-auto px-4 z-10">
        <motion.div 
          style={{ opacity, scale, y }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Main Content */}
          <div className="lg:col-span-12 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.8 }}
              className="relative mb-10"
            >
              <div className="w-40 h-40 md:w-56 md:h-56 relative group">
                <div className="absolute inset-0 bg-accent blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative w-full h-full border-4 border-accent/30 rounded-3xl p-6 overflow-hidden bg-card/40 backdrop-blur-md shadow-2xl">
                  <Image
                    src="/MLBlogo.webp"
                    alt="MLB Official Logo"
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-background px-4 py-1.5 rounded-xl font-black italic text-xs tracking-widest shadow-lg -rotate-6">
                  PREMIUM SZERVIZ
                </div>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] uppercase italic"
            >
              Budapest <br />
              <span className="text-accent underline decoration-white/10 underline-offset-8">Gépészete</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-3xl text-white/60 mb-12 max-w-4xl font-medium leading-relaxed"
            >
              Márkafüggetlen autószerviz a VIII. kerületben – ahol a <br className="hidden md:block" />
              <span className="text-white font-bold">profizmus</span> és a <span className="text-white font-bold">tisztesség</span> alapfelszereltség.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8"
            >
              <a
                href="tel:+36302935766"
                className="group relative flex items-center gap-4 bg-accent text-background px-10 py-6 rounded-2xl font-black text-2xl hover:scale-105 transition-all shadow-[0_20px_50px_rgba(200,255,0,0.3)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Phone size={28} />
                Hívjon most!
              </a>

              <div className="flex flex-col items-center sm:items-start gap-2 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl backdrop-blur-lg">
                <div className="flex items-center gap-1.5 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" stroke="none" />
                  ))}
                  <span className="text-2xl font-black ml-2 text-white">5.0</span>
                </div>
                <p className="text-sm font-bold text-white/50 uppercase tracking-widest">49 elégedett ügyfél véleménye</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ArrowRight size={32} className="rotate-90" />
      </motion.div>
    </section>
  );
}
