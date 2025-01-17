import { CourseData } from "@/schemas/buscar";
import supabase from "@/supabase";
import { PostgrestError } from "@supabase/supabase-js";
import createHttpError from 'http-errors'

class SearchController {

  getCoursesBy = async (search: string[], limit: number | null) => {
    let courses: CourseData[] = []

    for (const element of search) {
      let query = supabase
        .from('courses')
        .select(`
          title,
          badge_url,
          description,
          landing_url,
          professor,
          courseSections (
            courseClasses (
              image,
              title
            )
          )
        `)
        .ilike("title", `%${element}%`)
        .limit(2, { foreignTable: 'courseSections' }) // Limita a la primera sección
        .limit(2, { foreignTable: 'courseSections.courseClasses' }); // Limita a la primera clase
        
        // En caso de que limit sea null no hay límite de elementos en la búsqueda del query
        if (limit != null) {
          query = query.limit(Math.floor(limit / search.length));
        }
      
        const { data, error } = await query;
        
        console.log('element', element)
        
      if(data){
        
        const formattedCourses: CourseData[] = data.map(({ courseSections, ...rest }) => {
          
          const firstClass = courseSections[0]?.courseClasses[0]
          const secondClass = courseSections[0]?.courseClasses[1]
          const thirdClass = courseSections[1]?.courseClasses[0]
  
          let firstClassImage = ""
          let firstClassTitle = ""
          
          if(firstClass?.image){
            firstClassTitle = firstClass.title as string
            firstClassImage = firstClass.image as string
            
          } else if(secondClass?.image){
            
            firstClassTitle = secondClass.title as string
            firstClassImage = secondClass.image as string
            
          }else{
            firstClassTitle = thirdClass.title as string
            firstClassImage = thirdClass.image as string
          }
          
          return {
            ...rest,
            firstClassTitle,
            firstClassImage,
          }
        })
        
        courses = courses.concat(formattedCourses)
        
      }
      if(error){
        throw createHttpError.BadRequest(JSON.stringify(error))
      }
    }
    
    return courses;
  }

  getSchoolsBy = async (search: string | string[]) => {

  }

}

export default SearchController;