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

  const getReferer = (referer: string | null): string | undefined => {
    if (!referer) return undefined;

    try {
      // Crear objeto URL para parsing más confiable
      const url = new URL(referer);
      let hostname = url.hostname.toLowerCase();

      // Remover 'www.' si existe
      hostname = hostname.replace(/^www\./, '');

      // Extraer solo el nombre del dominio (sin extensión)
      // Ejemplo: facebook.com -> facebook, google.es -> google
      const domainParts = hostname.split('.');
      let domainName = '';

      if (domainParts.length >= 2) {
        // Tomar la parte antes de la extensión
        domainName = domainParts[domainParts.length - 2];
      }

      // Lista de plataformas a detectar
      const platforms = ['facebook', 'google', 'instagram', 'x', 'twitter', 'tiktok'];

      // Verificar si el nombre del dominio coincide
      if (platforms.includes(domainName)) {
        // Normalizar twitter a x
        return domainName === 'twitter' ? 'x' : domainName;
      }

      return "unknown";
    } catch (error) {
      // Si hay error parseando la URL, retornar "unknown"
      return "unknown";
    }
  };

  const headerReferer = request.headers.get('referer');
  const referer = getReferer(headerReferer);

  console.log('headerReferer', headerReferer)
  console.log('referer', referer)

  return NextResponse.json({
    referer,
    headerReferer,
    userAgent: request.headers.get('user-agent'),
    isWhatsApp: isWhatsAppUserAgent(request.headers.get('user-agent') || ''),
  });
}
