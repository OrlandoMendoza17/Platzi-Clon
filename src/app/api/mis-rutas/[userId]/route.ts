import { createClient } from "@/supabase/server"
import { httpErrorHandler } from "../../_middlewares/error.handler"

type ParamsProps = {
  params: Promise<{ userId: string }>
}
export const GET = async (request: Request, { params }: ParamsProps) => {
  try {
    const { userId } = await params
    const supabase = await createClient()

    console.log('userId', userId)

    const { data, error } = await supabase
      .from('users_routes')
      .select(`
        *,
        routes (
          id,
          title,
          badge_url,
          landing_url,
          routeModules (
            title,
            courses (
              id,
              title,
              badge_url
            )
          )
        )
      `)
      .eq("userId", userId)

    if (error) {
      // console.log('error', error)
      throw new Error(error.message)
    }

    if (data) {
      const routes = data.map(({ routes }) => routes)
      return Response.json(routes)
    }

  } catch (error) {
    return httpErrorHandler(error)
  }
}
