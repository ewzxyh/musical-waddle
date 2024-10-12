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
import Script from "next/script";
import ProtectImages from '@/components/LandingPage/ProtectImages';
import Card from '@/components/LandingPage/Button';

// Extend the Window interface
declare global {
  interface Window {
    dataLayer?: any[];
    ga?: any;
  }
}

export default function Home() {

  return (
    <PageWrapper>
      {/* Load analytics.js */}
      <Script
        async
        src="https://www.google-analytics.com/analytics.js"
        strategy="beforeInteractive"
      />
      {/* Initialize analytics.js and enable the linker plugin */}
      <Script id="analytics-init" strategy="afterInteractive">
        {`
          ga('create', 'AW-16736130586', 'auto');
          ga('require', 'linker');
          ga('linker:autoLink', ['outletbabys.com', 'pre-blackfriday.outletbabys.com']);
        `}
      </Script>
      {/* Load gtag.js */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16736130586"
        strategy="afterInteractive"
      />
      {/* Configure gtag.js */}
      <Script id="gtag-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16736130586', {
            'linker': {
              'domains': ['outletbabys.com', 'pre-blackfriday.outletbabys.com']
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
      <Card></Card>
      <Banner6
        desktopImageUrl="/banner6.png"
        mobileImageUrl="/banner6-mobile.png"
      />
    </PageWrapper>
  );
}
