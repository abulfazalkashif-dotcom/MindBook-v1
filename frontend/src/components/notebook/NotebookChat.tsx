export default function NotebookChat() {
  return (
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
  );
}