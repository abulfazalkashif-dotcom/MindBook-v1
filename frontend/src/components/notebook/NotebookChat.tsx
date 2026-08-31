"use client";

import { useState } from "react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function NotebookChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || loading) {
      return;
    }

    // Show the user's message immediately
    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: trimmedMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "/api/notebooks/1/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: trimmedMessage,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();

      // Show backend response
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong while contacting the backend.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="flex min-h-0 min-w-0 flex-col">
      {/* Chat header */}
      <div className="border-b px-6 py-5">
        <h2 className="text-sm font-semibold">
          AI Chat
        </h2>

        <p className="mt-1 text-xs text-muted-foreground">
          Ask questions about your sources.
        </p>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <div className="max-w-md text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-2xl">
                ✨
              </div>

              <h2 className="mt-5 text-xl font-semibold">
                Ask anything about your sources
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                MindBook will use the documents in this notebook
                to help answer your questions.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((chatMessage, index) => (
              <div
                key={index}
                className={
                  chatMessage.role === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >
                <div
                  className={
                    chatMessage.role === "user"
                      ? "max-w-[75%] rounded-2xl bg-black px-4 py-3 text-sm text-white"
                      : "max-w-[75%] rounded-2xl bg-muted px-4 py-3 text-sm"
                  }
                >
                  {chatMessage.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-muted px-4 py-3 text-sm text-muted-foreground">
                  Thinking...
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Chat input */}
      <div className="border-t p-5">
        <form onSubmit={handleSubmit}>
          <div className="flex items-end gap-3 rounded-2xl border bg-muted/30 p-2">
            <textarea
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              placeholder="Ask a question about your sources..."
              rows={1}
              disabled={loading}
              className="min-h-10 flex-1 resize-none bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
            />

            <button
              type="submit"
              disabled={!message.trim() || loading}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Send message"
            >
              ↑
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-xs text-muted-foreground">
          AI responses will be based on the sources in this notebook.
        </p>
      </div>
    </section>
  );
}