import dotenv from "dotenv"
import { createClient } from '@supabase/supabase-js'
import type { Database } from '../lib/database.types'
dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL || ""
const supabaseKey = process.env.SUPABASE_KEY || ""

// console.log('supabaseUrl', supabaseUrl)
// console.log('supabaseKey', supabaseKey)

const supabase = createClient<Database>(supabaseUrl, supabaseKey)

export default supabase;