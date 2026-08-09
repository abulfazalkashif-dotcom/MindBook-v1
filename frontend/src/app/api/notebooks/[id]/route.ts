import { NextResponse } from "next/server";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const response = await fetch(
      `http://localhost:8080/api/notebooks/${id}`,
      {
        cache: "no-store",
      }
    );

    if (response.status === 404) {
      return NextResponse.json(
        {
          error: "Notebook not found",
        },
        {
          status: 404,
        }
      );
    }

    if (!response.ok) {
      throw new Error("Backend request failed");
    }

    const notebook = await response.json();

    return NextResponse.json(notebook);
  } catch (error) {
    console.error("Failed to fetch notebook:", error);

    return NextResponse.json(
      {
        error: "Unable to fetch notebook",
      },
      {
        status: 503,
      }
    );
  }
}