import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    industry: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params;
  const normalized = industry.toLowerCase();

  try {
    const module = await import(`@/data/industries/${normalized}.ts`);
    const data = module.default;

    return {
      title: data.metaTitle,
      description: data.metaDescription,
    };
  } catch {
    return {
      title: "Industry Not Found",
    };
  }
}

export default async function IndustryPage({ params }: PageProps) {
  const { industry } = await params;
  const normalized = industry.toLowerCase();

  let data;

  try {
    const module = await import(`@/data/industries/${normalized}.ts`);
    data = module.default;
  } catch {
    return notFound();
  }

  return (
    <div className="max-w-6xl mx-auto py-16 space-y-20">

      {/* HERO */}
      <section className="space-y-6 border-b border-neutral-800 pb-12">
        <div className="flex items-center gap-3 text-sm text-neutral-400 uppercase tracking-wider">
          <span>United States</span>
          <span>•</span>
          <span>{data.name}</span>
          <span>•</span>
          <span>Compliance Guide</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          {data.name} Permits & Licensing Requirements
        </h1>

        <p className="text-neutral-400 text-lg max-w-2xl">
          {data.overview}
        </p>
      </section>

      {/* COMMON LICENSES */}
      <section className="bg-neutral-900 rounded-xl p-8 border border-neutral-800">
        <h2 className="text-2xl font-semibold mb-6">
          Common Licenses for {data.name}
        </h2>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-neutral-700 text-neutral-400 text-sm uppercase tracking-wider">
              <th className="py-4">License</th>
              <th className="py-4">Estimated Cost</th>
              <th className="py-4">Processing Time</th>
            </tr>
          </thead>
          <tbody className="text-neutral-300">
            {data.commonLicenses.map((license: any, index: number) => (
              <tr
                key={index}
                className="border-b border-neutral-800 hover:bg-neutral-800/40 transition"
              >
                <td className="py-4">{license.license}</td>
                <td className="py-4">{license.cost}</td>
                <td className="py-4">{license.processingTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* STATE BREAKDOWN WITH LINKS */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">
          {data.name} Licensing by State
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {data.states.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6"
            >
              <h3 className="font-semibold mb-2">
                {item.state}
              </h3>

              <p className="text-neutral-400 mb-4">
                {item.summary}
              </p>

              <Link
                href={`/states/${item.state.toLowerCase()}`}
                className="text-sm text-blue-400 hover:underline"
              >
                View permits in {item.state} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 text-neutral-300">
          {data.faqs.map((faq: any, index: number) => (
            <div key={index} className="border-b border-neutral-800 pb-4">
              <p className="font-medium mb-2">{faq.question}</p>
              <p className="text-neutral-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}