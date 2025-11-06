"use client";

import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/ui/Reveal";

export default function Resources() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="bg-breathe" aria-hidden />
      <NavBar />

      <section className="container mx-auto pt-24 relative z-10">
        <Reveal>
          <h2 className="text-4xl font-bold title-gradient">Resources</h2>
          <p className="mt-4 text-neutral-800/90 text-lg">
            Useful tools and references to prepare for business dining situations.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <Reveal delay={0.1}>
            <Card className="card-animate card-hover bg-white/70 backdrop-blur-md rounded-xl">
              <CardContent className="p-6 flex items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-700">Restaurant Reservations</h3>
                  <p className="text-neutral-700">Research restaurants and make reservations.</p>
                  <a
                    href="https://www.opentable.com"
                    target="_blank"
                    className="text-blue-600 underline mt-3 block"
                  >
                    Visit OpenTable (external link)
                  </a>
                </div>

                <Image src="/images/opentable.png" alt="Restaurant" width={120} height={120} className="rounded-lg object-contain" />
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.2}>
            <Card className="card-animate card-hover bg-white/70 backdrop-blur-md rounded-xl">
              <CardContent className="p-6 flex items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-700">University of Arizona</h3>
                  <p className="text-neutral-700">Official student resources and services.</p>
                  <a
                    href="https://www.arizona.edu"
                    target="_blank"
                    className="text-blue-600 underline mt-3 block"
                  >
                    Visit UA Homepage (external link)
                  </a>
                </div>

                <Image src="/images/uofa.png" alt="University of Arizona" width={120} height={120} className="rounded-lg object-contain" />
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <Footer />
      </section>
    </main>
  );
}
