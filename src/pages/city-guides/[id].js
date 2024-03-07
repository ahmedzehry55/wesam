import ACard from "@/components/ACard/ACard";
import BCard from "@/components/BCard/BCard";
import Hero from "@/components/Hero/Hero";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import { cityGuides, offers, worldHotel } from "@/constants/constants";
import { Layout } from "@/layout/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import flytimer from "../../../public/icons/flytimer.png"
import calendar from "../../../public/icons/calendar.png"
import user from "../../../public/icons/user.png"
const navarray = cityGuides[0].nav;
const SinglePage = ({ object }) => {
  const breadcrumb1 = [
    {
      breadcrumbs: [
        { label: "الرئيسية", path: "/" },
        { label: "البرامج السياحية", path: "/packages" },
        { label: "دليلك السياحي", path: "/city-guides" },
        { label: `${object.title}`, path: `/city-guides/${object.id}` },
      ],
    },
  ];
  return (
    <Layout bgcolor="white">
      <div className="guide_hero_container">
        <Hero />
        <h2>{object.title}</h2>
        <span>{object.desc}</span>
      </div>
      <div className="guide_container">
        <BreadcrumbList
          padT="0"
          breadcrumbsArrayname={breadcrumb1}
          btnTitle="العودة"
        />
       <div className="guide_container_p"> <p >
          بفضل الهندسة المعمارية الحديثة، خيارات الطعام المتعددة بمستوياتها
          العالمية، الشواطئ الخلابة، المراكز الثقافية، الأنشطة الترفيهية، ووجهات
          التسوق التي لا تنتهي، دبي بالتأكيد تستحق زيارتك. إمارة مليئة
          بالمغامرات الممتعة والمعالم العالمية الفريدة من نوعها. كما تضم الإمارة
          العديد من أماكن الجذب السياحي والأنشطة الشيقة. من المؤكد أن زيارتك إلى
          دبي ستنقلك إلى مستوى آخر من متعة الترفيه!
        </p></div>
        <div className="guide_container_icons_div">
          <div className="guide_container_itemdiv">
            <figure><Image sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" src={calendar} fill alt="img"/></figure>
            <span>أفضل الأوقات للزيارة</span>
          </div>
          <div className="guide_container_itemdiv">
            <figure><Image sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" src={user} fill alt="img"/></figure>
            <span>الوثائق المطلوبة للتأشيرة</span>
          </div>
          <div className="guide_container_itemdiv">
            <figure><Image sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" src={flytimer} fill alt="img"/></figure>
            <span>مدة الرحلة</span>
          </div>
        </div>
        <BCard
          arryName={worldHotel}
          compTitle="دليلك لأشهر الوجهات السياحية العالمية"
          sliderName="travelSlider"
        />
        <ACard
          arryName={offers}
          compTitle="اكتشف أجمل ما في المملكة العربية السعودية"
          sliderName="TheBestSlider"
        />
        <BCard
          arryName={worldHotel}
          compTitle="دليلك لأشهر الوجهات السياحية العالمية"
          sliderName="travelSlider"
        />
        <BCard
          arryName={worldHotel}
          compTitle="دليلك لأشهر الوجهات السياحية العالمية"
          sliderName="travelSlider"
        />
        <ACard
          arryName={offers}
          compTitle="اكتشف أجمل ما في المملكة العربية السعودية"
          sliderName="TheBestSlider"
        />
        <div className="guide_container_button">
          <span>هل تبحث عن رحلات إلى دبي؟</span>
          <button>بحث عن رحلات</button>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = navarray.map((object) => ({
    params: { id: object.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const object = navarray.find((object) => object.id.toString() === params.id);

  return { props: { object } };
}

export default SinglePage;
