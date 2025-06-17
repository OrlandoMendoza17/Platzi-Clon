import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Obtener el referer de los headers de la petición
  // Devolver el referer en la respuesta
  console.log('request', request)
  return NextResponse.json({
    hostDomain: request.headers.get('host'),
    originDomain: request.headers.get('origin'),
    refererDomain: request.headers.get('referer'),
  });
}
