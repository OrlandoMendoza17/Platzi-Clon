import supabase from "@/supabase"
import { CategoryData } from "@/schemas/cursos"
import { PostgrestError } from "@supabase/supabase-js"

export const GET = async (request: Request) => {
  const handleError = (error: PostgrestError | null) => {
    if (error) {
      throw new Error(String(error))
    }
  }
  try {

    let { data: categories, error } = await supabase
      .from('categories')
      .select(`
        *,
        schools (
          *,
          routes (
            *,
            courses (
              id,
              title,
              badge_url,
              first_class,
              landing_url,
              professor
            )
          ),
          courses (
            id,
            title,
            badge_url,
            first_class,
            landing_url,
            professor
          )
        )
      `)

    const data = categories as CategoryData[]
      
    handleError(error)

    if (categories) {
      return Response.json(data)
    }

  } catch (error) {
    return Response.json({
      error
    })
  }
}