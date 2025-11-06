"use client";

import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function Before() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="bg-breathe" aria-hidden />
      <NavBar />

      <section className="container mx-auto pt-24 relative z-10">
        <Reveal>
          <h2 className="text-4xl font-bold title-gradient">Before The Meal</h2>
          <p className="mt-4 text-neutral-800/90 text-lg">
            Your professional impression begins before you sit down.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <Reveal delay={0.1}>
            <Card className="card-animate card-hover rounded-xl bg-white/70 backdrop-blur-md">
              <CardContent className="p-6 flex items-center justify-between gap-6">
                <p className="text-neutral-900 text-xl font-medium flex-1">
                  Confirm your attendance and be punctual.
                </p>
                <Image src="/images/punctual.jpeg" alt="Confirm attendance" width={120} height={120} className="rounded-lg object-contain" />
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.2}>
            <Card className="card-animate card-hover rounded-xl bg-white/70 backdrop-blur-md">
              <CardContent className="p-6 flex items-center justify-between gap-6">
                <p className="text-neutral-900 text-xl font-medium flex-1">
                  Dress business casual or according to the invitation.
                </p>
                <Image src="/images/dressbusiness.jpg" alt="Dress code" width={120} height={120} className="rounded-lg object-contain" />
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.3}>
            <Card className="card-animate card-hover rounded-xl bg-white/70 backdrop-blur-md">
              <CardContent className="p-6 flex items-center justify-between gap-6">
                <p className="text-neutral-900 text-xl font-medium flex-1">
                  Research who you are meeting with.
                </p>
                <Image src="/images/meetting.png" alt="Research" width={120} height={120} className="rounded-lg object-contain" />
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.4}>
            <Card className="card-animate card-hover rounded-xl bg-white/70 backdrop-blur-md">
              <CardContent className="p-6 flex items-center justify-between gap-6">
                <p className="text-neutral-900 text-xl font-medium flex-1">
                  Avoid checking your phone during the meal.
                </p>
                <Image src="/images/phone.jpg" alt="No phone usage" width={120} height={120} className="rounded-lg object-contain" />
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <Footer />
      </section>
    </main>
  );
}
