"use client";
import dynamic from 'next/dynamic';
import PageWrapper from "@/components/Container/PageWrapper";
const Form = dynamic(() => import('@/components/LandingPage/Form'), { ssr: false });
import Banner from "@/components/LandingPage/Banner";
import Banner2 from "@/components/LandingPage/Banner2";
import Banner3 from "@/components/LandingPage/Banner3";
import Banner4 from "@/components/LandingPage/Banner4";
import Banner5 from "@/components/LandingPage/Banner5";
import Banner6 from '@/components/LandingPage/Banner6';
import Banner7 from '@/components/LandingPage/Banner7';
import Banner8 from '@/components/LandingPage/Banner8';
import Banner9 from '@/components/LandingPage/Banner9';
import Banner10 from '@/components/LandingPage/Banner10';
import Script from "next/script";
import ProtectImages from '@/components/LandingPage/ProtectImages';
import { useEffect } from 'react';
import Card from '@/components/LandingPage/Button';

export default function Home() {
  useEffect(() => {
    const handleContextMenu = (e: { preventDefault: () => void }) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: { ctrlKey: any; key: string; preventDefault: () => void }) => {
      if (e.ctrlKey && (e.key === 'c' || e.key === 's' || e.key === 'u')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <PageWrapper>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16733205759"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16733205759', {
            'linker': {
              'domains': ['linhasuper2.com', 'pre-blackfriday.linhasuper2.com']
            }
          });
        `}
      </Script>
      <Form />
      <ProtectImages />
      <Banner
        desktopImageUrl="/banner.png"
        mobileImageUrl="/banner-mobile.png"
      />
      <Banner2
        desktopImageUrl="/banner2.png"
        mobileImageUrl="/banner2-mobile.png"
      />
      <Banner3
        desktopImageUrl="/banner3.png"
        mobileImageUrl="/banner3-mobile.png"
      />
      <Banner4
        desktopImageUrl="/banner4.png"
        mobileImageUrl="/banner4-mobile.png"
      />
      <Banner5
        desktopImageUrl="/banner5.png"
        mobileImageUrl="/banner5-mobile.png"
      />
      <Banner6
        desktopImageUrl="/banner6.png"
        mobileImageUrl="/banner6-mobile.png"
      />
      <Card></Card>
      <Banner7
        desktopImageUrl="/banner7.png"
        mobileImageUrl="/banner7-mobile.png"
      />
      <Banner8
        desktopImageUrl="/banner8.png"
        mobileImageUrl="/banner8-mobile.png"
      />
      <Banner9
        desktopImageUrl="/banner9.png"
        mobileImageUrl="/banner9-mobile.png"
      />
      <Banner10
        desktopImageUrl="/banner10.png"
        mobileImageUrl="/banner10-mobile.png"
      />
    </PageWrapper>
  );
}
