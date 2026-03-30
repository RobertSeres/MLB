import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "MLB Autószerviz — Megbízható autószerviz Budapest VIII. kerület",
  description: "Márkafüggetlen autószerviz a VIII. kerületben — korrekt árak, precíz munka, emberi hozzáállás. Olajcsere, fékjavítás, gumiszerviz és hibadiagnosztika.",
  keywords: ["autószerviz", "Budapest", "VIII. kerület", "olajcsere", "fékjavítás", "gumiszerviz", "MLB Autószerviz", "Lujza utca"],
  openGraph: {
    title: "MLB Autószerviz — Megbízható autószerviz Budapest VIII. kerület",
    description: "Márkafüggetlen autószerviz a VIII. kerületben — korrekt árak, precíz munka, emberi hozzáállás.",
    url: "https://mlbauto.hu", // Placeholder or actual if known
    siteName: "MLB Autószerviz",
    locale: "hu_HU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
