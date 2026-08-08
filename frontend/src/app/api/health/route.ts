import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "http://localhost:8080/api/health"
    );

    const data = await response.text();

    return NextResponse.json({
      backend: data,
    });
  } catch (error) {
    console.error("Backend connection failed:", error);

    return NextResponse.json(
      {
        backend: "Backend unavailable",
      },
      {
        status: 503,
      }
    );
  }
}