import { Layout } from "@/layout/Layout";
import React, { useEffect, useState } from "react";
import { countrys, pricePackages, socnav1,worldHotel} from "@/constants/constants";
import Pagescomponent from "@/components/pagesComponent/Main";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import SocNavbar from "@/components/pagesComponent/socNavbar/SocNavbar";
const breadcrumb1 = [
  {
    breadcrumbs: [
      { label: "الرئيسية", path: "/" },
      { label: "البرامج السياحية", path: "/packages" },
      { label: "باقات باسعار", path: "/packages/worldpackages" },
      // Add more breadcrumbs as needed
    ],
  },
];
function Hotel() {
  const [data, setData] = useState([]);
  const [metadata, setmetaData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/priceprogrammes")
      .then((res) => res.json())
      .then((data) => {
        
        setData(data.data);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:4000/api/metapage")
      .then((res) => res.json())
      .then((metadata) => {
        const filteredData = metadata.data.filter((obj) => obj.pagetitle === "باقات باسعار");
        setmetaData(filteredData);
      });
  }, []);
  return (
    <Layout menuDis='none' bgcolor='#ededed'>
      <BreadcrumbList
        breadcrumbsArrayname={breadcrumb1}
      />
      <SocNavbar arrName={socnav1} scrolvh={10} />

      <Pagescomponent
        textAlignProp="center"
        arryName={data}
        cardWidth="23vw"
        catdHeight='250px'
        textflex='flex-start'
        cardText='flex-start'
        currntpath="cruise"
        title={metadata.map((item)=>item.title)}
        span="خطط هذا الصيف لاكتشاف أماكن جديدة و التعرّف على ثقافات وحضارات مختلفة في جميع أنحاء العالم. مع باقاتنا المتعددة يمكننا مساعدتك في السفر والاستكشاف من خلال باقات مميزة و قابلة للتخصيص و بميزانية مناسبة. نقدم لك باقات لأفضل الوجهات مثل تركيا والمالديف وتايلاند. احجز الآن واستعد لرحلة تُبهرك . استكشف و احجز الآن."
      />
    </Layout>
  );
}

export default Hotel;
