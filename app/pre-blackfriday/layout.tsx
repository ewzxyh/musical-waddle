// app/layout.js ou app/layout.tsx

import { ReactNode } from 'react';
import type { Metadata } from 'next'

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Outlet',
  description: 'Redirecionamento', 
  icons:"/logo2.png",
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <title>Outlet</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
