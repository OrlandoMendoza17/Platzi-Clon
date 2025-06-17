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

  const getReferer = (): string => {
    const referer = request.headers.get('referer');
    if (!referer) return "";

    // Case 1: referer = https://www.facebook.com/
    // Case 2: referer = https://facebook.com/
    const option1 = referer.split(".")[1];
    const option2 = (referer.split(".")[0] || "").split("https://")[1]
    const clientDomain = referer.includes("www.") ? option1 : option2

    return clientDomain || ""
  }

  return NextResponse.json({
    hostDomain: request.headers.get('host'),
    originDomain: request.headers.get('origin'),
    referer: request.headers.get('referer'),
    clientDomain: getReferer(),
    userAgent: request.headers.get('user-agent'),
    isWhatsApp: isWhatsAppUserAgent(request.headers.get('user-agent') || ''),
  });
}
