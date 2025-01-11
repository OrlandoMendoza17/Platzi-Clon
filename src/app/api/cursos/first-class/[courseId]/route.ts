import supabase from "@/supabase"
import { CategoryData } from "@/schemas/cursos"
import { PostgrestError } from "@supabase/supabase-js"

type ParamsProps = {
  params: Promise<{ courseId: string }>
}

export const GET = async (request: Request, { params }: ParamsProps) => {
  const handleError = (error: PostgrestError | null) => {
    if (error) {
      throw new Error(String(error))
    }
  }
  try {

    const { courseId } = await params

    let { data: courses, error } = await supabase
      .from('courses')
      .select(`
        *,
        courseSections (
          *,
          courseClasses (*)
        )
      `)
      .eq("id", courseId)
      
    console.log('error', error)
      
    handleError(error)
    
    if (courses) {
      const first_class: CourseClass = courses[0].courseSections[0].courseClasses[0]
      return Response.json(first_class)
    }

  } catch (error) {
    return Response.json({
      error
    })
  }
}