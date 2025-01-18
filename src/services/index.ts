import API from "./api"
import { SchoolData } from "@/schemas/escuela";
import { CategoryHeaderData } from "@/schemas/header";
import { RouteData } from "@/schemas/ruta";

// Información utilizada en la página /ruta/[school_url]
export const getRoutePageInfo = async (route_url: string) => {
  const { data: school } = await API.get<RouteData>(`/api/ruta/${route_url}`)
  return school;
}

// Información utilizada en la página /escuela/[school_url]
export const getSchoolPageInfo = async (school_url: string) => {
  const { data: school } = await API.get<SchoolData>(`/api/escuela/${school_url}`)
  return school;
}

// Información utilizada en el componenete <Header/>
export const getCategoriesInfo = async () => {
  const { data: categories } = await API.get<CategoryHeaderData[]>(`/api/categories`)
  return categories;
}