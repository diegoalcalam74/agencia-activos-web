import { notFound } from "next/navigation"
import Link from "next/link"
import { statesData } from "@/data/states"
import { industries } from "@/data/industries"

export async function generateStaticParams() {
  return statesData.map((state) => ({
    state: state.slug,
  }))
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>
}) {
  const resolvedParams = await params

  if (!resolvedParams?.state) {
    return notFound()
  }

  const slug = resolvedParams.state.toLowerCase()

  const stateData = statesData.find(
    (s) => s.slug.toLowerCase() === slug
  )

  if (!stateData) {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-8 py-20">

        <p className="text-sm text-gray-400 mb-6 uppercase tracking-wide">
          United States • {stateData.name} • Business Compliance Guide
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {stateData.name} Business Permits & Licensing Requirements
        </h1>

        <p className="text-gray-400 max-w-3xl mb-8">
          Comprehensive overview of required permits, regulatory costs,
          compliance timelines, and official filing resources for operating
          a business in {stateData.name}.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/states/${stateData.slug}/${industry.slug}`}
              className="border border-gray-700 rounded-lg p-4 hover:border-white transition"
            >
              <h3 className="text-lg font-medium">
                {industry.name}
              </h3>

              <p className="text-sm text-gray-400">
                View permits and licensing requirements
              </p>
            </Link>
          ))}
        </div>

      </section>
    </main>
  )
}