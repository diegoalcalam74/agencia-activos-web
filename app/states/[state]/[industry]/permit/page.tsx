import { notFound } from "next/navigation"
import { statesData } from "@/data/states"
import { industries } from "@/data/industries"

export default function PermitPage({
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
          {industryData.name} Permits in {stateData.name}
        </h1>

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-10">

          <h2 className="text-2xl font-semibold mb-4">
            What permits do {industryData.name} need in {stateData.name}?
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Businesses operating in the {industryData.name.toLowerCase()} industry in{" "}
            {stateData.name} often require permits at the city, county, or
            state level. The exact permits depend on project scope,
            professional licensing requirements, and local building codes.
          </p>

        </div>

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-10">

          <h2 className="text-2xl font-semibold mb-4">
            Common permits
          </h2>

          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>General business permit</li>
            <li>Local construction permits</li>
            <li>Zoning approvals</li>
            <li>Health and safety permits (if applicable)</li>
            <li>Environmental or waste permits</li>
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
              {industryData.name} permits overview in {stateData.name}
            </a>

            <a
              href={`/states/${stateSlug}/${industrySlug}/cost`}
              className="block hover:underline"
            >
              {industryData.name} licensing cost in {stateData.name}
            </a>

            <a
              href={`/states/${stateSlug}/${industrySlug}/license`}
              className="block hover:underline"
            >
              {industryData.name} license requirements in {stateData.name}
            </a>

          </div>

        </div>

      </section>
    </main>
  )
}