import { SchoolData } from "@/schemas/home";
import API from "./api"

export const getSchoolFilters = async () => {
    const { data } = await API.get<SchoolData[]>("/api/home/escuelas")
    return data;
}