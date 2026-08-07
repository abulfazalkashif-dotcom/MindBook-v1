import { BookOpen } from "lucide-react";

interface NotebookCardProps {
  title: string;
  sourceCount: number;
  description: string;
}

export default function NotebookCard({
  title,
  sourceCount,
  description,
}: NotebookCardProps) {
  return (
    <button
      type="button"
      className="group w-full rounded-xl border bg-card p-5 text-left transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
          <BookOpen className="h-5 w-5" />
        </div>

        <span className="text-xs text-muted-foreground">
          {sourceCount} {sourceCount === 1 ? "source" : "sources"}
        </span>
      </div>

      <h3 className="mt-4 font-semibold">
        {title}
      </h3>

      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
        {description}
      </p>
    </button>
  );
}