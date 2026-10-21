import { connection } from "next/server";

export default async function AboutPage() {
  await connection();
  const time = new Date().toLocaleTimeString();
  return <h1 className="text-3xl p-8">About page rendered at: {time}</h1>;
}