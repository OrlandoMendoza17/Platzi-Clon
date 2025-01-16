import supabase from "@/supabase"

type ParamsProps = {
  params: Promise<{ schoolId: string }>
}

export const GET = async (request: Request, { params }: ParamsProps) => {
  try {
    const { schoolId } = await params

    let { data: schoolsSections, error } = await supabase
      .from('schoolSections')
      .select(`
        title,
        routes (
          title,
          landing_url,
          courses (
            title,
            badge_url,
            metrics,
            professor,
            landing_url,
            courseSections (
              courseClasses (image)
            )
          )
        )
      `)
      .eq('schoolId', schoolId)
      .limit(2, { foreignTable: 'courseSections' }) // Limita a la primera sección
      .limit(2, { foreignTable: 'courseSections.courseClasses' }); // Limita a la primera clase



    if (schoolsSections) {
      
      const formattedSections = schoolsSections.map(({routes})=> {
        routes.map(({courses})=> {
          const formattedCourses = courses.map(({ courseSections, ...rest }) => {
            const firstImage = courseSections[0]?.courseClasses[0]?.image
            const secondImage = courseSections[1]?.courseClasses[0]?.image
    
            let firstClassImage = firstImage ? firstImage : secondImage
    
            return {
              ...rest,
              firstClassImage,
            }
          })
          return formattedCourses;
        })
      })

      return new Response(JSON.stringify(formattedSections), {
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