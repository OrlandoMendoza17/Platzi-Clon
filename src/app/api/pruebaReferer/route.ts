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

  const headerReferer = request.headers.get("referer");
  const referer = getReferer(headerReferer);
  const ad_provider = getAdProvider(headerReferer);

  console.log("headerReferer", headerReferer);
  console.log("referer", referer);
  console.log("ad_provider", ad_provider);

  return NextResponse.json({
    referer,
    headerReferer,
    userAgent: request.headers.get('user-agent'),
    isWhatsApp: isWhatsAppUserAgent(request.headers.get('user-agent') || ''),
  });
}

const getReferer = (referer: string | null): string => {
  if (!referer) return "";
  try {
    // Crear objeto URL para parsing más confiable
    const url = new URL(referer);
    let hostname = url.hostname.toLowerCase();

    // Remover 'www.' si existe
    hostname = hostname.replace(/^www\./, "");

    // Extraer solo el nombre del dominio (sin extensión)
    // Ejemplo: facebook.com -> facebook, google.es -> google
    const domainParts = hostname.split(".");
    let domainName = "";

    if (domainParts.length >= 2) {
      // Tomar la parte antes de la extensión
      domainName = domainParts[domainParts.length - 2] || "";
    }

    return domainName;
  } catch (error) {
    return "";
  }
};

const getAdProvider = (
  headerReferer: string | null
): string | undefined => {
  let referer = getReferer(headerReferer);
  if (referer === "twitter" || referer === "t") referer = "x";
  const adProvider = adProviders.find(provider => referer?.includes(provider));
  return adProvider;
};

const adProviders = [
  "google",
  "instagram",
  "facebook",
  "tiktok",
  "x"
] as const;
