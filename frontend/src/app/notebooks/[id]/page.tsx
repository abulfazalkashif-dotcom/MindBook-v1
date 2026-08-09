import Link from "next/link";

interface Notebook {
  id: number;
  title: string;
  description: string;
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

export default async function NotebookPage({
  params,
}: NotebookPageProps) {
  const { id } = await params;

  const notebook = await getNotebook(id);

  if (!notebook) {
    return (
      <main className="min-h-screen bg-gray-50 p-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl font-semibold text-gray-900">
            Notebook not found
          </h1>

          <p className="mt-2 text-gray-500">
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
      <div className="mx-auto max-w-6xl px-6 py-8">

        {/* Back button */}
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-gray-900"
        >
          ← Back to notebooks
        </Link>

        {/* Notebook header */}
        <div className="mt-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
              📖
            </div>

            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                {notebook.title}
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                {notebook.description}
              </p>
            </div>
          </div>
        </div>

        {/* Notebook workspace */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr]">

          {/* Sources panel */}
          <aside className="rounded-xl border border-gray-200 bg-white p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Sources
            </h2>

            <div className="mt-6 rounded-lg border border-dashed border-gray-300 p-6 text-center">
              <p className="text-sm text-gray-500">
                Sources will appear here.
              </p>
            </div>
          </aside>

          {/* Chat panel */}
          <section className="min-h-[500px] rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-full min-h-[450px] flex-col">

              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900">
                  Ask about your sources
                </h2>

                <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
                  Once sources are added, you will be able to ask
                  questions about the documents in this notebook.
                </p>
              </div>

              {/* Chat input placeholder */}
              <div className="mt-8">
                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                  <span className="flex-1 text-sm text-gray-400">
                    Ask a question...
                  </span>

                  <button
                    type="button"
                    disabled
                    className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-400"
                  >
                    Ask
                  </button>
                </div>
              </div>

            </div>
          </section>

        </div>
      </div>
    </main>
  );
}