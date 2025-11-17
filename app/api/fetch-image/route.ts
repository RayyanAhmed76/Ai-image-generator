// app/api/fetch-image/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { imageUrl } = await req.json();
    
    if (!imageUrl) {
      return NextResponse.json({ error: "imageUrl is required" }, { status: 400 });
    }

    // If it's already a data URL, return it as-is
    if (imageUrl.startsWith("data:")) {
      return NextResponse.json({ 
        dataUrl: imageUrl,
        base64: imageUrl.includes(",") ? imageUrl.split(",")[1] : imageUrl
      });
    }

    
    const response = await fetch(imageUrl);
    
    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch image: ${response.statusText}` },
        { status: response.status }
      );
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = buffer.toString("base64");
    
    // Determine content type from response or default to png
    const contentType = response.headers.get("content-type") || "image/png";
    const dataUrl = `data:${contentType};base64,${base64}`;

    return NextResponse.json({
      dataUrl,
      base64,
    });
  } catch (err: any) {
    console.error("Error fetching image:", err);
    return NextResponse.json(
      { error: err?.message || "Failed to fetch image" },
      { status: 500 }
    );
  }
}



