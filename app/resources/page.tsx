import NavBar from "@/components/ui/NavBar";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Resources() {
  return (
    <main className="pt-24 container mx-auto">
      <NavBar />

      <h2 className="text-4xl font-bold text-blue-700">Resources</h2>
      <p className="mt-4 text-gray-600 text-lg">
        Here are useful links and tools to prepare for business dining situations.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        <Card className="shadow-md hover:shadow-xl transition rounded-xl">
          <CardContent className="p-6 flex items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-blue-700">Restaurant Reservations</h3>
              <p className="text-gray-600">Research restaurants and make reservations.</p>

              {/* ✅ EXTERNAL LINK (requisito) */}
              <a
                href="https://www.opentable.com"
                target="_blank"
                className="text-blue-600 underline mt-3 block"
              >
                Visit OpenTable (external link)
              </a>
            </div>
            <Image
              src="/images/opentable.png"
              alt="Restaurant"
              width={120}
              height={120}
              className="rounded-lg object-contain"
            />
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-xl transition rounded-xl">
          <CardContent className="p-6 flex items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-blue-700">University of Arizona</h3>
              <p className="text-gray-600">Official student resources and services.</p>

              <a
                href="https://www.arizona.edu"
                target="_blank"
                className="text-blue-600 underline mt-3 block"
              >
                Visit UA Homepage (external link)
              </a>
            </div>
            <Image
              src="/images/uofa.png"
              alt="University of Arizona"
              width={120}
              height={120}
              className="rounded-lg object-contain"
            />
          </CardContent>
        </Card>

      </div>

    </main>
  );
}
