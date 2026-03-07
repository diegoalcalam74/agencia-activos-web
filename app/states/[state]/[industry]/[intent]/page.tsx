import { notFound } from "next/navigation"
import { statesData } from "@/data/states"
import { industries } from "@/data/industries"
import { permitIntents } from "@/data/permit-intents"

export default function IntentPage({
  params,
}: {
  params: { state: string; industry: string; intent: string }
}) {

  const stateSlug = params.state.toLowerCase()
  const industrySlug = params.industry.toLowerCase()
  const intentSlug = params.intent.toLowerCase()

  const stateData = statesData.find(
    (s) => s.slug.toLowerCase() === stateSlug
  )

  const industryData = industries.find(
    (i) => i.slug.toLowerCase() === industrySlug
  )

  const intentData = permitIntents.find(
    (i) => i.slug.toLowerCase() === intentSlug
  )

  if (!stateData || !industryData || !intentData) {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-8 py-20">

        <p className="text-sm text-gray-400 mb-6 uppercase tracking-wide">
          United States • {stateData.name} • {industryData.name}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          {industryData.name} {intentData.title} in {stateData.name}
        </h1>

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-10">

          <p className="text-gray-400 leading-relaxed">
            {intentData.description} Businesses operating in the{" "}
            {industryData.name.toLowerCase()} industry in {stateData.name} must
            comply with state and local regulatory requirements depending on
            their activities and location.
          </p>

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