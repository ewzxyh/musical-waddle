import dynamic from 'next/dynamic';
import PageWrapper from "@/components/Container/PageWrapper";
const Form = dynamic(() => import('@/components/LandingPage/Form'), { ssr: false });
import Banner from "@/components/LandingPage/Banner";

export default function Home() {
  return (
    <PageWrapper>
      <Form />
      <Banner
        desktopImageUrl="/banner.png"
        mobileImageUrl="/banner-mobile.png"
      />
    </PageWrapper>
  );
}
