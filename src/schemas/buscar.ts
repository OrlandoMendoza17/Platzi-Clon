
export type CourseData = Pick<Course, "title" | "badge_url" | "description" | "professor" | "landing_url"> & {
  firstClassImage: CourseClass["image"]
}