import supabase from "@/supabase"
import { PostgrestError } from "@supabase/supabase-js"
import { NextRequest } from "next/server"

export const GET = async (request: NextRequest) => {
  const handleError = (error: PostgrestError | null) => {
    if (error) {
      throw new Error(String(error))
    }
  }
  try {

    const searchParams = request.nextUrl.searchParams
    const search = searchParams.get('search')

    console.log('search', search)

    let { data: courses, error } = await supabase
      .from('courses')
      .select(`
        title,
        badge_url,
        description,
        landing_url,
        professor,
        courseSections (
          courseClasses (image)
        )
      `)
      .ilike("title", `%${search}%`)
      .limit(2, { foreignTable: 'courseSections' }) // Limita a la primera sección
      .limit(2, { foreignTable: 'courseSections.courseClasses' }); // Limita a la primera clase

    handleError(error)

    if (courses) {

      const formattedCourses = courses.map(({ courseSections, ...rest }) => {
        const firstImage = courseSections[0]?.courseClasses[0]?.image
        const secondImage = courseSections[0]?.courseClasses[1]?.image
        const thirdImage = courseSections[1]?.courseClasses[0]?.image

        let firstClassImage = firstImage ? firstImage : (secondImage ? secondImage : thirdImage)

        return {
          ...rest,
          firstClassImage,
        }
      })

      console.log('formattedCourses', formattedCourses)

      return Response.json({
        courses: formattedCourses,
        length: formattedCourses.length,
      })
    }

  } catch (error) {
    return new Response(JSON.stringify({}), {
      status: 500
    })
  }
}