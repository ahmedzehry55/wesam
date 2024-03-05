import { Layout } from "@/layout/Layout";
import React from "react";
import { socnav1, worldHotel } from "@/constants/constants";
import Pagescomponent from "@/components/pagesComponent/Main";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import SocNavbar from "@/components/pagesComponent/socNavbar/SocNavbar";
const breadcrumb1 = [
  {
    breadcrumbs: [
      { label: "الرئيسية", path: "/" },
      { label: "البرامج السياحية", path: "/packages" },
      { label: "باقات باسعار", path: "/packages/pricePakages" },
      // Add more breadcrumbs as needed
    ],
  },
];
function Hotel() {
  return (
    <Layout menuDis='none'>
      <BreadcrumbList
        breadcrumbsArrayname={breadcrumb1}
        btnTitle="العودة للباقات"
        // btnRef="/packages"
      />
      <SocNavbar arrName={socnav1} />

      <Pagescomponent
        textAlignProp="center"
        arryName={worldHotel}
        currntpath="cruise"
        title="أفضل الرحلات البحرية "
        span="هل تبحث عن رحلة بحرية لا مثيل لها حول العالم؟ سواءً كنت ترغب بتجربة في غاية الفخامة أو بتكلفة معقولة، صممنا لك باقات متعددة بمرافق عالمية المستوى تناسب متطلباتك. والتي تتميّز بالضيافة العالمية والمرافق الترفيهية والمطاعم الرائعة. عندما ترسو الرحلات البحرية في مدن الموانئ المختلفة، ستتاح لك الفرصة للانطلاق واستكشاف وجهة جديدة! احصل على أفضل ما في البر والبحر عندما تحجز معنا!        "
      />
    </Layout>
  );
}

export default Hotel;
