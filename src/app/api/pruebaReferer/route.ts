import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Obtener el referer de los headers de la petición
  const headerReferer = request.headers.get('referer');
  const requestReferer = request.referrer;
  console.log('request', request)
  // Devolver el referer en la respuesta
  return NextResponse.json({
    headerReferer,
    requestReferer,
  });
}
