import dotenv from "dotenv"
import type { Database } from '../lib/database.types'
dotenv.config()

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || ""

import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient<Database>(supabaseUrl,supabaseKey)
}