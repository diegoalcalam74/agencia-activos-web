import { notFound } from "next/navigation"
import { statesData } from "@/data/states"
import { industries } from "@/data/industries"

export default function LicensePage({
  params,
}: {
  params: { state: string; industry: string }
}) {
  const stateSlug = params.state.toLowerCase()
  const industrySlug = params.industry.toLowerCase()

  const stateData = statesData.find(
    (s) => s.slug.toLowerCase() === stateSlug
  )

  const industryData = industries.find(
    (i) => i.slug.toLowerCase() === industrySlug
  )

  if (!stateData || !industryData) {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-8 py-20">

        <p className="text-sm text-gray-400 mb-6 uppercase tracking-wide">
          United States • {stateData.name} • {industryData.name}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          {industryData.name} License Requirements in {stateData.name}
        </h1>

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Do you need a {industryData.name} license in {stateData.name}?
          </h2>

          <p className="text-gray-400">
            Businesses operating in the {industryData.name.toLowerCase()} industry
            in {stateData.name} may require permits, registrations, and
            regulatory compliance depending on project scope and local
            jurisdiction.
          </p>
        </div>

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Typical licensing requirements
          </h2>

          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>State business registration</li>
            <li>Local city or county permits</li>
            <li>Professional licensing if applicable</li>
            <li>Insurance and bonding requirements</li>
            <li>Compliance with zoning laws</li>
          </ul>
        </div>

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8">

          <h2 className="text-2xl font-semibold mb-4">
            Related resources
          </h2>

          <div className="space-y-3 text-blue-400">

            <a
              href={`/states/${stateSlug}/${industrySlug}`}
              className="block hover:underline"
            >
              {industryData.name} permits in {stateData.name}
            </a>

            <a
              href={`/states/${stateSlug}/${industrySlug}/cost`}
              className="block hover:underline"
            >
              {industryData.name} licensing cost in {stateData.name}
            </a>

          </div>

        </div>

      </section>
    </main>
  )
}