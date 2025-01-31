import createHttpError from "http-errors"

export const httpErrorHandler = (error: unknown) => {
  console.log('HttpError Handler')

  if (createHttpError.isHttpError(error)) {

    const { statusCode, message, name } = error
    return new Response(JSON.stringify({ statusCode, name, message }), {
      status: statusCode
    })
    
  } else {
    return serverErrorHandler(error)
  }
}

export const serverErrorHandler = (error: unknown) => {
  console.log('Error Handler')

  if (error instanceof Error) {
    
    const httpError = new createHttpError.InternalServerError()
    const { statusCode, message, name } = httpError
    
    console.log('error.message', error.message)
    
    return new Response(JSON.stringify({ statusCode, name, message }), {
      status: statusCode,
    })
  }
}