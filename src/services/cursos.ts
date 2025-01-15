import API from "./api"
import { CourseData } from "@/schemas/curso";
import { CategoryData } from "@/schemas/cursos";

// Información utilizada en la página de filtros de cursos /cursos
export const getCourse = async (course_url: string) => {
  const { data: course } = await API.get<CourseData>(`/api/cursos/${course_url}`)
  return course;
}

// Información utilizada en la página de filtros de cursos /cursos
export const getCoursesPageInfo = async () => {
  const { data: categories } = await API.get<CategoryData[]>("/api/cursos")
  return categories;
}

// Información utilizada en la página de rutas para obtener la primera clase del primer curso
export const getFirstClass = async (courseId: Course["id"]) => {
  const { data: firstClass } = await API.get<CourseClass>(`/api/cursos/first-class/${courseId}`)
  return firstClass;
}
