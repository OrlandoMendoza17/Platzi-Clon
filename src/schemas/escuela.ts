export type CoursesData = Pick<Courses, "title" | "badge_url" | "duration">

export type RoutesData = Pick<Routes, "title" | "description" | "landing_url"> & {
  courses: CoursesData[]
}

export type SchoolSectionsData = Pick<SchoolSections, "title" | "description"> & {
  routes: RoutesData[]
}

export type CategoryData = Pick<Category, "color">

export type SchoolData = Schools &  {
  schoolSections: SchoolSectionsData[],
  categories: CategoryData
}

