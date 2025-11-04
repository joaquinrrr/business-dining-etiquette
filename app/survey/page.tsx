import NavBar from "@/components/ui/NavBar";

export default function Survey() {
  return (
    <main className="pt-24 container mx-auto">
      <NavBar />

      <h2 className="text-4xl font-bold text-blue-700">Learning Survey</h2>
      <p className="mt-4 text-gray-600 text-lg mb-8">
        Please complete the quick survey below, your feedback helps improve the site.
      </p>

      {/* ✅ Google Form Embed */}
      <div className="w-full flex justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSecXzHD6ozuNV4sLO_bglrE8qPlqAQfWbPRCm-lXkPQzcj2rQ/viewform?embedded=true"
          width="100%"
          height="900"
          className="rounded-xl shadow-xl border"
        >
          Loading…
        </iframe>
      </div>
    </main>
  );
}
