import "server-only";
import { createClient } from "@supabase/supabase-js";

/** DANGER!!!!!!!!!!!!!!!!!! SERVER ONLY !!!!!!!!!!!!!!!!!!!!!!!*/

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_MASIVO_URL ?? "";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY_MASIVO ?? "";

console.log("supabaseUrl", supabaseUrl);
console.log("supabaseServiceRoleKey", supabaseServiceRoleKey);

export const createAdminClient = () => {
  if (typeof window !== "undefined") {
    throw new Error("You are about to leak sensitive data");
  }
  return createClient(
    supabaseUrl,
    supabaseServiceRoleKey,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
      }
    }
  );
};
