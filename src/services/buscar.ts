import { CourseData } from "@/schemas/buscar";
import API from "./api";

export const searchCoursesBy = async (search: string[], limit?: number) => {
  if (search.length) {

    const searchString = `${search.map((element) => `search=${element}`).join("&")}`

    const { data } = await API.get<{ courses: CourseData[], length: number }>(`/api/buscar?${searchString}${limit ? `&limit=${limit}` : ""}`)
    return data.courses;

  } else {
    return []
  }
}