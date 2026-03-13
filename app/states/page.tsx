import Link from "next/link"
import { statesData } from "@/data/states"

export default function StatesPage() {

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px",
        color: "white",
        lineHeight: "1.6"
      }}
    >

      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Business Permits by State
      </h1>

      <p style={{ marginBottom: "30px" }}>
        Select a state to explore business permits, licenses, and requirements for different industries.
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {statesData.map((state) => (
          <li key={state.slug} style={{ marginBottom: "10px" }}>
            <Link
              href={`/states/${state.slug}`}
              style={{
                color: "#4ea3ff",
                textDecoration: "none",
                fontSize: "18px"
              }}
            >
              {state.name}
            </Link>
          </li>
        ))}
      </ul>

    </main>
  )
}