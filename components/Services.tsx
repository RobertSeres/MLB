"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Droplet, CircleDot, Disc, Settings, Search, LayoutGrid, PhoneCall, AlertTriangle, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Olajcsere",
    description: "Gyors és profi olajcsere szűrőkkel, a gyári előírásoknak megfelelő anyagokkal.",
    icon: Droplet,
  },
  {
    title: "Fékrendszer",
    description: "Fékrendszer ellenőrzés és betét/tárcsa csere a biztonságos megállásért.",
    icon: CircleDot,
  },
  {
    title: "Gumiszerviz",
    description: "Szezonális gumicsere, centírozás és állapotfelmérés minden kerékre.",
    icon: Disc,
  },
  {
    title: "Karbantartás",
    description: "Éves szerviz, átvizsgálás és minden, ami az autó hosszú élettartamához kell.",
    icon: Settings,
  },
  {
    title: "Diagnosztika",
    description: "Modern műszeres vizsgát és alapos fizikai hibaátvilágítás.",
    icon: Search,
  },
  {
    title: "Futómű javítás",
    description: "Lengéscsillapító, kuplung és egyéb mechanikus szerkezeti javítások.",
    icon: LayoutGrid,
  },
];

export default function Services() {
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText("+36 30 293 5766");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="szolgaltatasok" className="py-fluid-py relative overflow-hidden bg-[#050a05]">
      {/* Subtle Background decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 blur-[200px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="container mx-auto px-fluid-px relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 md:mb-24 gap-10 md:gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-4 md:mb-6 italic">Szolgáltatásaink</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-6 md:mb-8 leading-[0.9] uppercase italic tracking-tighter">
               Garázs <br />
               <span className="text-accent underline decoration-white/5 underline-offset-4 md:underline-offset-8">Dinamika.</span>
            </h3>
            <p className="text-lg md:text-2xl text-white/40 font-medium leading-relaxed px-4 md:px-0">
              Márkafüggetlen szakértelem Budapest szívében. <br className="hidden md:block" />
              Minden hibára van egy profi megoldásunk.
            </p>
          </div>

          <button
            onClick={handleCopyNumber}
            className="group relative flex items-center gap-4 bg-white/3 border border-white/10 px-10 py-5 md:px-12 md:py-6 rounded-2xl hover:bg-accent transition-all duration-500 overflow-hidden min-w-[200px] justify-center"
          >
            <span className="relative z-10 flex items-center gap-3 font-black text-lg md:text-xl uppercase italic group-hover:text-background transition-colors duration-500">
              <PhoneCall size={24} />
               {copied ? "Másolva!" : "Hívjon Most!"}
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white/2 border border-white/5 p-fluid-px rounded-3xl hover:bg-white/5 hover:border-accent/40 transition-all duration-500 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-500 shadow-2xl">
                  <service.icon size={40} strokeWidth={1.5} />
                </div>
                <ArrowUpRight 
                  size={32} 
                  className="text-white/10 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" 
                />
              </div>
              
              <h4 className="text-3xl font-black mb-4 uppercase italic tracking-tight group-hover:text-accent transition-colors duration-500">
                {service.title}
              </h4>
              <p className="text-lg text-white/50 leading-relaxed font-medium mb-6">
                {service.description}
              </p>
              
              {/* Subtle background detail */}
              <div className="absolute -bottom-10 -right-10 text-[160px] font-black text-white/2 italic select-none pointer-events-none group-hover:text-accent/5 transition-colors duration-700">
                0{index + 1}
              </div>
            </motion.div>
          ))}
          
          {/* Emergency support card upgraded */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="group lg:col-span-3 bg-linear-to-br from-accent/10 to-transparent border border-accent/20 p-fluid-px rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-10 hover:border-accent/40 transition-all duration-500"
          >
             <div className="flex items-center gap-8">
                <div className="w-24 h-24 bg-accent rounded-2xl flex items-center justify-center text-background shadow-2xl shadow-accent/20">
                   <AlertTriangle size={48} strokeWidth={2} />
                </div>
                <div>
                   <h4 className="text-4xl font-black uppercase italic tracking-tighter mb-2">Sürgősségi Javítás</h4>
                   <p className="text-xl text-white/60 font-medium italic">Soron kívüli segítség, ha azonnal kell a megoldás.</p>
                </div>
             </div>
             <a 
               href="#nyitvatartas"
               className="bg-accent text-background px-10 py-5 rounded-2xl font-black text-2xl italic tracking-tighter hover:scale-105 transition-all shadow-xl shadow-accent/10"
             >
                AZONNAL SEGÍTÜNK
             </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
