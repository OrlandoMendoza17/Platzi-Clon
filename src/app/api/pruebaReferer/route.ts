import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Obtener el referer de los headers de la petición
  // Devolver el referer en la respuesta
  return NextResponse.json({
    request
  });
}
