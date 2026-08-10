import Link from "next/link";

interface Notebook {
  id: number;
  title: string;
  description: string;
}

interface Source {
  id: number;
  notebookId: number;
  title: string;
  type: string;
}
interface NotebookPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getNotebook(id: string): Promise<Notebook | null> {
  const response = await fetch(
    `http://localhost:3000/api/notebooks/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}

async function getSources(id: string): Promise<Source[]> {
  const response = await fetch(
    `http://localhost:3000/api/notebooks/${id}/sources`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return [];
  }

  return response.json();
}

export default async function NotebookPage({
  params,
}: NotebookPageProps) {
  const { id } = await params;

const notebook = await getNotebook(id);
const sources = await getSources(id);

  if (!notebook) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl font-semibold text-gray-900">
            Notebook not found
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            The notebook you are looking for does not exist.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block text-sm font-medium text-gray-700 hover:underline"
          >
            ← Back to notebooks
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Top navigation */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            href="/"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            ← Back to notebooks
          </Link>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
            aria-label="Notebook options"
          >
            ⋮
          </button>

        </div>
      </header>

      {/* Notebook header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xl">
              📖
            </div>

            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                {notebook.title}
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                {notebook.description}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Main workspace */}
      <section className="mx-auto max-w-7xl px-6 py-6">

        <div className="grid min-h-[650px] grid-cols-1 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:grid-cols-[300px_1fr]">

          {/* Sources sidebar */}
          <aside className="border-b border-gray-200 bg-gray-50 lg:border-b-0 lg:border-r">

            <div className="flex items-center justify-between px-5 py-5">

              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Sources
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  3 sources
                </p>
              </div>

              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
                aria-label="Add source"
              >
                +
              </button>

            </div>

            {/* Source list */}
<div className="space-y-2 px-4 pb-5">

  {sources.length === 0 ? (
    <div className="rounded-xl border border-dashed border-gray-300 bg-white p-5 text-center">
      <p className="text-sm text-gray-500">
        No sources added yet.
      </p>
    </div>
  ) : (
    sources.map((source) => (
      <button
        key={source.id}
        type="button"
        className="w-full rounded-xl border border-gray-200 bg-white p-4 text-left transition-all hover:border-gray-300 hover:shadow-sm"
      >
        <div className="flex items-start gap-3">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100">
            📄
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-medium text-gray-900">
              {source.title}
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              {source.type} document
            </p>
          </div>

        </div>
      </button>
    ))
  )}

</div>
          </aside>

          {/* Chat area */}
          <section className="flex min-h-[650px] flex-col bg-white">

            {/* Chat header */}
            <div className="border-b border-gray-100 px-6 py-5">

              <h2 className="text-sm font-semibold text-gray-900">
                AI Chat
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Ask questions about your sources.
              </p>

            </div>

            {/* Empty chat state */}
            <div className="flex flex-1 items-center justify-center px-6">

              <div className="max-w-md text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-2xl">
                  ✨
                </div>

                <h2 className="mt-5 text-xl font-semibold text-gray-900">
                  Ask anything about your sources
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  MindBook will use the documents in this notebook
                  to help answer your questions.
                </p>

              </div>

            </div>

            {/* Chat input */}
            <div className="border-t border-gray-100 p-5">

              <div className="flex items-end gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-2">

                <textarea
                  placeholder="Ask a question about your sources..."
                  rows={1}
                  className="min-h-10 flex-1 resize-none bg-transparent px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />

                <button
                  type="button"
                  disabled
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-200 text-gray-400"
                  aria-label="Send message"
                >
                  ↑
                </button>

              </div>

              <p className="mt-2 text-center text-xs text-gray-400">
                AI responses will be based on the sources in this notebook.
              </p>

            </div>

          </section>

        </div>

      </section>

    </main>
  );
}