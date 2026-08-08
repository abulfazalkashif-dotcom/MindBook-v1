import { Bot, User } from "lucide-react";
import SourceCitation from "./SourceCitation";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  source?: {
    title: string;
    page: number;
  };
}

export default function ChatMessage({
  role,
  content,
  source,
}: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-muted">
          <Bot className="h-4 w-4" />
        </div>
      )}

      <div
        className={`max-w-2xl rounded-2xl px-4 py-3 text-sm ${
          isUser
            ? "bg-primary text-primary-foreground"
            : "border bg-card"
        }`}
      >
        <p className="whitespace-pre-wrap leading-6">
          {content}
        </p>

        {!isUser && source && (
          <SourceCitation
            title={source.title}
            page={source.page}
          />
        )}
      </div>

      {isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}