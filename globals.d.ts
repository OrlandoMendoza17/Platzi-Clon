import type { Database } from './src/lib/database.types'

declare global {
  type Category = Database["public"]["Tables"]["categories"]["Row"]
  type Schools = Database["public"]["Tables"]["schools"]["Row"]
  type Routes = Database["public"]["Tables"]["routes"]["Row"]
  type Courses = Database["public"]["Tables"]["courses"]["Row"]
  type SchoolSections = Database["public"]["Tables"]["schoolSections"]["Row"]
  type SchoolSections_Routes = Database["public"]["Tables"]["schoolSections_routes"]["Row"]
  type Routes_Courses = Database["public"]["Tables"]["routes_courses"]["Row"]
}