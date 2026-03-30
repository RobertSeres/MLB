"use client";

import { MapPin, Phone, Clock, Compass, Navigation } from "lucide-react";
import { motion } from "framer-motion";

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

export default function Contact() {
  const openingHours = [
    { day: "Hétfő", hours: "09:00 – 17:30" },
    { day: "Kedd", hours: "09:00 – 17:30" },
    { day: "Szerda", hours: "09:00 – 17:30" },
    { day: "Csütörtök", hours: "09:00 – 17:30" },
    { day: "Péntek", hours: "09:00 – 17:30" },
    { day: "Szombat", hours: "Zárva" },
    { day: "Vasárnap", hours: "Zárva" },
  ];

  return (
    <section id="kapcsolat" className="py-fluid-py relative overflow-hidden bg-[#051a05]">
      {/* Background radial gradient */}
      <div className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 w-full h-[800px] bg-accent/2 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-fluid-px relative z-10">
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-5xl md:text-8xl font-black mb-8 italic uppercase leading-[0.9]">
               Helyszíni <br />
               <span className="text-accent underline decoration-white/10 underline-offset-10 decoration-4">Szerelők.</span>
            </h2>
            <p className="text-xl md:text-3xl text-muted/60 font-medium leading-relaxed">
              Budapest szívében, a VIII. kerületben várunk. Akár hívsz, akár bejössz, segítünk.
            </p>
          </div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-accent p-fluid-px rounded-[48px] text-background flex flex-col items-center gap-4 shadow-3xl shadow-accent/20"
          >
             <p className="text-4xl font-black italic tracking-tighter uppercase leading-none">Azonnal.</p>
             <a 
                href="tel:+36302935766" 
                className="text-2xl font-black hover:scale-110 transition-transform active:scale-95 border-b-4 border-background leading-relaxed inline-block"
             >
                +36 30 293 5766
             </a>
             <p className="text-xs font-bold uppercase tracking-widest opacity-60">Hívjon munkanapokon!</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Detailed Info Cards */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card/40 backdrop-blur-3xl p-fluid-px rounded-[56px] border border-white/5 space-y-fluid-px shadow-2xl relative overflow-hidden group"
            >
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-accent rounded-[32px] flex items-center justify-center text-background shrink-0 group-hover:rotate-12 transition-transform shadow-xl">
                  <MapPin size={40} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2 uppercase italic tracking-tighter">Itt Találsz Minket</h3>
                  <p className="text-2xl text-white font-black leading-tight italic">1086 Budapest, Lujza utca 16.</p>
                  <a
                    href="https://maps.google.com/?q=1086+Budapest,+Lujza+utca+16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-accent font-black uppercase text-sm mt-4 tracking-widest hover:text-white transition-colors"
                  >
                    <Navigation size={16} />
                    Útvonalterv
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-accent/10 rounded-[32px] border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:-rotate-12 transition-transform">
                  <FacebookIcon size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2 uppercase italic tracking-tighter">Facebook</h3>
                  <a
                    href="https://www.facebook.com/mlbauto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-white font-black hover:text-accent transition-colors underline underline-offset-8 decoration-white/10 italic"
                  >
                    @mlbauto
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Opening Hours Table upgraded */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-accent p-fluid-px rounded-[56px] text-background shadow-2xl relative group overflow-hidden"
            >
              <div className="absolute top-4 right-10 opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-700">
                <Clock size={200} strokeWidth={5} />
              </div>
              <div className="flex items-center gap-4 mb-10">
                <Clock size={32} />
                <h3 className="text-3xl font-black italic uppercase tracking-tighter">Nyitvatartás</h3>
              </div>
              <div className="space-y-4 font-black">
                {openingHours.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-3 border-b border-background/20 last:border-0 last:pb-0">
                    <span className="text-background/60 italic uppercase text-lg group-hover:translate-x-2 transition-transform">{item.day}</span>
                    <span className={item.hours === "Zárva" ? "text-red-600 bg-red-600/10 px-4 py-1 rounded-full text-sm" : "text-2xl"}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Large Map Embed upgraded */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-full min-h-[600px] lg:min-h-[850px] rounded-[64px] overflow-hidden border-12 border-card/30 shadow-3xl group relative"
          >
            <div className="absolute inset-0 bg-accent/5 pointer-events-none group-hover:bg-accent/0 transition-colors duration-700" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.834079815456!2d19.083832876878363!3d47.49312159646453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc5f78235e23%3A0x673479ae798cbeb9!2sBudapest%2C%20Lujza%20u.%2016%2C%201086!5e0!3m2!1shu!2shu!4v1711790000000!5m2!1shu!2shu"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.1) brightness(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-10 left-10 right-10 bg-background/80 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl flex items-center justify-between pointer-events-none group-hover:translate-y-4 group-hover:opacity-0 transition-all duration-500">
               <div className="flex items-center gap-4">
                  <Compass className="text-accent" size={32} />
                  <p className="text-xl font-black text-white uppercase tracking-tight">Kattints a térképre az útvonalért!</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
