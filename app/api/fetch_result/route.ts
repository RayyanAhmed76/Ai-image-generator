import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { pollingUrl } = await req.json();
    if (!pollingUrl) {
      return NextResponse.json(
        { error: "Missing pollingUrl" },
        { status: 400 }
      );
    }

    const apiKey = process.env.BFL_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    const resp = await fetch(pollingUrl, {
      method: "GET",
      headers: {
        "x-key": apiKey,
        "Content-Type": "application/json",
      },
    });

    // 204 = still processing
    if (resp.status === 204) {
      return NextResponse.json({ ready: false }, { status: 200 });
    }

    const json = await resp.json().catch(() => null);
    if (!json) {
      return NextResponse.json(
        { error: "Failed to parse polling response" },
        { status: 502 }
      );
    }

    // Try to extract possible image results
    const imageUrl =
      json?.result?.sample ||
      json?.result?.outputs?.[0]?.url ||
      json?.image_url ||
      json?.data?.url ||
      (typeof json?.output_base64 === "string"
        ? `data:image/png;base64,${json.output_base64}`
        : null);

    // If image found, return it
    if (imageUrl) {
      return NextResponse.json({ imageUrl, ready: true }, { status: 200 });
    }

    // Sometimes the API returns a "completed" status but no image yet
    const status = (json?.status || json?.state || "").toLowerCase();

    if (
      status.includes("ready") ||
      status.includes("succeeded") ||
      status.includes("completed")
    ) {
      return NextResponse.json(
        { ready: true, imageUrl: null, raw: json },
        { status: 200 }
      );
    }

    // Still processing
    return NextResponse.json({ ready: false, raw: json }, { status: 200 });
  } catch (err) {
    console.error("Error in /api/fetch_result:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
