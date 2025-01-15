import supabase from "@/supabase"
import { PostgrestError } from "@supabase/supabase-js"

type ParamsProps = {
  params: Promise<{ course_url: string }>
}

export const GET = async (request: Request, { params }: ParamsProps) => {
  const handleError = (error: PostgrestError | null) => {
    if (error) {
      throw new Error(String(error))
    }
  }
  try {
    const { course_url } = await params

    const landing_url = `/cursos/${course_url}/`

    let { data: courses, error } = await supabase
      .from('courses')
      .select(`
        *,
        courseSections (
          *,
          courseClasses (*)
        ),
        professors (*),
        courseProject (*),
        schools (
          *,
          categories (
            id,
            name
          )
        ),
        courseRelated_routes (
          routes (
            *,
            courses (
              badge_url,
              duration
            )
          )
        ),
        courseOpinions (*)
      `)
      .eq('landing_url', landing_url)
        
    handleError(error)
      
    if (courses){
      let course = courses[0]
      
      const formattedCourse = {
        ...course,
        courseRelated_routes: course.courseRelated_routes.map(({routes})=>{
          return routes;
        })
      }
      
      return Response.json(formattedCourse)
    }
      
      
  } catch (error) {
    return new Response(JSON.stringify({ error, message: 'There has been a server error!' }), {
      status: 500,
    })
  }
}