import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">My Next.js App</h1>
      <Link href="/about" className="text-blue-600 underline">About</Link>
      <Link href="/projects/weather" className="text-blue-600 underline">Weather (static)</Link>
      <Link href="/projects/todo" className="text-blue-600 underline">Todo (dynamic)</Link>
    </main>
  );
}