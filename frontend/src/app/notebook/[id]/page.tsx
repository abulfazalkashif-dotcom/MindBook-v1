import NotebookChat from "@/components/notebook/NotebookChat";
import NotebookHeader from "@/components/notebook/NotebookHeader";
import NotebookSources from "@/components/notebook/NotebookSources";

interface NotebookPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NotebookPage({
  params,
}: NotebookPageProps) {
  const { id } = await params;

  return (
    <div className="flex h-full flex-col">
      <NotebookHeader
        title="Java Fundamentals"
        id={id}
      />

      <div className="grid min-h-0 flex-1 grid-cols-12">
        <NotebookSources />

        <NotebookChat />
      </div>
    </div>
  );
}