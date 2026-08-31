import { NextResponse } from "next/server";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function POST(
  request: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const body = await request.json();

    const response = await fetch(
      `http://localhost:8080/api/notebooks/${id}/chat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: body.message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Backend chat request failed");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to send chat message:", error);

    return NextResponse.json(
      {
        error: "Unable to send chat message",
      },
      {
        status: 503,
      }
    );
  }
}