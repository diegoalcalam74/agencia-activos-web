import Link from "next/link"
import { statesData } from "@/data/states"

export default function StatesPage() {
  return (
    <main style={{ padding: "60px" }}>
      <h1>US States</h1>

      <ul>
        {statesData.map((state) => (
          <li key={state.slug}>
            <Link href={`/states/${state.slug}`}>
              {state.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}