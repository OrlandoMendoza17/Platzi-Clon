export type CourseShortData =  Pick<Courses, "id" | "title" | "badge_url" | "first_class" | "professor">

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