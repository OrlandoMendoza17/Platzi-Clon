import supabase from "@/supabase"
import { PostgrestError } from "@supabase/supabase-js"

interface Category {
  colorDark: string | null;
  created_at: string;
  id: number;
  name: string | null;
  schools: School[];
}

interface School {
  id: number;
  title: string | null;
  badge_url: string | null;
  categoryId: number | null;
  created_at: string;
  description: string | null;
  landing_url: string | null;
  courses: Course[];
  routes?: Route[];
}

interface Route {
  id: number;
  title: string | null;
  badge_url: string | null;
  categoryId: number | null;
  created_at: string;
  description: string | null;
  landing_url: string | null;
  courses: Course[];
  routes?: School[];
  schoolSectionId: number | null;
}

interface Course {
  id: number;
  title: string | null;
  badge_url: string | null;
  first_class: string | null;
}

export const GET = async (request: Request) => {
  const handleError = (error: PostgrestError | null) => {
    if (error) {
      throw new Error(String(error))
    }
  }
  try {

    // CATEGORIES
    let { data: categories, error: categoriesError } = await supabase
      .from('Categories')
      .select(`
        *,
        Schools (
          *,
          Schools_Routes (
            *
          ),
          Courses (
            id,
            title,
            badge_url,
            first_class,
            professor
          )
        )
      `)

    handleError(categoriesError)

    // ROUTES
    let { data: routes, error: routesError } = await supabase
      .from('Routes')
      .select(`
        *,
        Routes_Courses (*)
      `)

    handleError(routesError)

    // COURSES
    let { data: courses, error: coursesError } = await supabase
      .from('Courses')
      .select(`
        id,
        title,
        badge_url,
        first_class,
        professor
      `)

    handleError(coursesError)

    if (categories && routes && courses) {
      let categoriesData: CategoryData[] = categories.map(({ Schools, ...rest }) => {
        return {
          ...rest,
          schools: Schools.map(({ Schools_Routes, Courses, ...rest }) => {
            return {
              ...rest,
              courses: Courses,
              // Getting Routes IDs and then finding the route and filtering the null values.
              routes: Schools_Routes.map(({ routeId }) => {
                const foundRoute = routes.find((route) => route.id === routeId)
                return foundRoute;
              })
                .filter(item => (item !== null) && (item !== undefined))
                .map(({ Routes_Courses, ...rest }) => {
                  return {
                    ...rest,
                    courses: Routes_Courses.map(({ courseId }) => {
                      const foundCourse = courses.find((course) => course.id === courseId)
                      return foundCourse;
                    }).filter(item => (item !== null) && (item !== undefined))
                  }
                })
                .filter(item => Boolean(item))
            }
          })
        }
      })

      return Response.json(categoriesData)
    }

  } catch (error) {
    return Response.json({
      error
    })
  }
}