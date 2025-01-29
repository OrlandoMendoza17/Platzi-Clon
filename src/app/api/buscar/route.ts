import supabase from "@/supabase"
import { PostgrestError } from "@supabase/supabase-js"
import { NextRequest } from "next/server"
import SearchController from "../_controllers/buscar.controller"
import { httpErrorHandler } from "../_middlewares/error.handler"

export const GET = async (request: NextRequest) => {
  try {

    const searchParams = request.nextUrl.searchParams
    
    const limitQuery = searchParams.get('limit')
    const limit = limitQuery ? parseInt(limitQuery) : null
    
    const searchAll = searchParams.getAll('search')
    
    // console.log('search', search)
    // console.log('searchAll', searchAll)
    
    // console.log('search', search)
    const searchController = new SearchController()
    const courses = await searchController.getCoursesBy(searchAll, limit)

    if (courses) {
      return Response.json({
        courses: courses,
        length: courses.length,
      })
    }

  } catch (error) {
    httpErrorHandler(error)
  }
}