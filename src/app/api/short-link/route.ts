import escapeHtml from 'escape-html';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const fallbackMode = searchParams.get("fallback") === "true";

  const rawHost = request.headers.get("host");
  const isWww = rawHost?.startsWith("www.");
  const host = isWww ? rawHost?.replace("www.", "") : rawHost;
  const protocol = request.headers.get("x-forwarded-proto");

  const title = "¿Qué es Nextjs y Como Aprenderlo?";
  const description = "Nextjs actualmente es uno de los Frameworks Frontend mas populares para crear aplicaciones web, y de hecho no solo aplicaciones web Frontend sino incluso apl...";
  const image = `https://bnmbmosfzibdhqylalfs.supabase.co/storage/v1/object/sign/marketing-automation/2dd47d62-bbb4-41f9-93ba-dc9bae5200b0/links/d-s8m4f5.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kYjYyYTFmZi0zNjNkLTQ5ZTItOTI4Yi04NjI2MGNhZGZjMTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYXJrZXRpbmctYXV0b21hdGlvbi8yZGQ0N2Q2Mi1iYmI0LTQxZjktOTNiYS1kYzliYWU1MjAwYjAvbGlua3MvZC1zOG00ZjUuSlBHIiwiaWF0IjoxNzUwNDU0MTQ4LCJleHAiOjE3ODE5OTAxNDh9.PVddqCNOB1RtTA5j_WV4WSPh8SPrXFXCJdFgk4Lcjas`;

  const og_site_name = "KFC PRUEBA"
  const android_package_name = "com.kfcecuador.kfc"
  const ios_app_store_id = "1277450431"

  const deepLink = `kfc://coupons/63204?service=pickup`

  const redirect_ios = "https://apps.apple.com/ec/app/kfc-app-ec-co-cl-ar-y-ve/id1277450431"
  const redirect_android = "https://play.google.com/store/apps/details?id=com.kfcecuador.kfc&hl=es_PR"
  const redirect_web = "https://www.kfc.com.ec/"

  const fallbackUrl = `${protocol}://${host}/api/short-link?fallback=true`;

  const userAgent = request.headers.get("user-agent") ?? "";
  const deviceType = getUserAgent(userAgent);
  let redirectUrl;
  console.log('deviceType', deviceType)

  if (fallbackMode) {
    if (deviceType === "ios" && redirect_ios) {
      redirectUrl = redirect_ios;
    } else if (deviceType === "android" && redirect_android) {
      redirectUrl = redirect_android;
    } else if (deviceType === "web" && redirect_web) {
      redirectUrl = redirect_web;
    } else {
      const error = "No redirect URL found";
      return NextResponse.json({ error }, { status: 404 });
    }

    const redirectUrlObj = new URL(redirectUrl);
    const modifiedRedirectUrl = redirectUrlObj.toString();
    console.log('modifiedRedirectUrl', modifiedRedirectUrl)
    const response = NextResponse.redirect(modifiedRedirectUrl);
    return response;
  }

  const loaderHtml = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <!-- Basic Meta Tags -->
      <title>${escapeHtml(title)}</title>
      <meta name="description" content="${escapeHtml(description)}">
      
      <!-- Open Graph Meta Tags -->
      <meta property="og:title" content="${escapeHtml(title)}">
      <meta property="og:description" content="${escapeHtml(description)}">
      <meta property="og:image" content="${escapeHtml(image)}">
      <meta property="og:site_name" content="${escapeHtml(og_site_name)}">
      <meta property="og:type" content="website">
      <meta property="og:url" content="${escapeHtml(request.url)}">
      
      <!-- iOS Universal Links -->
      <meta name="apple-itunes-app" content="app-id=${ios_app_store_id}, app-argument=${escapeHtml(deepLink)}">
      <link rel="apple-touch-icon" href="${escapeHtml(image)}">
      
      <!-- Android App Links -->
      <meta name="google-play-app" content="app-id=${android_package_name}">
      <link rel="alternate" href="android-app://${android_package_name}/${escapeHtml(deepLink.replace('://', '/'))}">
      
      <!-- Twitter App Cards -->
      <meta name="twitter:card" content="app">
      <meta name="twitter:title" content="${escapeHtml(title)}">
      <meta name="twitter:description" content="${escapeHtml(description)}">
      <meta name="twitter:image" content="${escapeHtml(image)}">
      <meta name="twitter:app:id:iphone" content="${ios_app_store_id}">
      <meta name="twitter:app:id:googleplay" content="${android_package_name}">
      <meta name="twitter:app:url:iphone" content="${escapeHtml(deepLink)}">
      <meta name="twitter:app:url:googleplay" content="${escapeHtml(deepLink)}">
      <meta name="twitter:app:name:iphone" content="${escapeHtml(og_site_name)}">
      <meta name="twitter:app:name:googleplay" content="${escapeHtml(og_site_name)}">
      
      <!-- Facebook App Links -->
      <meta property="al:ios:app_store_id" content="${ios_app_store_id}">
      <meta property="al:ios:app_name" content="${escapeHtml(og_site_name)}">
      <meta property="al:ios:url" content="${escapeHtml(deepLink)}">
      <meta property="al:android:package" content="${android_package_name}">
      <meta property="al:android:app_name" content="${escapeHtml(og_site_name)}">
      <meta property="al:android:url" content="${escapeHtml(deepLink)}">
      <meta property="al:web:url" content="${escapeHtml(request.url)}">
      <meta property="al:web:should_fallback" content="true">
      
      <!-- Additional Meta Tags for Better App Integration -->
      <meta name="mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="default">
      <meta name="theme-color" content="#667eea">
     
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .loader-container {
          text-align: center;
          color: white;
        }
        
        .loader {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .loading-text {
          font-size: 18px;
          font-weight: 500;
          opacity: 0.9;
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .dots {
          display: inline-block;
          animation: dots 1.5s steps(4, end) infinite;
        }
        
        @keyframes dots {
          0%, 20% { content: ''; }
          40% { content: '.'; }
          60% { content: '..'; }
          80%, 100% { content: '...'; }
        }
      </style>
    </head>
    <body>
      <div class="loader-container">
        <div class="loader"></div>
        <div class="loading-text">
          Cargando<span class="dots"></span>
        </div>
      </div>
      
      <script>
        // window.location.href = "${escapeHtml(deepLink)}";
        // Si después del tiempo configurado seguimos aquí, asume que falló
          setTimeout(function() {
            window.location.href = "${fallbackUrl}";
          }, 2000);
      </script>
    </body>
    </html>
  `;

  return new NextResponse(loaderHtml, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}

const getUserAgent = (userAgent: string): UserAgent => {
  const lowerUserAgent = userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(lowerUserAgent);
  const isAndroid = /android/.test(lowerUserAgent);

  if (isIOS) return "ios";
  if (isAndroid) return "android";
  return "web";
};

export type UserAgent = "ios" | "android" | "web";