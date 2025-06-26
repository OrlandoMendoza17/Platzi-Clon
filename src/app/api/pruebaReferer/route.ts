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

      // Definir los dominios de las plataformas
      const platforms: { [key: string]: string[] } = {
        'facebook': ['facebook.com', 'fb.com', 'm.facebook.com', 'l.facebook.com'],
        'google': ['google.com', 'google.es', 'google.mx', 'googl.com', 'goo.gl'],
        'instagram': ['instagram.com', 'instagr.am'],
        'x': ['twitter.com', 'x.com', 't.co'],
        'tiktok': ['tiktok.com', 'vm.tiktok.com']
      };

      // Buscar coincidencias
      for (const [platform, domains] of Object.entries(platforms)) {
        for (const domain of domains) {
          if (hostname === domain || hostname.endsWith('.' + domain)) {
            return platform;
          }
        }
      }

      return "unknown";
    } catch (error) {
      // Si hay error parseando la URL, retornar "unknown"
      return "unknown";
    }
  };

  const referer = request.headers.get('referer');
  console.log('referer', referer)

  return NextResponse.json({
    hostDomain: request.headers.get('host'),
    originDomain: request.headers.get('origin'),
    referer: referer,
    clientDomain: getReferer(referer),
    userAgent: request.headers.get('user-agent'),
    isWhatsApp: isWhatsAppUserAgent(request.headers.get('user-agent') || ''),
  });
}
