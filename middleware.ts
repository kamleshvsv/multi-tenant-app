import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  console.log(`Middleware triggered for hostname: ${hostname}`);
  
  // Get the subdomain from the hostname
  const subdomain = getSubdomain(hostname);
  
  // If it's the main domain (no subdomain), show the landing page
  if (!subdomain) {
    return NextResponse.next();
  }
  
  // If it's a subdomain, rewrite to the tenant app
  if (subdomain && subdomain !== 'www') {
    // Add the tenant to the URL as a header for the app to use
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-tenant', subdomain);
    
    // Rewrite to the tenant app while preserving the original URL
    url.pathname = `/tenant${url.pathname}`;
    
    return NextResponse.rewrite(url, {
      request: {
        headers: requestHeaders,
      },
    });
  }
  
  return NextResponse.next();
}

function getSubdomain(hostname: string): string | null {
  // Remove port if present
  hostname = hostname.split(':')[0];
  
  // Split by dots
  const parts = hostname.split('.');
  
  // If localhost or IP, no subdomain
  if (hostname === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    return null;
  }
  
  // If less than 3 parts, no subdomain (e.g., domain.com)
  if (parts.length < 3) {
    return null;
  }
  
  // Return the first part as subdomain
  return parts[0];
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};