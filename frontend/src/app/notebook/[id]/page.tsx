interface NotebookPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NotebookPage({
  params,
}: NotebookPageProps) {
  const { id } = await params;

  return (
    <div className="flex h-full flex-col">
      <header className="flex h-16 items-center border-b px-6">
        <div>
          <p className="text-xs text-muted-foreground">
            Notebook
          </p>

          <h1 className="font-semibold">
            Java Fundamentals
          </h1>
        </div>

        <div className="ml-auto">
          <span className="text-xs text-muted-foreground">
            ID: {id}
          </span>
        </div>
      </header>

      <div className="grid min-h-0 flex-1 grid-cols-12">
        <aside className="col-span-3 border-r p-5">
          <h2 className="text-sm font-semibold">
            Sources
          </h2>

          <div className="mt-4 space-y-2">
            <button
              type="button"
              className="w-full rounded-lg border p-3 text-left text-sm hover:bg-muted"
            >
              Java Fundamentals.pdf
            </button>

            <button
              type="button"
              className="w-full rounded-lg border p-3 text-left text-sm hover:bg-muted"
            >
              Object Oriented Programming.pdf
            </button>

            <button
              type="button"
              className="w-full rounded-lg border p-3 text-left text-sm hover:bg-muted"
            >
              Java Collections.pdf
            </button>
          </div>
        </aside>

        <main className="col-span-9 flex min-h-0 flex-col">
          <div className="flex-1 overflow-auto p-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-semibold">
                Chat with your sources
              </h2>

              <p className="mt-2 text-muted-foreground">
                Ask questions about the documents in this notebook.
              </p>
            </div>
          </div>

          <div className="border-t p-4">
            <div className="mx-auto flex max-w-3xl gap-2">
              <input
                type="text"
                placeholder="Ask a question about your sources..."
                className="flex-1 rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />

              <button
                type="button"
                className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Send
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}