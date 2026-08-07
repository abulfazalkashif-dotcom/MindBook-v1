import NotebookCard from "./NotebookCard";

const notebooks = [
  {
    id: 1,
    title: "Java Fundamentals",
    sourceCount: 3,
    description:
      "Explore Java concepts, object-oriented programming, and core language fundamentals.",
  },
  {
    id: 2,
    title: "Spring Boot",
    sourceCount: 3,
    description:
      "Learn Spring Boot, REST APIs, dependency injection, and backend development.",
  },
  {
    id: 3,
    title: "AI Research",
    sourceCount: 3,
    description:
      "Research papers and documents about artificial intelligence and modern AI systems.",
  },
];

export default function NotebookList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {notebooks.map((notebook) => (
        <NotebookCard
          key={notebook.id}
          title={notebook.title}
          sourceCount={notebook.sourceCount}
          description={notebook.description}
        />
      ))}
    </div>
  );
}