import SourcePanel from "@/components/source/SourcePanel";

interface Source {
  id: number;
  title: string;
  type: string;
}

interface NotebookSourcesProps {
  sources: Source[];
}

export default function NotebookSources({
  sources,
}: NotebookSourcesProps) {
  return (
    <div className="col-span-12 border-b md:col-span-3 md:border-b-0 md:border-r">
      <SourcePanel sources={sources} />
    </div>
  );
}