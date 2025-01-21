import dotenv from "dotenv"
import { createClient } from "@supabase/supabase-js";
import createHttpError from "http-errors";
dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.SUPABASE_KEY || process.env.NEXT_PUBLIC_SUPABASE_KEY || ""

// console.log('supabaseUrl', supabaseUrl)
// console.log('supabaseKey', supabaseKey)
const supabase = createClient(supabaseUrl, supabaseKey)

class UsersController {
  verifyEmail = async (email: string) => {
    
    console.log('email', email)
    
    const { data, error } = await supabase
      .from('auth.users')
      .select('email')
      .eq("email", email)
      
      if(data){
        return data;
      }
      if(error){
        console.log('error', error)
        throw createHttpError.BadRequest(JSON.stringify(error))
      }
  }
}

export default UsersController;