"use client";

import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import Reveal from "@/components/ui/Reveal";

export default function Survey() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="bg-breathe" aria-hidden />
      <NavBar />

      <section className="container mx-auto pt-24 relative z-10">
        <Reveal>
          <h2 className="text-4xl font-bold title-gradient">Learning Survey</h2>
          <p className="mt-4 text-neutral-800/90 text-lg mb-8">
            Please complete the quick survey below — your feedback helps improve the site.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="w-full flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSecXzHD6ozuNV4sLO_bglrE8qPlqAQfWbPRCm-lXkPQzcj2rQ/viewform?embedded=true"
              width="100%"
              height="900"
              className="rounded-xl shadow-2xl border bg-white/80 backdrop-blur-md card-animate"
            >
              Loading…
            </iframe>
          </div>
        </Reveal>

        <Footer />
      </section>
    </main>
  );
}
