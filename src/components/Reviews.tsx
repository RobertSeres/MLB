"use client";

import { motion } from "framer-motion";
import { Star, Quote, ExternalLink, ThumbsUp } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Mucha Oszkár",
    text: "Már több mint 7 éve járok az MLB Autószervizbe. A szerelők felkészültek, precízek és lelkiismeretesek. Ami igazán kiemeli őket: a korrektségük és átláthatóságuk. Soha nem éreztem, hogy rám akarnának sózni felesleges javításokat.",
    rating: 5,
  },
  {
    name: "Ádám Gulyás",
    text: "Egy jó autószerelőt megtalálni, olyan mint amikor egy jó orvost keresünk. Felhívtam őket, már aznap megpróbálták beiktatni. Másnap el is készült. Reális áron dolgoznak, emellett nagyon kedvesek.",
    rating: 5,
  },
  {
    name: "Bea Behtler",
    text: "Vidékiként hírtelen lerobbant az autóm. Egyedüli szervizként álltak velem szóba a normál munkaidőn kívül. Segítőkészek, alaposak és megbízhatóak!",
    rating: 5,
  },
  {
    name: "zsír vagyok",
    text: "Nem kirakatműhely! A kevés hely ellenére rend van, és nem a parasztvakítás megy, hanem jó és gyors munkavégzés. Rugalmasak és teljesen korrekt áron dolgoznak.",
    rating: 5,
  },
  {
    name: "Zulnorain Liaquat",
    text: "Staff speaks fluent English and took the time to explain things clearly. The service was smooth and stress-free.",
    rating: 5,
  },
];

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?sca_esv=a7c356437a2f7860&sxsrf=ANbL-n62r1w6Dyf0qfVmS3EIBzuhWNcsxA:1774865967631&q=MLB+Aut%C3%B3szerviz+V%C3%A9lem%C3%A9nyek&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLQwsrQ0MTEwNDM0trQwMjMyNdnAyPiKUdbXx0nBsbTk8ObiqtSisswqhbDDK3NScw-vzKtMzV7Eil8eAODGVpFbAAAA&rldimm=11829944016139826254&tbm=lcl&hl=hu-HU&sa=X&ved=2ahUKEwiU7Jj8sseTAxVNRvEDHb21GBIQ9fQKegQIRRAG&biw=1920&bih=919&dpr=1#lkt=LocalPoiReviews";

export default function Reviews() {
  const [hoveredStar, setHoveredStar] = useState(0);

  return (
    <section id="velemenyek" className="py-24 relative overflow-hidden bg-card/30">
      {/* Decorative mechanical gear in background */}
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 scale-150 rotate-45 text-accent/2 opacity-[0.03] pointer-events-none">
        <ThumbsUp size={800} />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-1 text-accent mb-6 animate-pulse">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} fill="currentColor" stroke="none" />
              ))}
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase italic underline decoration-accent/20 underline-offset-10 decoration-8">
              Ügyfeleink <br />
              <span className="text-accent underline-none">Élménynaplója</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted/60 font-medium">
              49+ vélemény után is tartjuk az <span className="text-accent font-black italic">5 csillagos</span> átlagot.
            </p>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-5 rounded-3xl font-black text-xl hover:bg-accent hover:text-black hover:border-accent transition-all hover:shadow-[0_15px_40px_rgba(200,255,0,0.2)] active:scale-95"
          >
            Összes Google vélemény
            <ExternalLink size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-card/40 backdrop-blur-md p-10 rounded-[48px] border border-white/5 relative group hover:border-accent/30 transition-all shadow-xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              <Quote 
                className="absolute top-8 right-10 text-accent/5 group-hover:text-accent/20 transition-all duration-500 scale-[2]" 
                size={84} 
              />
              <div className="flex items-center gap-1.5 text-accent mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="text-lg md:text-xl leading-relaxed mb-10 italic text-white/80 font-medium z-10 relative">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-baseline gap-2">
                <span className="w-10 h-1 bg-accent/30 self-center" />
                <p className="font-black text-xl text-accent tracking-tighter uppercase italic">
                  {review.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Feedback CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-accent p-12 rounded-[56px] text-background flex flex-col md:flex-row items-center gap-10 shadow-[0_30px_90px_rgba(200,255,0,0.2)]"
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-black mb-2 uppercase italic tracking-tight">Jártál már nálunk?</h3>
            <p className="text-xl font-bold opacity-80 italic">Értékeld munkánkat, és segíts másoknak is!</p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  onClick={() => window.open(GOOGLE_REVIEWS_URL, "_blank")}
                  className="transition-transform hover:scale-125 focus:outline-none"
                >
                  <Star
                    size={48}
                    className={star <= hoveredStar ? "fill-white/40" : "fill-background"}
                    stroke="none"
                  />
                </button>
              ))}
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-accent px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:invert transition-all"
            >
              Értékelés beküldése
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
