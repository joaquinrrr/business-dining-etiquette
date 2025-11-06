"use client";

import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function Etiquette() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="bg-breathe" aria-hidden />
      <NavBar />

      <section className="container mx-auto pt-24 relative z-10">
        <Reveal>
          <h2 className="text-4xl font-bold title-gradient">At The Table</h2>
          <p className="mt-4 text-neutral-800/90 text-lg">Rules during the meal.</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <Reveal delay={0.1}>
            <Card className="card-animate card-hover rounded-xl bg-white/70 backdrop-blur-md">
              <CardContent className="p-6 flex items-center justify-between gap-6">
                <p className="text-neutral-900 text-xl font-medium flex-1">Utensils are used from the outside in.</p>
                <Image src="/images/utensils.jpeg" alt="Use utensils" width={120} height={120} className="rounded-lg object-contain" />
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.2}>
            <Card className="card-animate card-hover rounded-xl bg-white/70 backdrop-blur-md">
              <CardContent className="p-6 flex items-center justify-between gap-6">
                <p className="text-neutral-900 text-xl font-medium flex-1">
                  Avoid controversial topics; keep conversation professional.
                </p>
                <Image src="/images/topic.png" alt="Conversation etiquette" width={120} height={120} className="rounded-lg object-contain" />
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.3}>
            <Card className="card-animate card-hover rounded-xl bg-white/70 backdrop-blur-md">
              <CardContent className="p-6 flex items-center justify-between gap-6">
                <p className="text-neutral-900 text-xl font-medium flex-1">Place napkin on your lap as soon as you sit.</p>
                <Image src="/images/napkins.jpg" alt="Napkin on lap" width={120} height={120} className="rounded-lg object-contain" />
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.4}>
            <Card className="card-animate card-hover rounded-xl bg-white/70 backdrop-blur-md">
              <CardContent className="p-6 flex items-center justify-between gap-6">
                <p className="text-neutral-900 text-xl font-medium flex-1">Wait for everyone to be served before eating.</p>
                <Image src="/images/served.jpg" alt="Wait before eating" width={120} height={120} className="rounded-lg object-contain" />
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <Footer />
      </section>
    </main>
  );
}
