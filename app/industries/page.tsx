import Link from "next/link"
import { industries } from "@/data/industries"

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-8 py-20">

        <p className="text-sm text-gray-400 mb-6 uppercase tracking-wide">
          United States • Business Industries
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Industry Permit & Licensing Guides
        </h1>

        <p className="text-gray-400 max-w-3xl mb-16">
          Explore regulatory requirements, licensing costs, permits,
          and compliance risks across major business industries in the
          United States.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="border border-gray-700 rounded-xl p-6 hover:border-white transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {industry.name}
              </h2>

              <p className="text-gray-400 text-sm">
                View licensing requirements and permit costs
                across all states.
              </p>
            </Link>
          ))}

        </div>

      </section>
    </main>
  )
}