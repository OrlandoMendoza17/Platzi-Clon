import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export const createMiddlewareClient = async (
  request: NextRequest,
  response: NextResponse
) => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_MASIVO_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_MASIVO_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(params => {
            const { name, value } = params;
            return request.cookies.set(name, value);
          });
          cookiesToSet.forEach(params => {
            const { name, value, options } = params;
            return response.cookies.set(name, value, options);
          });
        }
      }
    }
  );
};
