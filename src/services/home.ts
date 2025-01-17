import { SchoolData, SchoolSectionsData } from "@/schemas/home";
import API from "./api"

export const getSchoolFilters = async () => {
    const { data } = await API.get<SchoolData[]>("/api/home/escuelas")
    return data;
}

export const getSchoolSections = async (schoolId: Schools["id"]) => {
    const { data } = await API.get<SchoolSectionsData[]>(`/api/home/escuelas/${schoolId}`)
    return data;
}