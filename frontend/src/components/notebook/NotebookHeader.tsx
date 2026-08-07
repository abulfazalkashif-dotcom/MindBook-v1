interface NotebookHeaderProps {
  title: string;
  id: string;
}

export default function NotebookHeader({
  title,
  id,
}: NotebookHeaderProps) {
  return (
    <header className="flex h-16 items-center border-b px-6">
      <div>
        <p className="text-xs text-muted-foreground">
          Notebook
        </p>

        <h1 className="font-semibold">
          {title}
        </h1>
      </div>

      <div className="ml-auto">
        <span className="text-xs text-muted-foreground">
          ID: {id}
        </span>
      </div>
    </header>
  );
}