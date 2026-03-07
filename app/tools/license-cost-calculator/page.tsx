"use client"

import { useState } from "react"
import Link from "next/link"

import { statesData } from "@/data/states"
import { industries } from "@/data/industries"

export default function LicenseCostCalculator() {

  const [state, setState] = useState("")
  const [industry, setIndustry] = useState("")
  const [result, setResult] = useState<number | null>(null)

  function estimateCost() {

    if (!state || !industry) return

    const baseCost = 200
    const industryMultiplier = industries.find(i => i.slug === industry) ? 1.5 : 1
    const randomVariance = Math.floor(Math.random() * 200)

    const estimate = Math.floor(baseCost * industryMultiplier + randomVariance)

    setResult(estimate)
  }

  const selectedState = statesData.find(s => s.slug === state)
  const selectedIndustry = industries.find(i => i.slug === industry)

  return (

    <main className="min-h-screen bg-black text-white">

      <section className="max-w-4xl mx-auto px-8 py-20">

        <h1 className="text-4xl font-bold mb-6">
          Business Permit Cost Calculator
        </h1>

        <p className="text-gray-400 mb-10">
          Estimate the typical licensing and permit costs required to start a business
          in your state and industry.
        </p>

        {/* State */}

        <div className="mb-6">

          <label className="block mb-2 text-sm text-gray-400">
            Select State
          </label>

          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full bg-zinc-900 border border-gray-700 rounded-lg p-3"
          >

            <option value="">Choose a state</option>

            {statesData.map((s) => (

              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>

            ))}

          </select>

        </div>


        {/* Industry */}

        <div className="mb-8">

          <label className="block mb-2 text-sm text-gray-400">
            Select Industry
          </label>

          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full bg-zinc-900 border border-gray-700 rounded-lg p-3"
          >

            <option value="">Choose an industry</option>

            {industries.map((i) => (

              <option key={i.slug} value={i.slug}>
                {i.name}
              </option>

            ))}

          </select>

        </div>


        <button
          onClick={estimateCost}
          className="bg-white text-black px-6 py-3 rounded-lg font-medium"
        >
          Estimate Permit Costs
        </button>


        {result && (

          <div className="mt-12 bg-zinc-900 border border-gray-800 rounded-xl p-8">

            <h2 className="text-2xl font-semibold mb-4">
              Estimated Licensing Cost
            </h2>

            <p className="text-3xl font-bold mb-2">
              ${result}
            </p>

            <p className="text-gray-400 mb-6">
              This estimate includes typical licensing, permit and registration costs
              for your selected state and industry.
            </p>


            {/* SEO LINKS */}

            {selectedState && selectedIndustry && (

              <div className="border-t border-gray-800 pt-6">

                <h3 className="text-lg font-semibold mb-4">
                  Learn more
                </h3>

                <ul className="space-y-2 text-blue-400">

                  <li>
                    <Link href={`/states/${state}/${industry}`}>
                      {selectedIndustry.name} permits in {selectedState.name}
                    </Link>
                  </li>

                  <li>
                    <Link href={`/states/${state}/${industry}/cost`}>
                      {selectedIndustry.name} licensing cost in {selectedState.name}
                    </Link>
                  </li>

                  <li>
                    <Link href={`/states/${state}/${industry}/license`}>
                      {selectedIndustry.name} license requirements in {selectedState.name}
                    </Link>
                  </li>

                </ul>

              </div>

            )}

          </div>

        )}

      </section>

    </main>

  )
}