export type RouteData = Routes & {
  courses: Pick<Course, "badge_url" | "duration">[]
}

export type CourseSectionData = CourseSection & {
  courseClasses: CourseClass[]
}

export type SchoolData = Schools & {
  categories: Pick<Category, "id" | "name">
}

export type CourseData = Course & {
  courseSections: CourseSectionData[],
  professors: Professor,
  courseProject: CourseProject[],
  schools: SchoolData,
  courseRelated_routes: RouteData[]
  courseOpinions: CourseOpinion[]
}