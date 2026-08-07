import AppShell from "@/components/layout/AppShell";
import NotebookList from "@/components/notebook/NotebookList";

export default function Home() {
  return (
    <AppShell>
      <div className="mx-auto w-full max-w-7xl p-8">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Your workspace
          </p>

          <h2 className="mt-1 text-3xl font-semibold tracking-tight">
            Welcome back
          </h2>

          <p className="mt-2 max-w-2xl text-muted-foreground">
            Choose a notebook to start exploring your documents with AI.
          </p>
        </div>

        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              Your notebooks
            </h3>

            <span className="text-sm text-muted-foreground">
              3 notebooks
            </span>
          </div>

          <NotebookList />
        </section>
      </div>
    </AppShell>
  );
}