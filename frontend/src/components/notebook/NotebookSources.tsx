const sources = [
  "Java Fundamentals.pdf",
  "Object Oriented Programming.pdf",
  "Java Collections.pdf",
];

export default function NotebookSources() {
  return (
    <aside className="col-span-3 border-r p-5">
      <h2 className="text-sm font-semibold">
        Sources
      </h2>

      <div className="mt-4 space-y-2">
        {sources.map((source) => (
          <button
            key={source}
            type="button"
            className="w-full rounded-lg border p-3 text-left text-sm hover:bg-muted"
          >
            {source}
          </button>
        ))}
      </div>
    </aside>
  );
}