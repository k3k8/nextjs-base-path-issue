// app/api/test-request/route.ts
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const fullUrl = request.url;
  const url = new URL(fullUrl);

  console.log("Request URL:", fullUrl);
  console.log("Request Pathname:", url.pathname);
  console.log("Request URL:", request);
  console.log("Request NextURL:", request.nextUrl);

  return new Response(JSON.stringify({ message: "Request details logged." }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
