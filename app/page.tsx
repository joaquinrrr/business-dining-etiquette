"use client";

import NavBar from "@/components/ui/NavBar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/Reveal";
import Footer from "@/components/ui/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 🎨 Fondo global con degradado + respiración */}
      <div className="bg-breathe" aria-hidden />

      <NavBar />

      {/* HERO */}
      <section className="container mx-auto flex flex-col md:flex-row items-center gap-16 pt-32 pb-24 relative z-10">
        <Reveal>
          <div className="flex-1 space-y-6">
            <h1 className="text-6xl font-extrabold leading-tight title-gradient">
              Business Dining Etiquette
            </h1>

            <p className="text-lg text-neutral-800/90 max-w-lg drop-shadow-[0_0_1px_rgba(255,255,255,0.6)]">
              Master the essentials of business dining etiquette how to create a strong
              first impression, navigate table manners with confidence, and use the meal
              as an opportunity to build professional relationships.
            </p>

            <Button className="btn-gradient text-white px-7 py-4 rounded-xl shadow-xl hover:scale-105 transition-all" asChild>
              <a href="/before">Start Learning</a>
            </Button>
          </div>
        </Reveal>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/cenapagprincipal.jpg"
            alt="Business dining table"
            width={650}
            height={450}
            className="rounded-2xl shadow-2xl border border-white/40"
            priority
          />
        </motion.div>
      </section>

      {/* VIDEO */}
      <section className="py-24 text-center relative z-10">
        <Reveal>
          <h3 className="text-4xl font-bold title-gradient mb-12">Learn visually</h3>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="aspect-video w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-blue-500/20 bg-white/70 backdrop-blur-md card-animate">
            <iframe
              src="https://www.youtube.com/embed/FDGGv7z5r2c?si=3HsmtPiuyfmo5sbK"
              title="Business dining etiquette"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
