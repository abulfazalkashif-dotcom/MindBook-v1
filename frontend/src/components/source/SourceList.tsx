import SourceCard from "./SourceCard";

const sources = [
  {
    id: 1,
    title: "Java Fundamentals",
    type: "PDF",
    pages: 124,
  },
  {
    id: 2,
    title: "Object Oriented Programming",
    type: "PDF",
    pages: 86,
  },
  {
    id: 3,
    title: "Java Collections",
    type: "PDF",
    pages: 72,
  },
];

export default function SourceList() {
  return (
    <div className="space-y-2">
      {sources.map((source) => (
        <SourceCard
          key={source.id}
          title={source.title}
          type={source.type}
          pages={source.pages}
        />
      ))}
    </div>
  );
}