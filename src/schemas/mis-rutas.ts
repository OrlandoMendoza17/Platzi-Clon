export type CourseData = Pick<Course, "id" | "title" | "badge_url">

export type RouteModuleData = Pick<RoutesModules, "title"> & {
  courses: CourseData[]
}

export type RouteData = Pick<Routes, "id" | "title" | "badge_url" | "landing_url"> & {
  routeModules: RouteModuleData[]
}