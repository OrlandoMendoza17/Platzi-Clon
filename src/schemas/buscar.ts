
export type CourseData = Pick<Course, "title" | "badge_url" | "description" | "landing_url" | "professor"> & {
  firstClassTitle: CourseClass["title"],
  firstClassImage: CourseClass["image"],
}