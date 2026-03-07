import { notFound } from "next/navigation"
import { statesData } from "@/data/states"
import { industries } from "@/data/industries"

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ state: string; industry: string }>
}) {
  const { state, industry } = await params

  const stateSlug = state.toLowerCase()
  const industrySlug = industry.toLowerCase()

  const stateData = statesData.find(
    (s) => s.slug.toLowerCase() === stateSlug
  )

  if (!stateData) {
    return notFound()
  }

  const industryData = industries.find(
    (i) => i.slug.toLowerCase() === industrySlug
  )

  if (!industryData) {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-8 py-20">

        <p className="text-sm text-gray-400 mb-6 uppercase tracking-wide">
          United States • {stateData.name} • {industryData.name}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {industryData.name} Permits & Licensing in {stateData.name}
        </h1>

        <p className="text-gray-400 max-w-3xl mb-12">
          Complete guide to permits, licensing requirements, regulatory fees,
          and compliance steps for {industryData.name.toLowerCase()} businesses
          operating in {stateData.name}.
        </p>

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Industry Overview
          </h2>

          <p className="text-gray-400">
            This section provides a structured overview of the regulatory
            environment affecting {industryData.name.toLowerCase()} businesses
            operating in {stateData.name}, including permits, licenses,
            inspections, and local compliance requirements.
          </p>
        </div>

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Regulatory Scope
          </h2>

          <p className="text-gray-400">
            Requirements typically involve a combination of state-level
            licensing, municipal permits, and operational inspections.
            Businesses should verify requirements with both the
            {` ${stateData.name}`} state authorities and the local
            city permitting office.
          </p>
        </div>

      </section>
    </main>
  )
}