import SourceList from "./SourceList";

interface Source {
  id: number;
  title: string;
  type: string;
}

interface SourcePanelProps {
  sources: Source[];
}

export default function SourcePanel({
  sources,
}: SourcePanelProps) {
  return (
    <aside className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold">
            Sources
          </h2>

          <p className="mt-1 text-xs text-muted-foreground">
            {sources.length}{" "}
            {sources.length === 1 ? "document" : "documents"}
          </p>
        </div>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-md border hover:bg-muted"
          aria-label="Add source"
        >
          +
        </button>
      </div>

      <div className="mt-5">
        <SourceList sources={sources} />
      </div>
    </aside>
  );
}