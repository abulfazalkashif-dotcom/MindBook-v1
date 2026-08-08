import { FileText } from "lucide-react";

interface SourceCardProps {
  title: string;
  type: string;
  pages: number;
}

export default function SourceCard({
  title,
  type,
  pages,
}: SourceCardProps) {
  return (
    <button
      type="button"
      className="group w-full rounded-lg border bg-card p-3 text-left transition hover:bg-muted"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted">
          <FileText className="h-4 w-4" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">
            {title}
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            {type} · {pages} pages
          </p>
        </div>
      </div>
    </button>
  );
}