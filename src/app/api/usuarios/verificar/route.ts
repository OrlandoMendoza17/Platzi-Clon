import { NextRequest } from "next/server"
import { httpErrorHandler } from "../../_middlewares/error.handler"
import UsersController from "../../_controllers/usuarios.controller"

type BodyProps = {
  email: string,
}

export const POST = async (request: NextRequest) => {
  try {
    const { email }: BodyProps = await request.json()

    // const searchController = new SearchController()
    // const courses = await searchController.getCoursesBy(searchAll, limit)

    const userController = new UsersController()
    const data = await userController.verifyEmail(email)

    return Response.json(data)

  } catch (error) {
    httpErrorHandler(error)
  }
}