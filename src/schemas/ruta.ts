export type ProfessorData = Pick<Professor, "name" | "image" | "link">

export type CoursesShortData = Pick<Course, "id" | "title" | "badge_url" | "duration" | "practice_time" | "landing_url" | "professor"> & {
  professors: ProfessorData
}

export type RoutesModuleData = RoutesModules & {
  courses: CoursesShortData[]
}

export type RouteData = Routes & {
  routeModules: RoutesModuleData[],
  categories: Category
}