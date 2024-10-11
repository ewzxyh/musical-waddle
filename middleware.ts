import { NextResponse } from 'next/server';

export function middleware(request: { nextUrl: { clone?: any; pathname?: any; }; headers: { get: (arg0: string) => string; }; }) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Ignora rotas internas do Next.js e recursos estáticos
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/static/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/api/')
  ) {
    return NextResponse.next();
  }

  // Verifica se está no subdomínio 'pre-blackfriday' e no caminho raiz
  if (pathname === '/') {
    if (hostname.includes('outletbabys.com')) {
      const [subdomain] = hostname.split('.outletbabys.com');
      if (subdomain === 'pre-blackfriday') {
        const url = request.nextUrl.clone();
        url.pathname = '/pre-blackfriday';
        return NextResponse.rewrite(url);
      }
    } else {
      if (hostname.startsWith('pre-blackfriday.')) {
        const url = request.nextUrl.clone();
        url.pathname = '/pre-blackfriday';
        return NextResponse.rewrite(url);
      }
    }
  }

  return NextResponse.next();
}
