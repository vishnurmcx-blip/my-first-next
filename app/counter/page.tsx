"use client";

import { useState } from "react";
import Link from "next/link";

export default function CounterPage() {
  const [count, setCount] = useState(0);
  return (
    <main className="p-8">
      <h1 className="text-3xl">Count: {count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        +1
      </button>
      
    </main>
  );
}