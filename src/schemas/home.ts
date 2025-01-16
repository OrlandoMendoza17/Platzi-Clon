`
title,
routes (
  title,
  landing_url,
  courses (
    title,
    badge_url,
    metrics,
    professor,
    landing_url,
    courseSections (
      courseClasses (image)
    )
  )
)
`

export type CourseData = Pick<Course, "title" | "badge_url" | "metrics" | "professor" | "landing_url"> & {
  firstClassImage: CourseClass["image"]
}

export type RouteData = Pick<Routes, "title" | "landing_url"> & {
  courses: CourseData[]
}

export type SchoolSectionsData = Pick<SchoolSections, "title"> & {
  routes: RouteData[]
}

export type SchoolData = Pick<Schools, "id" | "title" | "badge_url">