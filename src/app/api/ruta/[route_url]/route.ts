import supabase from "@/supabase"
import { CategoryData } from "@/schemas/cursos"
import { PostgrestError } from "@supabase/supabase-js"

type ParamsProps = {
  params: Promise<{ route_url: string }>
}

export const GET = async (request: Request, { params }: ParamsProps) => {
  const handleError = (error: PostgrestError | null) => {
    if (error) {
      throw new Error(String(error))
    }
  }
  try {

    const { route_url } = await params
    const landing_url = `/ruta/${route_url}/`
    
    let { data: routes, error } = await supabase
      .from('routes')
      .select(`
        *,
        routeModules (
          *,
          courses (
            id,
            title,
            badge_url,
            duration,
            landing_url,
            practice_time,
            professors (*)
          )
        ),
        categories (*)
      `)
      .eq("landing_url", landing_url)

    handleError(error)

    if (routes) {
      const route = routes[0]
      return new Response(JSON.stringify(route), {
        status: 200,
      })
    }

  } catch (error) {
    return Response.json({
      error
    })
  }
}