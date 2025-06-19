import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const title = "¿Qué es Nextjs y Como Aprenderlo?";
  const description = "Nextjs actualmente es uno de los Frameworks Frontend mas populares para crear aplicaciones web, y de hecho no solo aplicaciones web Frontend sino incluso apl...";
  const image = `https://i.ytimg.com/vi/tVBb79WLScc/maxresdefault.jpg`;

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
