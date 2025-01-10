import { SchoolData } from "@/schemas/escuela";
import API from "./api"
import { CategoryData } from "@/schemas/cursos";
import { CategoryHeaderData } from "@/schemas/header";

// Información utilizada en la página de filtros de cursos /cursos
export const getCursosPageInfo = async () => {
  const { data: categories } = await API.get<CategoryData[]>("/api/cursos")
  return categories;
}

// Información utilizada en la página /escuela/[school_url]
export const getSchoolsPageInfo = async (school_url: string) => {
  const { data: school } = await API.get<SchoolData>(`/api/escuela/${school_url}`)
  return school;
}

// Información utilizada en el componenete <Header/>
export const getCategoriesInfo = async () => {
  const { data: categories } = await API.get<CategoryHeaderData[]>(`/api/categories`)
  return categories;
}