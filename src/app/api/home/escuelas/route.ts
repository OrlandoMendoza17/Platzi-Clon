import supabase from "@/supabase"

export const GET = async (request: Request) => {
  try {

    let { data: schools, error } = await supabase
      .from('schools')
      .select(`
        id,
        title,
        badge_url
      `)

    if (schools) {
      return Response.json(schools)
    }

    if (error) {
      console.log('error', error)
      return new Response(JSON.stringify({ error, message: 'There has been a server error!' }), {
        status: 500,
      })
    }

  } catch (error) {
    return new Response(JSON.stringify({ error, message: 'There has been a server error!' }), {
      status: 500,
    })
  }
}