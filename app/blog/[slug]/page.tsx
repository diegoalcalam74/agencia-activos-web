import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold capitalize">
        {slug.replace(/-/g, " ")}
      </h1>

      <p className="text-neutral-400">
        Esta es una página dinámica generada automáticamente para:
      </p>

      <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
        <p className="text-lg font-mono">{slug}</p>
      </div>

      <p>
        Aquí irá contenido optimizado SEO, herramientas relacionadas y bloques
        de monetización.
      </p>
    </div>
  );
}