import supabase from "@/supabase"

type ParamsProps = {
  params: Promise<{ school_url: string }>
}

export const GET = async (request: Request, { params }: ParamsProps) => {
  try {
    const { school_url } = await params

    const landing_url = `/escuela/${school_url}/`

    let { data: schools, error } = await supabase
      .from('schools')
      .select(`
        *,
        schoolSections (
          title,
          description,
          routes (
            title,
            description,
            landing_url,
            courses (
              id,
              title,
              badge_url,
              duration
            )
          )
        ),
        categories (
          color
        )
      `)
      .eq('landing_url', landing_url)

    if (schools) {
      const school = schools[0]
      return new Response(JSON.stringify(school), {
        status: 200,
      })
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