import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';

export async function middleware(request: NextRequest) {
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/admin/dashboard') || request.nextUrl.pathname.startsWith('/admin/editor');

  if (isDashboardRoute) {
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    const verified = await verifyToken(token);
    if (!verified) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  // Redirect authenticated users away from the login page
  if (request.nextUrl.pathname === '/admin') {
    const token = request.cookies.get('admin_token')?.value;
    if (token) {
      const verified = await verifyToken(token);
      if (verified) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
