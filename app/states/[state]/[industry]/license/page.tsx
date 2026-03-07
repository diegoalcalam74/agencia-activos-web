import { notFound } from "next/navigation"
import { statesData } from "@/data/states"
import { industries } from "@/data/industries"

export default async function LicensePage({
  params,
}: {
  params: Promise<{ state: string; industry: string }>
}) {
  const { state, industry } = await params

  const stateData = statesData.find((s) => s.slug === state)
  const industryData = industries.find((i) => i.slug === industry)

  if (!stateData || !industryData) {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-8 py-20">

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

          <p className="text-gray-400 leading-relaxed">
            Licensing requirements for {industryData.name.toLowerCase()} businesses in{" "}
            {stateData.name} vary depending on the type of work performed,
            project size, and whether operations occur at the state, county,
            or municipal level.
          </p>

        </div>

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-10">

          <h2 className="text-2xl font-semibold mb-4">
            Typical requirements
          </h2>

          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>Business registration with the state</li>
            <li>Local city or county permits</li>
            <li>Professional or trade licensing (if required)</li>
            <li>Insurance and bonding requirements</li>
            <li>Compliance with zoning regulations</li>
          </ul>

        </div>

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8">

          <h2 className="text-2xl font-semibold mb-4">
            Related resources
          </h2>

          <div className="space-y-2 text-blue-400">

            <a
              href={`/states/${state}/${industry}`}
              className="block hover:underline"
            >
              {industryData.name} permits in {stateData.name}
            </a>

            <a
              href={`/states/${state}/${industry}/cost`}
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