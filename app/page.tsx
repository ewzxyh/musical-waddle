import dynamic from 'next/dynamic';
import PageWrapper from "@/components/Container/PageWrapper";
const Form = dynamic(() => import('@/components/LandingPage/Form'), { ssr: false });
import Banner from "@/components/LandingPage/Banner";
import Script from "next/script";

export default function Home() {
  return (
    <PageWrapper>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-976063044"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-976063044');
        `}
      </Script>
      <Form />
      <Banner
        desktopImageUrl="/banner.png"
        mobileImageUrl="/banner-mobile.png"
      />
    </PageWrapper>
  );
}
