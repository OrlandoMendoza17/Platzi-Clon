import "server-only";
import { createServerClient as _createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createServerClient = async () => {
  if (typeof window !== "undefined") {
    throw new Error("You are about to leak sensitive data");
  }
  const cookieStore = await cookies();

  return _createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_MASIVO_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_MASIVO_ANON_KEY ?? "",
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        }
      }
    }
  );
};
