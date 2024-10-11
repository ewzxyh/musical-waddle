// app/layout.js ou app/layout.tsx

import { ReactNode } from 'react';
import type { Metadata } from 'next'

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Outlet Babys',
  description: 'Redirecionamento Outlet', 
  icons:"/logo.png",
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <title>Outlet Babys</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
