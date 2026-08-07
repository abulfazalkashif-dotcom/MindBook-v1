import { Search } from "lucide-react";

export default function AppHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div>
        <h1 className="text-lg font-semibold">
          MindBook
        </h1>
      </div>

      <button
        type="button"
        className="rounded-md p-2 hover:bg-muted"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>
    </header>
  );
}