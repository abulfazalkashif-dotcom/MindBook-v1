"use client";

import { useState } from "react";

interface AddSourceButtonProps {
  notebookId: string;
}

export default function AddSourceButton({
  notebookId,
}: AddSourceButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("TEXT");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError("Title and content are required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/notebooks/${notebookId}/sources`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title.trim(),
            type,
            content: content.trim(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create source");
      }

      // Refresh the current Server Component page
      // so the newly created source appears immediately.
      window.location.reload();
    } catch (error) {
      console.error("Failed to create source:", error);

      setError(
        "Something went wrong while creating the source."
      );

      setLoading(false);
    }
  }

  function handleClose() {
    if (loading) {
      return;
    }

    setIsOpen(false);
    setError("");
  }

  return (
    <>
      {/* Add Source Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
        aria-label="Add source"
      >
        +
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white shadow-xl">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-gray-200 px-6 py-5">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Add Source
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Add a document or text to this notebook.
                </p>
              </div>

              <button
                type="button"
                onClick={handleClose}
                disabled={loading}
                className="text-xl text-gray-400 transition-colors hover:text-gray-700 disabled:cursor-not-allowed"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 px-6 py-6"
            >
              {/* Title */}
              <div>
                <label
                  htmlFor="source-title"
                  className="block text-sm font-medium text-gray-900"
                >
                  Source title
                </label>

                <input
                  id="source-title"
                  type="text"
                  value={title}
                  onChange={(event) =>
                    setTitle(event.target.value)
                  }
                  placeholder="e.g. Java Basics"
                  disabled={loading}
                  className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100 disabled:bg-gray-50"
                />
              </div>

              {/* Type */}
              <div>
                <label
                  htmlFor="source-type"
                  className="block text-sm font-medium text-gray-900"
                >
                  Source type
                </label>

                <select
                  id="source-type"
                  value={type}
                  onChange={(event) =>
                    setType(event.target.value)
                  }
                  disabled={loading}
                  className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100 disabled:bg-gray-50"
                >
                  <option value="TEXT">Text</option>
                  <option value="PDF">PDF</option>
                </select>
              </div>

              {/* Content */}
              <div>
                <label
                  htmlFor="source-content"
                  className="block text-sm font-medium text-gray-900"
                >
                  Source content
                </label>

                <textarea
                  id="source-content"
                  value={content}
                  onChange={(event) =>
                    setContent(event.target.value)
                  }
                  placeholder="Paste the source content here..."
                  rows={7}
                  disabled={loading}
                  className="mt-2 w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-sm leading-6 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-100 disabled:bg-gray-50"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                  {error}
                </p>
              )}

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  disabled={loading}
                  className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={
                    loading ||
                    !title.trim() ||
                    !content.trim()
                  }
                  className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {loading ? "Adding..." : "Add Source"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}