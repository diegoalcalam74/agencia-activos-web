import { notFound } from "next/navigation"
import Link from "next/link"
import { statesData } from "@/data/states"
import { industries } from "@/data/industries"

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>
}) {
  const { state } = await params

  const slug = state.toLowerCase()

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

        <div className="flex gap-4 mb-10">
          <a
            href={stateData.portal}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-md font-medium"
          >
            Visit Official Portal
          </a>

          <button className="border border-gray-600 px-6 py-3 rounded-md">
            Download Compliance Overview
          </button>
        </div>

        <div className="flex justify-between text-sm text-gray-500 mb-16">
          <p>Last Updated: March 2026</p>
          <p>Regulatory Scope: State + Local</p>
        </div>

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Executive Summary
          </h2>
          <p className="text-gray-400">
            Businesses operating in {stateData.name} must comply with a
            combination of state-level regulatory requirements and city-level
            permitting frameworks.
          </p>
        </div>

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Common Business Licenses
          </h2>

          <div className="grid grid-cols-2 text-sm border-b border-gray-700 pb-3 mb-3">
            <span className="font-medium text-white">License Type</span>
            <span className="font-medium text-white">Estimated Cost</span>
          </div>

          {stateData.licenses.map((license, index) => (
            <div
              key={index}
              className="grid grid-cols-2 text-sm border-b border-gray-800 py-3 text-gray-400"
            >
              <span>{license.name}</span>
              <span>{license.cost}</span>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Industry-Specific Permits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </div>

      </section>
    </main>
  )
}