import { NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: RouteParams
) {
  try {
    const { id } = await params;

    const response = await fetch(
      `http://localhost:8080/api/notebooks/${id}/sources`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Failed to fetch sources from backend",
        },
        {
          status: response.status,
        }
      );
    }
 
    const sources = await response.json();

    return NextResponse.json(sources);
  } catch (error) {
    console.error("Failed to fetch sources:", error);

    return NextResponse.json(
      {
        error: "Backend server is unavailable",
      },
      {
        status: 503,
      }
    );
  }
}

export async function POST(
  request: Request,
  { params }: RouteParams
) {
  try {
    const { id } = await params;

    const body = await request.json();

    const response = await fetch(
      `http://localhost:8080/api/notebooks/${id}/sources`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, {
        status: response.status,
      });
    }

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("Failed to create source:", error);

    return NextResponse.json(
      {
        error: "Backend server is unavailable",
      },
      {
        status: 503,
      }
    );
  }
}