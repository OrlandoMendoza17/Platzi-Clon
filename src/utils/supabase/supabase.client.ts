import { createBrowserClient as _createBrowserClient } from "@supabase/ssr";

export const createBrowserClient = () => {
  return _createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_MASIVO_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_MASIVO_ANON_KEY ?? ""
  );
};
