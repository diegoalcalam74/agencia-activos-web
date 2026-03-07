"use client"

import { useState } from "react"
import { statesData } from "@/data/states"
import { industries } from "@/data/industries"

export default function LicenseCostCalculator() {

  const [state, setState] = useState("")
  const [industry, setIndustry] = useState("")
  const [result, setResult] = useState<number | null>(null)

  function calculateCost() {

    if (!state || !industry) {
      alert("Please select both state and industry")
      return
    }

    // simple demo calculation
    const baseCost = 200
    const stateMultiplier = state.length * 10
    const industryMultiplier = industry.length * 5

    const total = baseCost + stateMultiplier + industryMultiplier

    setResult(total)
  }

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

        {/* State selector */}

        <div className="mb-6">

          <label className="block mb-2 text-sm text-gray-300">
            Select State
          </label>

          <select
            className="w-full bg-zinc-900 border border-gray-700 p-3 rounded-md"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >

            <option value="">Choose a state</option>

            {statesData.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}

          </select>

        </div>

        {/* Industry selector */}

        <div className="mb-6">

          <label className="block mb-2 text-sm text-gray-300">
            Select Industry
          </label>

          <select
            className="w-full bg-zinc-900 border border-gray-700 p-3 rounded-md"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >

            <option value="">Choose an industry</option>

            {industries.map((i) => (
              <option key={i.slug} value={i.slug}>
                {i.name}
              </option>
            ))}

          </select>

        </div>

        {/* Button */}

        <button
          onClick={calculateCost}
          className="bg-white text-black px-6 py-3 rounded-md font-medium"
        >
          Estimate Permit Costs
        </button>

        {/* Result */}

        {result && (

          <div className="mt-10 bg-zinc-900 border border-gray-700 rounded-xl p-6">

            <h2 className="text-2xl font-semibold mb-3">
              Estimated Licensing Cost
            </h2>

            <p className="text-3xl font-bold">
              ${result}
            </p>

            <p className="text-gray-400 mt-2 text-sm">
              This estimate includes typical licensing, permit and registration
              costs for your selected state and industry.
            </p>

          </div>

        )}

      </section>

    </main>
  )
}