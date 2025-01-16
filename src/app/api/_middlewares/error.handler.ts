const handleError = (error: any) => {
  const response = JSON.stringify({ error, message: 'There has been a server error!' })
  return new Response(JSON.stringify(response), {
    status: 500,
  })
}