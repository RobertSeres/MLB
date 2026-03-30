"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Trophy, Star, Award } from "lucide-react";

const aranyVallalkozasAwards = [
  { year: "2025", type: "Highest Rated", img: "https://www.aranyvallalkozas.eu/build/images/badges/Top_rated_2025.349f4fda.png" },
  { year: "2025", type: "Golden 5", img: "https://www.aranyvallalkozas.eu/build/images/badges/Top_10_2025.c2ea06a5.png" },
  { year: "2024", type: "Highest Rated", img: "https://www.aranyvallalkozas.eu/build/images/badges/Top_rated_2024.946bf5ae.png" },
  { year: "2024", type: "Golden 5", img: "https://www.aranyvallalkozas.eu/build/images/badges/Top_10_2024.95193079.png" },
  { year: "2023", type: "Highest Rated", img: "https://www.aranyvallalkozas.eu/build/images/badges/Top_rated_2023.7896ee66.png" },
  { year: "2023", type: "Golden 5", img: "https://www.aranyvallalkozas.eu/build/images/badges/Top_10_2023.aabd87b8.png" },
];

const turulAwards = [
  { year: "2025", type: "Projekt Díjazottja", img: "https://www.autoturul.eu/images/projectImages/laureate_medal_2025.png" },
  { year: "2025", type: "GOLD Medal", img: "https://www.autoturul.eu/images/projectImages/gold_medal_2025.png" },
  { year: "2024", type: "Projekt Díjazottja", img: "https://www.autoturul.eu/images/projectImages/laureate_medal_2024.png" },
  { year: "2024", type: "GOLD Medal", img: "https://www.autoturul.eu/images/projectImages/gold_medal_2024.png" },
  { year: "2023", type: "Projekt Díjazottja", img: "https://www.autoturul.eu/images/projectImages/laureate_medal_2023.png" },
  { year: "2023", type: "GOLD Medal", img: "https://www.autoturul.eu/images/projectImages/gold_medal_2023.png" },
];

export default function Awards() {
  return (
    <section className="py-fluid-py relative overflow-hidden bg-[#030803]">
      {/* Cinematic Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-fluid-px relative z-10">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 text-accent mb-6 italic font-black uppercase tracking-[0.4em] text-xs"
          >
            <Trophy size={16} />
            Elismert Minőség
            <Award size={16} />
          </motion.div>
          <h2 className="text-fluid-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter">
            Díjazott <br />
            <span className="text-accent underline decoration-white/10 underline-offset-4 md:underline-offset-8">Szakértelem.</span>
          </h2>
          <p className="text-fluid-xl text-white/40 font-medium leading-relaxed">
            Folyamatos elismerés és kiemelkedő ügyfél-elégedettség <br className="hidden md:block" />
            2022 óta az ország legjobbjai között.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Arany Vállalkozás Group */}
          <div className="space-y-10">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <h3 className="text-xl md:text-2xl font-black italic uppercase text-white tracking-widest">
                Arany Vállalkozás
              </h3>
              <a 
                href="https://www.aranyvallalkozas.eu/company/mlb-autoszerviz-185528" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-white transition-colors"
              >
                Tanúsítvány megtekintése
                <ExternalLink size={12} />
              </a>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4 md:gap-6">
              {aranyVallalkozasAwards.map((award, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative aspect-square bg-white/3 border border-white/5 rounded-2xl flex flex-col items-center justify-center p-2 hover:bg-white/5 hover:border-accent/30 transition-all shadow-xl"
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src={award.img} 
                      alt={`${award.type} ${award.year}`} 
                      fill 
                      className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              ))}
              <div className="aspect-square bg-accent/5 border border-accent/20 rounded-2xl flex flex-col items-center justify-center p-2">
                 <p className="text-accent font-black text-xs md:text-sm">2022-2025</p>
                 <Star className="text-accent mt-1" size={16} fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Turul Awards Group */}
          <div className="space-y-10">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <h3 className="text-xl md:text-2xl font-black italic uppercase text-white tracking-widest">
                Turul Díjazás
              </h3>
              <a 
                href="https://www.autoturul.eu/profile-43001-mlb-autoszerviz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-white transition-colors"
              >
                Profil megtekintése
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4 md:gap-6">
              {turulAwards.map((award, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative aspect-square bg-white/3 border border-white/5 rounded-2xl flex flex-col items-center justify-center p-2 hover:bg-white/5 hover:border-accent/30 transition-all shadow-xl"
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src={award.img} 
                      alt={`${award.type} ${award.year}`} 
                      fill 
                      className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              ))}
              <div className="aspect-square bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-4">
                <p className="text-white/20 font-black text-[10px] uppercase tracking-widest text-center">Éves <br /> Arany</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Stats Upgraded */}
        <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-20 border-t border-white/5">
           <div>
              <p className="text-5xl md:text-7xl font-black text-accent italic tracking-tighter">9.9/10</p>
              <p className="text-xs font-bold uppercase tracking-[0.4em] opacity-40 mt-2">Átlagos Értékelés</p>
           </div>
           <div>
              <p className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">49+</p>
              <p className="text-xs font-bold uppercase tracking-[0.4em] opacity-40 mt-2">Valódi Vélemény</p>
           </div>
           <div>
              <p className="text-5xl md:text-7xl font-black text-accent italic tracking-tighter">4 ÉVE</p>
              <p className="text-xs font-bold uppercase tracking-[0.4em] opacity-40 mt-2">Folyamatos GOLD Díj</p>
           </div>
        </div>
      </div>
    </section>
  );
}
