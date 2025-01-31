export type CourseData = Pick<Course, "id" | "title" | "badge_url" | "metrics" | "professor" | "landing_url"> & {
  firstClassImage: CourseClass["image"],
  firstClassTitle: CourseClass["title"],
}

export type RouteData = Pick<Routes, "id" | "title" | "landing_url"> & {
  courses: CourseData[]
}

export type SchoolSectionsData = Pick<SchoolSections, "title"> & {
  routes: RouteData[]
}

export type SchoolData = Pick<Schools, "id" | "title" | "badge_url"> & {
  categories: Pick<Category, "id" | "name">
}