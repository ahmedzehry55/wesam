import ACard from "@/components/ACard/ACard";
import BCard from "@/components/BCard/BCard";
import Hero from "@/pages/about/AboutComponet/Hero";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import { cityGuides, offers, worldHotel } from "@/constants/constants";
import { Layout } from "@/layout/Layout";
import FlipCard from "./component/Fllipcard";
import Link from "next/link";
import { ButtonBread2 } from "@/components/pagesComponent/breadList/ButtonBread2";
const navarray = cityGuides[0].nav;
const SinglePage = ({ object }) => {
  const breadcrumb1 = [
    {
      breadcrumbs: [
        { label: "الرئيسية", path: "/" },
        { label: "البرامج السياحية", path: "/packages" },
        { label: "دليلك السياحي", path: "/city-guides" },
        { label: `${object.name}`, path: `/city-guides/${object.name}` },
      ],
    },
  ];
  return (
    <Layout bgcolor="white" menuDis="none">
      <div className="program_container_hero_container">
        <Hero imag={object.image} />
        <div className="program_container_hero_container_h2">
          <h2 style={{ margin: "16px" }}>{object.title}</h2>
          <span>{object.desc}</span>
        </div>
      </div>
      <div className="guide_container">
        <div>
          <Link href={`/city-guides`}>
            <ButtonBread2 title="دليلنا السياحي " />
          </Link>
        </div>
        <BreadcrumbList
          padT="0"
          breadcrumbsArrayname={breadcrumb1}
          btnTitle="العودة"
        />
        <div className="guide_container_p">
          {" "}
          <p>
            بفضل الهندسة المعمارية الحديثة، خيارات الطعام المتعددة بمستوياتها
            العالمية، الشواطئ الخلابة، المراكز الثقافية، الأنشطة الترفيهية،
            ووجهات التسوق التي لا تنتهي، دبي بالتأكيد تستحق زيارتك. إمارة مليئة
            بالمغامرات الممتعة والمعالم العالمية الفريدة من نوعها. كما تضم
            الإمارة العديد من أماكن الجذب السياحي والأنشطة الشيقة. من المؤكد أن
            زيارتك إلى دبي ستنقلك إلى مستوى آخر من متعة الترفيه!
          </p>
        </div>
        <div>
          <FlipCard arrayName={object.flipgiude} />
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
  const programIds = navarray.map((program) => ({
    id: program.name,
  }));
  const paths = programIds.map((program) => ({
    params: { id: program.id },
  }));

  return { paths, fallback: false };
}


export async function getStaticProps({ params }) {
  const object = navarray.find((object) => object.name === params.id);

  return { props: { object } };
}

export default SinglePage;
