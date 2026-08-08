"use client";

import { useEffect, useState } from "react";

interface Notebook {
  id: number;
  title: string;
  description: string;
}

export default function NotebookList() {
  const [notebooks, setNotebooks] = useState<Notebook[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchNotebooks() {
      try {
        const response = await fetch("/api/notebooks");

        if (!response.ok) {
          throw new Error("Failed to fetch notebooks");
        }

        const data: Notebook[] = await response.json();

        setNotebooks(data);
      } catch (error) {
        console.error("Failed to load notebooks:", error);
        setError("Unable to load notebooks.");
      } finally {
        setLoading(false);
      }
    }

    fetchNotebooks();
  }, []);

  if (loading) {
    return (
      <div className="py-8">
        <p className="text-sm text-gray-500">
          Loading notebooks...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8">
        <p className="text-sm text-red-500">
          {error}
        </p>
      </div>
    );
  }

  return (
  <section className="w-full">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {notebooks.map((notebook) => (
        <button
          key={notebook.id}
          type="button"
          className="group rounded-xl border border-gray-200 bg-white p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
        >
          {/* Notebook icon */}
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-lg">
            📖
          </div>

          {/* Notebook title */}
          <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-gray-700">
            {notebook.title}
          </h3>

          {/* Notebook description */}
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
            {notebook.description}
          </p>

          {/* Open notebook */}
          <div className="mt-5 text-sm font-medium text-gray-700">
            Open notebook →
          </div>
        </button>
      ))}
    </div>
  </section>
);
}