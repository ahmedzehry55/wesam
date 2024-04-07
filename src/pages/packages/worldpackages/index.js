import { Layout } from "@/layout/Layout";
import React, { useEffect, useState } from "react";
import { countrys, socnav1, worldHotel } from "@/constants/constants";
import Pagescomponent from "@/components/pagesComponent/Main";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import SocNavbar from "@/components/pagesComponent/socNavbar/SocNavbar";
const breadcrumb1 = [
  {
    breadcrumbs: [
      { label: "الرئيسية", path: "/" },
      { label: "البرامج السياحية", path: "/packages" },
      { label: "باقات دولية", path: "/packages/worldpackages" },
      // Add more breadcrumbs as needed
    ],
  },
];
function Hotel() {
  const [data, setData] = useState([]);
  const [metadata, setmetaData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/routespage")
      .then((res) => res.json())
      .then((data) => {
        
        setData(data.data);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:4000/api/metapage")
      .then((res) => res.json())
      .then((metadata) => {
        const filteredData = metadata.data.filter((obj) => obj.pagetitle === "باقات دولية");
        setmetaData(filteredData);
      });
  }, []);
  
  console.log(metadata);
  
  return (
    <Layout menuDis="none" bgcolor="#ededed">
      <BreadcrumbList
        breadcrumbsArrayname={breadcrumb1}
        btnTitle="العودة للباقات"
        // btnRef="/packages"
      />
      <SocNavbar arrName={socnav1} scrolvh={10} />

      <Pagescomponent
        textAlignProp="center"
        arryName={data}
        cardWidth="23vw"
        catdHeight="250px"
        textflex="flex-start"
        cardText="flex-start"
        currntpath="cruise"
        title={metadata.map((item)=>item.title)}
        span="هل تبحث عن رحلة بحرية لا مثيل لها حول العالم؟ سواءً كنت ترغب بتجربة في غاية الفخامة أو بتكلفة معقولة، صممنا لك باقات متعددة بمرافق عالمية المستوى تناسب متطلباتك. والتي تتميّز بالضيافة العالمية والمرافق الترفيهية والمطاعم الرائعة. عندما ترسو الرحلات البحرية في مدن الموانئ المختلفة، ستتاح لك الفرصة للانطلاق واستكشاف وجهة جديدة! احصل على أفضل ما في البر والبحر عندما تحجز معنا!        "
      />
    </Layout>
  );
}

export default Hotel;
