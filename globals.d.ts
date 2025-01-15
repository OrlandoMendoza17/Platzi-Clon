import type { Database } from './src/lib/database.types'

declare global {
  type Category = Database["public"]["Tables"]["categories"]["Row"]
  type Schools = Database["public"]["Tables"]["schools"]["Row"]
  type SchoolSections = Database["public"]["Tables"]["schoolSections"]["Row"]
  type SchoolSections_Routes = Database["public"]["Tables"]["schoolSections_routes"]["Row"]
  type Routes = Database["public"]["Tables"]["routes"]["Row"]
  type RoutesModules = Database["public"]["Tables"]["routeModules"]["Row"]
  type Routes_Courses = Database["public"]["Tables"]["routes_courses"]["Row"]
  type Course = Database["public"]["Tables"]["courses"]["Row"]
  type CourseSection = Database["public"]["Tables"]["courseSections"]["Row"]
  type CourseClass = Database["public"]["Tables"]["courseClasses"]["Row"]
  type CourseProject = Database["public"]["Tables"]["courseProject"]["Row"]
  type CourseRelatedRoute = Database["public"]["Tables"]["courseRelated_routes"]["Row"]
  type CourseOpinion = Database["public"]["Tables"]["courseOpinions"]["Row"]
  type Professor = Database["public"]["Tables"]["professors"]["Row"]
}