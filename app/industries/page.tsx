import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Permits by Industry (2026 Guide)",
  description:
    "Explore business permits, licensing costs, and compliance requirements by industry across the United States.",
};

const industries = [
  {
    name: "Restaurants",
    slug: "restaurants",
    description:
      "Food service permits, health inspections, liquor licensing, and startup compliance requirements."
  },
  {
    name: "Contractors",
    slug: "contractors",
    description:
      "General contractor licensing, trade certifications, bonding, insurance, and construction permits."
  },
  {
    name: "Food Trucks",
    slug: "food-trucks",
    description:
      "Mobile vendor permits, fire inspections, health approvals, and food truck licensing requirements."
  }
];

export default function IndustriesIndex() {
  return (
    <div className="max-w-6xl mx-auto py-16 space-y-16">

      {/* HERO */}
      <section className="space-y-6 border-b border-neutral-800 pb-12">
        <div className="flex items-center gap-3 text-sm text-neutral-400 uppercase tracking-wider">
          <span>United States</span>
          <span>•</span>
          <span>Industries</span>
          <span>•</span>
          <span>Compliance Guide</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Business Permits & Licensing by Industry
        </h1>

        <p className="text-neutral-400 text-lg max-w-2xl">
          Explore regulatory requirements, permit costs, processing times,
          and compliance obligations by business type across the United States.
        </p>
      </section>

      {/* INDUSTRY GRID */}
      <section className="grid md:grid-cols-3 gap-8">

        {industries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition block"
          >
            <h2 className="text-xl font-semibold mb-3">
              {industry.name}
            </h2>

            <p className="text-neutral-400 text-sm">
              {industry.description}
            </p>
          </Link>
        ))}

      </section>

    </div>
  );
}