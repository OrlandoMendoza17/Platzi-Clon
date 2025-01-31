import API from "./api"
import type { RouteData } from "@/schemas/mis-rutas";

export const getMyRoutes = async (userId: string) => {
  const { data } = await API.get<RouteData[]>(`/api/mis-rutas/${userId}`)
  return data;
}