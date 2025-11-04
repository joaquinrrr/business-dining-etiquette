import NavBar from "@/components/ui/NavBar";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="pt-24">
      <NavBar />

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center gap-10 py-20">
        <div className="flex-1">
          <h2 className="text-5xl font-extrabold text-blue-700 leading-tight">
            Business Dining Etiquette
          </h2>
          <p className="text-lg mt-6 text-gray-600">
            Master the essentials of business dining etiquette how to create a strong first impression, navigate table manners with confidence, and use the meal as an opportunity to build professional relationships.
          </p>

          {/* ✅ INTERNAL LINK (Requirement 1) */}
          <Button className="mt-6" asChild>
            <a href="/before">Start Learning</a>
          </Button>
        </div>

        {/* ✅ GRAPHIC FEATURE (Requirement 3) */}
        <div className="flex-1">
          <Image
            src="/images/cenapagprincipal.jpg"
            alt="Business dining setting"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* ✅ ADVANCED FEATURE: Video */}
      <section className="container mx-auto pb-20 text-center">
  <h3 className="text-3xl font-bold text-blue-700 mb-8">Learn visually</h3>

  <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
    <iframe
      src="https://www.youtube.com/embed/FDGGv7z5r2c?si=3HsmtPiuyfmo5sbK"
      title="Business dining etiquette"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
</section>

    </main>
  );
}
