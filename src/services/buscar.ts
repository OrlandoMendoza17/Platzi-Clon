import { CourseData } from "@/schemas/buscar";
import API from "./api";

export const searchCoursesBy = async (search: string) => {
  if(search !== ""){
    try {
      const { data } = await API.get<{ courses: CourseData[], length: number }>("/api/buscar", { params: { search } })
      return data.courses;
    } catch (error) {
      return []
    }
  }else{
    return []
  }
}