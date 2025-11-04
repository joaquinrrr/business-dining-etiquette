import NavBar from "@/components/ui/NavBar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Etiquette() {
  return (
    <main className="pt-24 container mx-auto">
      <NavBar />

      <h2 className="text-4xl font-bold text-blue-700">At The Table</h2>
      <p className="mt-4 text-gray-600 text-lg">Rules during the meal.</p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        {/* ✅ CARD 1 */}
        <Card className="shadow-lg hover:shadow-xl transition rounded-xl">
          <CardContent className="p-6 flex items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-gray-800 text-xl font-medium">
                Utensils are used from the outside in.
              </p>
            </div>
            <Image
              src="/images/utensils.jpeg"
              alt="Use utensils from the outside in"
              width={120}
              height={120}
              className="rounded-lg object-contain"
            />
          </CardContent>
        </Card>

        {/* ✅ CARD 2 */}
        <Card className="shadow-lg hover:shadow-xl transition rounded-xl">
          <CardContent className="p-6 flex items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-gray-800 text-xl font-medium">
                Avoid controversial topics; keep conversation professional.
              </p>
            </div>
            <Image
              src="/images/topic.png"
              alt="Conversation etiquette"
              width={120}
              height={120}
              className="rounded-lg object-contain"
            />
          </CardContent>
        </Card>

        {/* ✅ CARD 3 */}
        <Card className="shadow-lg hover:shadow-xl transition rounded-xl">
          <CardContent className="p-6 flex items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-gray-800 text-xl font-medium">
                Place napkin on your lap as soon as you sit.
              </p>
            </div>
            <Image
              src="/images/napkins.jpg"
              alt="Napkin on lap"
              width={120}
              height={120}
              className="rounded-lg object-contain"
            />
          </CardContent>
        </Card>

        {/* ✅ CARD 4 */}
        <Card className="shadow-lg hover:shadow-xl transition rounded-xl">
          <CardContent className="p-6 flex items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-gray-800 text-xl font-medium">
                Wait for everyone to be served before eating.
              </p>
            </div>
            <Image
              src="/images/served.jpg"
              alt="Wait before eating"
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
