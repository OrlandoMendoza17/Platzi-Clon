import { createClient } from "@/supabase/server"
import { httpErrorHandler } from "../_middlewares/error.handler"

type ParamsProps = {
  params: Promise<{ schoolId: string }>
}

type BodyProps = {
  userId: string,
  routeId: number,
}

export const POST = async (request: Request) => {
  try {
    const { userId, routeId }: BodyProps = await request.json()
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('users_routes')
      .insert([
        { userId, routeId }
      ])
      .select()

    if (error) {
      // console.log('error', error)
      throw new Error(error.message)
    }

    return Response.json(data)

  } catch (error) {
    return httpErrorHandler(error)
  }
}