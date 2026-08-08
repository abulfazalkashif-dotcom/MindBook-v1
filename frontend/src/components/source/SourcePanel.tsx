import { Plus } from "lucide-react";
import SourceList from "./SourceList";

export default function SourcePanel() {
  return (
    <aside className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold">
            Sources
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            3 documents
          </p>
        </div>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-md border hover:bg-muted"
          aria-label="Add source"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-5">
        <SourceList />
      </div>
    </aside>
  );
}