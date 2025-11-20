import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser, getUserUsageCount } from "../../../lib/auth";
import { prisma } from "../../../lib/prisma";

type ReqBody = { prompt?: string; base64Image?: string };

const FREE_TRIES_LIMIT = 2;

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUser(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!user.isSubscribed) {
      const usageCount = await getUserUsageCount(user.id);
      if (usageCount >= FREE_TRIES_LIMIT) {
        return NextResponse.json(
          {
            error: "Free trial limit reached. Please subscribe to continue.",
            limitReached: true,
          },
          { status: 403 }
        );
      }
    }

    const body: ReqBody = await req.json();
    const prompt = (body.prompt || "").trim();
    const base64Image = (body.base64Image || "").trim();
    if (!prompt || !base64Image) {
      return NextResponse.json(
        { error: "Missing prompt or base64Image" },
        { status: 400 }
      );
    }

    const apiKey = process.env.BFL_API_KEY;
    if (!apiKey) {
      console.error("BFL_API_KEY not set");
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    const resp = await fetch("https://api.bfl.ai/v1/flux-kontext-pro", {
      method: "POST",
      headers: {
        "x-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        input_image: base64Image,
        seed: 42,
        output_format: "png",
        safety_tolerance: 2,
      }),
    });

    const json = await resp.json();

    // Helper: try to find image in initial response
    const tryExtractImage = (obj: any): string | null => {
      if (!obj) return null;
      if (typeof obj.image_url === "string" && obj.image_url)
        return obj.image_url;
      if (typeof obj.output_base64 === "string" && obj.output_base64)
        return `data:image/png;base64,${obj.output_base64}`;
      if (typeof obj.result === "string" && obj.result)
        return obj.result.startsWith("data:")
          ? obj.result
          : `data:image/png;base64,${obj.result}`;
      if (Array.isArray(obj.outputs) && obj.outputs[0]) {
        const o = obj.outputs[0];
        if (o.url) return o.url;
        if (o.base64) return `data:image/png;base64,${o.base64}`;
      }
      if (obj?.data?.url) return obj.data.url;
      if (obj?.data?.base64) return `data:image/png;base64,${obj.data.base64}`;
      return null;
    };

    const image = tryExtractImage(json);
    if (image) {
      // Track usage for free users
      if (!user.isSubscribed) {
        await prisma.usage.create({
          data: {
            userId: user.id,
            prompt,
          },
        });
      }
      return NextResponse.json({ image }, { status: 200 });
    }

    if (typeof json?.polling_url === "string") {
      if (!user.isSubscribed) {
        await prisma.usage.create({
          data: {
            userId: user.id,
            prompt,
          },
        });
      }
      return NextResponse.json(
        { polling_url: json.polling_url },
        { status: 200 }
      );
    }

    // Unexpected: no image and no polling URL
    console.error("Unexpected response from Flux:", json);
    return NextResponse.json(
      { error: "Unexpected response from Flux" },
      { status: 502 }
    );
  } catch (err) {
    console.error("Error in /api/generate:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
