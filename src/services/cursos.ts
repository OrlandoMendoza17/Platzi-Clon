import API from "./api"
import { CategoryData } from "@/schemas/cursos";

// Información utilizada en la página de filtros de cursos /cursos
export const getCursosPageInfo = async () => {
  const { data: categories } = await API.get<CategoryData[]>("/api/cursos")
  return categories;
}

// Información utilizada en la página de rutas para obtener la primera clase del primer curso
export const getFirstClass = async (courseId: Courses["id"]) => {
  const { data: firstClass } = await API.get<CourseClass>(`/api/cursos/first-class/${courseId}`)
  return firstClass;
}
