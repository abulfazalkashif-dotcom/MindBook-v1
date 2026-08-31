interface Source {
  id: number;
  title: string;
  type: string;
}

interface SourceListProps {
  sources: Source[];
}

export default function SourceList({
  sources,
}: SourceListProps) {
  return (
    <div className="space-y-2">
      {sources.map((source) => (
        <SourceCard
          key={source.id}
          title={source.title}
          type={source.type}
        />
      ))}
    </div>
  );
}