import Head from "next/head";
import { Layout } from "@/layout/Layout";
import Navbar from "@/components/NavBar/Navbar";
import ACard from "@/components/ACard/ACard";
import { cityGuides, offers, offersarray, programs, tourList, worldHotel } from "@/constants/constants";
import BCard from "@/components/BCard/BCard";
import FlipContainer from "@/components/FlipContainer/FlipContainer";
import ProgramCard2 from "@/components/pro2/ProgramCard2";
import Hero from "@/components/Hero/Hero";
import Cta from "@/components/Cta/Cta";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wesam Elnagah</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout headerheight="277px" headerbg="#e9f6f8">
        <Hero />
        <Navbar />
        <Cta/>
        <ACard
          arryName={offersarray}
          compTitle="عروض مميزة منّا لك"
          sliderName="offerSlider"
          titleBtns='عرض المزيد'
          titleBtnsLink="offers"
        />
        <BCard
          arryName={worldHotel}
          compTitle="أفضل الفنادق الداخلية"
          compspan="ابحث عن الفنادق التي تناسب تطلعاتك داخل السعودية"
          sliderName="worldHotelSlider"
          titleBtnsheader='عرض المزيد'
          titleBtnsLink="hotel"
        />
        <BCard
          arryName={cityGuides}
          compTitle="أفضل الفنادق العالمية"
          compspan="ابحث عن أفضل الفنادق في أشهر الوجهات"
          sliderName="worldHotelSlider2"
          titleBtnsheader='عرض المزيد'
          titleBtnsLink="hotel"
        />
        <BCard
          arryName={cityGuides}
          compTitle="دليلك لأشهر الوجهات السياحية العالمية"
          sliderName="travelSlider"
          titleBtnsheader='عرض المزيد'
          titleBtnsLink="city-guides"        />
        <ACard
          arryName={tourList}
          compTitle="اكتشف اجمل الجولات السياحية "
          sliderName="TheBestSlider"
          titleBtns='عرض المزيد'
          titleBtnsLink="tours"
        />
        <FlipContainer />
        <ProgramCard2 ArrayName={programs} i={3} page_title='احدث البرامج السياحية' />

      </Layout>
    </>
  );
}
