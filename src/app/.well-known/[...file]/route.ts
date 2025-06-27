import { NextRequest, NextResponse } from "next/server";

import { createAdminClient } from "../../../utils/supabase/supabase.admin";

export const maxDuration = 60;

export const GET = async (
  request: NextRequest,
  route: { params: Promise<{ file: string[] }> }
) => {
  const { file } = await route.params;
  // const rawHost = request.headers.get("host");
  const rawHost = "kfc-ec.link/";
  const domain = rawHost?.replace(/^www\./, "").replace(/\./g, "") ?? rawHost;
  const filename = file.join("/");

  if (!domain) {
    return NextResponse.json({ error: "Invalid domain" }, { status: 400 });
  }

  const supabase = createAdminClient();
  const bucket = supabase.storage.from("well-known-files");
  const filePath = `${domain}/${filename}`;
  const { data: publicUrl } = bucket.getPublicUrl(filePath);

  if (!publicUrl?.publicUrl) {
    const error = "Could not generate public URL";
    return NextResponse.json({ error, filePath }, { status: 500 });
  }

  try {
    const response = await fetch(publicUrl.publicUrl);
    if (!response.ok) {
      const error = "File not found";
      return NextResponse.json({ error, filePath }, { status: 404 });
    }

    const content = await response.text();

    const isAppleAppSiteAssociation = filename === "apple-app-site-association";
    const isJson = filename.endsWith(".json") || isAppleAppSiteAssociation;
    const contentType = isJson ? "application/json" : "text/plain";

    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        // TODO: Change to 1 day -> max-age=86400
        "Cache-Control": "public, max-age=5" // Cache for 5 seconds for testing purposes
      }
    });
  } catch (error) {
    const errorMessage = "Error fetching file";
    const errorObject = { error: errorMessage, filePath };
    return NextResponse.json(errorObject, { status: 500 });
  }
};