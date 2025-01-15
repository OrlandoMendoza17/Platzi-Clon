export type CourseShortData =  Pick<Course, "id" | "title" | "badge_url" | "first_class" | "professor" | "landing_url">

export type RouteData = Routes & {
  courses: CourseShortData[]
}

export type SchoolData = Schools & {
  courses: CourseShortData[]
  routes: RouteData[]
}

export type CategoryData = Category & {
  schools: SchoolData[]
}