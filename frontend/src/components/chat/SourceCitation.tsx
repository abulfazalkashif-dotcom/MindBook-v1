import { FileText } from "lucide-react";

interface SourceCitationProps {
  title: string;
  page: number;
}

export default function SourceCitation({
  title,
  page,
}: SourceCitationProps) {
  return (
    <button
      type="button"
      className="mt-3 flex items-center gap-2 rounded-md border px-3 py-2 text-left text-xs hover:bg-muted"
    >
      <FileText className="h-4 w-4 shrink-0" />

      <span className="truncate">
        {title}
      </span>

      <span className="ml-auto text-muted-foreground">
        p. {page}
      </span>
    </button>
  );
}