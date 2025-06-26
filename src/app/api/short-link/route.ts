import escapeHtml from 'escape-html';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const title = "¿Qué es Nextjs y Como Aprenderlo?";
  const description = "Nextjs actualmente es uno de los Frameworks Frontend mas populares para crear aplicaciones web, y de hecho no solo aplicaciones web Frontend sino incluso apl...";
  const image = `https://bnmbmosfzibdhqylalfs.supabase.co/storage/v1/object/sign/marketing-automation/2dd47d62-bbb4-41f9-93ba-dc9bae5200b0/links/d-s8m4f5.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kYjYyYTFmZi0zNjNkLTQ5ZTItOTI4Yi04NjI2MGNhZGZjMTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYXJrZXRpbmctYXV0b21hdGlvbi8yZGQ0N2Q2Mi1iYmI0LTQxZjktOTNiYS1kYzliYWU1MjAwYjAvbGlua3MvZC1zOG00ZjUuSlBHIiwiaWF0IjoxNzUwNDU0MTQ4LCJleHAiOjE3ODE5OTAxNDh9.PVddqCNOB1RtTA5j_WV4WSPh8SPrXFXCJdFgk4Lcjas`;

  const generateAppLinkMetaTags = (
    safeDestinationUrl: string,
    deeplink: any
  ): string => {
    const { og_site_name, android_package_name, ios_app_store_id } = deeplink;

    // If we don't have app info, don't generate app link meta tags
    if (!android_package_name && !ios_app_store_id) return "";

    const safeAppName = escapeHtml(og_site_name || "App");

    let metaTags = "";

    // Facebook App Links
    if (android_package_name) {
      const safeAndroidPackageName = escapeHtml(android_package_name);
      metaTags += `
      <meta property="al:android:app_name" content="${safeAppName}">
      <meta property="al:android:url" content="${safeDestinationUrl}">
      <meta property="al:android:package" content="${safeAndroidPackageName}">`;
    }

    if (ios_app_store_id) {
      const safeIosAppStoreId = escapeHtml(ios_app_store_id);
      metaTags += `
      <meta property="al:ios:app_name" content="${safeAppName}">
      <meta property="al:ios:url" content="${safeDestinationUrl}">
      <meta property="al:ios:app_store_id" content="${safeIosAppStoreId}">`;
    }

    if (android_package_name) {
      const safeAndroidPackageName = escapeHtml(android_package_name);
      metaTags += `
      <meta name="twitter:app:name:googleplay" content="${safeAppName}">
      <meta name="twitter:app:id:googleplay" content="${safeAndroidPackageName}">
      <meta name="twitter:app:url:googleplay" content="${safeDestinationUrl}">`;
    }

    // Twitter App Cards
    if (ios_app_store_id) {
      const safeIosAppStoreId = escapeHtml(ios_app_store_id);
      metaTags += `
      <meta name="twitter:app:name:iphone" content="${safeAppName}">
      <meta name="twitter:app:id:iphone" content="${safeIosAppStoreId}">
      <meta name="twitter:app:url:iphone" content="${safeDestinationUrl}">
      <meta name="twitter:app:name:ipad" content="${safeAppName}">
      <meta name="twitter:app:id:ipad" content="${safeIosAppStoreId}">
      <meta name="twitter:app:url:ipad" content="${safeDestinationUrl}">`;
    }

    // Web fallback
    metaTags += `
      <meta property="al:web:url" content="${safeDestinationUrl}">
    `;

    return metaTags;
  };

  const appLinkMetaTags = generateAppLinkMetaTags(
    "https://www.google.com/?%24tracking_id=57ee5899-989f-483e-b7d3-b73bc831616a",
    {
      og_site_name: "KFC PRUEBA",
      android_package_name: "com.kfcecuador.kfc",
      ios_app_store_id: "1277450431"
    }
  );

  console.log(appLinkMetaTags)

  const loaderHtml = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      
      <!-- Open Graph Meta Tags -->
      <meta property="og:type" content="website">
      <meta property="og:title" content="${title}">
      <meta property="og:description" content="${description}">
      <meta property="og:image" content="${image}">
      <meta property="og:image:width" content="1280">
      <meta property="og:image:height" content="720">
      <meta property="og:image:type" content="image/jpeg">
      <meta property="og:site_name" content="Platzi">
      <meta property="og:locale" content="es_ES">
      
      <!-- Twitter Card Meta Tags -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="${title}">
      <meta name="twitter:description" content="${description}">
      <meta name="twitter:image" content="${image}">
      <meta name="twitter:image:alt" content="${title}">
      
      <!-- Standard Meta Tags -->
      <meta name="description" content="${description}">
      <meta name="keywords" content="Next.js, React, JavaScript, Frontend, Framework, Tutorial, Programación">
      <meta name="author" content="Platzi">
     
      ${appLinkMetaTags}
     
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
        window.location.href = "https://github.com/Trade-EC/masivo";
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
