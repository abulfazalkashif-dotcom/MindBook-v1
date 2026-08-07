import { BookOpen, Plus } from "lucide-react";

export default function AppSidebar() {
  return (
    <aside className="flex w-64 flex-col border-r">
      <div className="flex h-16 items-center border-b px-5">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />

          <span className="font-semibold">
            My Notebooks
          </span>
        </div>
      </div>

      <div className="p-4">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted"
        >
          <Plus className="h-4 w-4" />
          New Notebook
        </button>
      </div>

      <nav className="flex-1 px-3">
        <button
          type="button"
          className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-muted"
        >
          Java Fundamentals
        </button>

        <button
          type="button"
          className="mt-1 w-full rounded-md px-3 py-2 text-left text-sm hover:bg-muted"
        >
          Spring Boot
        </button>

        <button
          type="button"
          className="mt-1 w-full rounded-md px-3 py-2 text-left text-sm hover:bg-muted"
        >
          AI Research
        </button>
      </nav>
    </aside>
  );
}