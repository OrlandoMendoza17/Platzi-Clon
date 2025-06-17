import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Obtener el referer de los headers de la petición
  const referer = request.headers.get('referer') || 'No referer';

  // Devolver el referer en la respuesta
  return NextResponse.json({
    referer: referer,
    message: 'Referer obtenido exitosamente'
  });
}
