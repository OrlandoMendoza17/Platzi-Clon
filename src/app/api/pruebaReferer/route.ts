import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Obtener el referer de los headers de la petición
  // Devolver el referer en la respuesta
  console.log('request', request)

  const isWhatsAppUserAgent = (userAgent: string): boolean => {
    const lowerUserAgent = userAgent.toLowerCase();

    // Patrones específicos de WhatsApp
    const whatsappPatterns = [
      "whatsapp",           // Patrón general
      "whatsapp/",          // Con versión: WhatsApp/2.23.24.76
      "whatsappbrowser",    // WhatsApp Business
      "wabrowser"           // WhatsApp Business (versión corta)
    ];

    return whatsappPatterns.some(pattern => lowerUserAgent.includes(pattern));
  };

  return NextResponse.json({
    hostDomain: request.headers.get('host'),
    originDomain: request.headers.get('origin'),
    refererDomain: request.headers.get('referer'),
    userAgent: request.headers.get('user-agent'),
    isWhatsApp: isWhatsAppUserAgent(request.headers.get('user-agent') || ''),
  });
}
