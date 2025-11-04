import NavBar from "@/components/ui/NavBar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Before() {
  return (
    <main className="pt-24 container mx-auto">
      <NavBar />

      <h2 className="text-4xl font-bold text-blue-700">Before The Meal</h2>
      <p className="mt-4 text-gray-600 text-lg">
        Your professional impression begins before you sit down.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        {/* CARD 1 */}
        <Card className="shadow-lg hover:shadow-xl transition rounded-xl">
          <CardContent className="p-6 flex items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-gray-800 text-xl font-medium">
                Confirm your attendance and be punctual.
              </p>
            </div>
            <Image
              src="/images/punctual.jpeg"
              alt="Confirm attendance"
              width={120}
              height={120}
              className="rounded-lg object-contain"
            />
          </CardContent>
        </Card>

        {/* CARD 2 */}
        <Card className="shadow-lg hover:shadow-xl transition rounded-xl">
          <CardContent className="p-6 flex items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-gray-800 text-xl font-medium">
                Dress business casual or according to the invitation.
              </p>
            </div>
            <Image
              src="/images/dressbusiness.jpg"
              alt="Dress code"
              width={120}
              height={120}
              className="rounded-lg object-contain"
            />
          </CardContent>
        </Card>

        {/* CARD 3 */}
        <Card className="shadow-lg hover:shadow-xl transition rounded-xl">
          <CardContent className="p-6 flex items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-gray-800 text-xl font-medium">
                Research who you are meeting with.
              </p>
            </div>
            <Image
              src="/images/meetting.png"
              alt="Research"
              width={120}
              height={120}
              className="rounded-lg object-contain"
            />
          </CardContent>
        </Card>

        {/* CARD 4 */}
        <Card className="shadow-lg hover:shadow-xl transition rounded-xl">
          <CardContent className="p-6 flex items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-gray-800 text-xl font-medium">
                Avoid checking your phone during the meal.
              </p>
            </div>
            <Image
              src="/images/phone.jpg"
              alt="No phone usage"
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
