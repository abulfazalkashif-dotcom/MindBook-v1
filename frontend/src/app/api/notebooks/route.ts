import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "http://localhost:8080/api/notebooks",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Backend request failed");
    }

    const notebooks = await response.json();

    return NextResponse.json(notebooks);
  } catch (error) {
    console.error("Failed to fetch notebooks:", error);

    return NextResponse.json(
      {
        error: "Unable to fetch notebooks",
      },
      {
        status: 503,
      }
    );
  }
}