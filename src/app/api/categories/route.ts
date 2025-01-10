import supabase from "@/supabase"

export const GET = async (request: Request) => {
  try {
    let { data: categories, error } = await supabase
      .from('categories')
      .select(`
        *,
        schools (
          *,
          routes (
            *
          )
        )
      `)

    return Response.json(categories)

  } catch (error) {
    return Response.json({
      error
    })
  }
}