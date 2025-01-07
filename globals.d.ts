import type { Database } from './src/lib/database.types'

declare global {
  type Category = Database["public"]["Tables"]["Categories"]["Row"]
  type School = Database["public"]["Tables"]["Schools"]["Row"]
  type Route = Database["public"]["Tables"]["Routes"]["Row"]
  type Courses = Database["public"]["Tables"]["Courses"]["Row"]
  
  type CourseShortData =  Pick<Courses, "id" | "title" | "badge_url" | "first_class" | "professor">
  
  interface RouteData extends Route {
    courses: CourseShortData[]
  }
  
  interface SchoolData extends School {
    courses: CourseShortData[]
    routes: RouteData[]
  }
  
  interface CategoryData extends Category {
    schools: SchoolData[]
  }
}