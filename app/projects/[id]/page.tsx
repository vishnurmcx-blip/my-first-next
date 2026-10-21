export default async function ProjectPage({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
    const { id } = await params;
    return <h1 className="text-3xl p-8">Project: {id}</h1>;
  }