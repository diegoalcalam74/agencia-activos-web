import { notFound } from "next/navigation"
import { permitIntents } from "@/data/permit-intents"

export default function IntentPage({
  params,
}: {
  params: { state: string; industry: string; intent: string }
}) {

  const stateSlug = params.state
  const industrySlug = params.industry
  const intentSlug = params.intent

  const intentData = permitIntents.find(
    (i) => i.slug === intentSlug
  )

  if (!intentData) {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-6xl mx-auto px-8 py-20">

        <p className="text-sm text-gray-400 mb-6 uppercase tracking-wide">
          United States • {stateSlug} • {industrySlug}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          {industrySlug} {intentData.title} in {stateSlug}
        </h1>

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-10">
          <p className="text-gray-400 leading-relaxed">
            {intentData.description}
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
              {industrySlug} permits overview in {stateSlug}
            </a>

            <a
              href={`/states/${stateSlug}/${industrySlug}/cost`}
              className="block hover:underline"
            >
              {industrySlug} licensing cost in {stateSlug}
            </a>

            <a
              href={`/states/${stateSlug}/${industrySlug}/license`}
              className="block hover:underline"
            >
              {industrySlug} license requirements in {stateSlug}
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}