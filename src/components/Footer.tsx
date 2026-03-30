"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, ArrowUp } from "lucide-react";

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#030803] py-fluid-py border-t border-white/5 relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-0 right-10 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-fluid-px relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Brand area */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="#hero" className="flex items-center gap-4 group">
              <div className="relative w-32 h-16 overflow-hidden transition-all duration-300">
                <Image 
                  src="/MLBlogo.webp" 
                  alt="MLB Logo" 
                  fill 
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </Link>
            <p className="text-fluid-xl text-white/40 font-black italic max-w-sm leading-tight">
               Márkafüggetlen szerviz. <br />
               <span className="text-accent underline decoration-white/10 underline-offset-8">Budapest Szívében.</span>
            </p>
            <div className="pt-6 flex gap-4">
               <a 
                 href="https://www.facebook.com/mlbauto/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all hover:-translate-y-2"
               >
                 <FacebookIcon size={28} />
               </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-accent italic">Navigáció</h4>
            <nav className="flex flex-col gap-4 text-2xl font-black italic text-white/50 lowercase">
              <Link href="#miert-mi" className="hover:text-white transition-all hover:translate-x-2 inline-block w-fit">/miért mi?</Link>
              <Link href="#szolgaltatasok" className="hover:text-white transition-all hover:translate-x-2 inline-block w-fit">/szolgáltatások</Link>
              <Link href="#velemenyek" className="hover:text-white transition-all hover:translate-x-2 inline-block w-fit">/vélemények</Link>
              <Link href="#kapcsolat" className="hover:text-white transition-all hover:translate-x-2 inline-block w-fit">/kapcsolat</Link>
            </nav>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-accent underline decoration-white/10 underline-offset-4 decoration-2 italic">Elérhetőség</h4>
            <div className="space-y-6">
              <a href="tel:+36302935766" className="group flex flex-col gap-1 text-3xl font-black italic text-white hover:text-accent transition-colors">
                <span className="text-[10px] uppercase tracking-widest text-white/20 italic group-hover:text-accent transition-colors">Telefonszám</span>
                +36 30 293 5766
              </a>
              <div className="group flex flex-col gap-1 text-3xl font-black italic text-white">
                <span className="text-[10px] uppercase tracking-widest text-white/20 italic">Szerviz Címe</span>
                <span className="text-white/60 leading-tight">1086 Budapest, Lujza utca 16.</span>
              </div>
            </div>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="mt-8 flex items-center justify-center w-16 h-16 bg-accent rounded-full text-background hover:scale-110 active:scale-95 transition-all shadow-xl shadow-accent/20"
            >
              <ArrowUp size={32} strokeWidth={3} />
            </button>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex flex-col md:flex-row items-center gap-4 text-xs font-black uppercase tracking-widest text-white/20">
              <p>© {new Date().getFullYear()} MLB Autószerviz.</p>
              <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
              <p>Összes jog fenntartva.</p>
           </div>
           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/5 italic">
              Budapest VIII. kerület
           </p>
        </div>
      </div>
    </footer>
  );
}
