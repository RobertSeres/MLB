"use client";

import { Zap, Handshake, Wrench, MessageSquareText, Cog } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const USPs = [
  {
    icon: Zap,
    title: "Gyors és pontos",
    description: "Általában aznap vagy másnap megoldjuk a problémát, amit hozol. Nincs időhúzás.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Handshake,
    title: "Korrekt árazás",
    description: "Előre megbeszéljük a költségeket, nincs semmilyen rejtett tétel a végén.",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Wrench,
    title: "Szakértelem",
    description: "Márkafüggetlen szerviz — minden típust vállalunk és értünk is hozzá.",
    color: "from-accent to-green-500",
  },
  {
    icon: MessageSquareText,
    title: "Átlátható kommunikáció",
    description: "Megmutatjuk és elmagyarázzuk, mi történik az autóddal a javítás alatt.",
    color: "from-purple-400 to-pink-500",
  },
];

export default function WhyUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={containerRef} id="miert-mi" className="py-32 relative overflow-hidden bg-[#051a05]">
      {/* Background gear animation */}
      <motion.div 
        style={{ rotate }}
        className="absolute -top-24 -left-24 text-accent/5 opacity-[0.03] pointer-events-none"
      >
        <Cog size={400} strokeWidth={1} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic"
            >
              Nem csak egy <br />
              <span className="text-accent">Műhely.</span>
            </motion.h2>
            <p className="text-xl md:text-2xl text-muted/60 font-medium leading-relaxed">
              Több mint szerviz — egy hely, ahol az autód biztonságban van, Te pedig pontosan tudod, miért fizetsz.
            </p>
          </div>
          
          <div className="hidden lg:block w-px h-64 bg-linear-to-b from-transparent via-accent/20 to-transparent" />

          <div className="flex items-center gap-4 bg-accent/5 border border-accent/10 px-8 py-4 rounded-3xl backdrop-blur-xl">
             <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-background font-black text-2xl italic tracking-tighter">
                EST.
             </div>
             <div>
                <p className="font-black text-2xl italic leading-none">2017 ÓTA</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">Budapest Szívében</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {USPs.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="group relative flex items-start gap-8 bg-card/20 p-10 rounded-[48px] border border-white/5 hover:border-accent/40 transition-all hover:bg-card/40 overflow-hidden shadow-2xl"
            >
              <div className="shrink-0 w-24 h-24 bg-accent/10 rounded-[32px] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-500 shadow-xl group-hover:shadow-accent/20">
                <usp.icon size={44} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight group-hover:text-accent transition-colors">
                  {usp.title}
                </h3>
                <p className="text-lg text-muted/70 leading-relaxed font-medium">
                  {usp.description}
                </p>
              </div>
              {/* Subtle gradient flash on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
