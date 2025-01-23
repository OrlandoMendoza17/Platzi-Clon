
export type CourseData = Pick<Course, "title" | "badge_url" | "metrics" | "description" | "landing_url" | "professor"> & {
  firstClassTitle: CourseClass["title"],
  firstClassImage: CourseClass["image"],
}