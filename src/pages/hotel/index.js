import { Layout } from "@/layout/Layout";
import React from "react";
import { worldHotel } from "@/constants/constants";
import Pagescomponent from "@/components/pagesComponent/Main";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
const breadcrumb1 =  [{
  breadcrumbs:[ 
    { label: "الرئيسية", path: "/" },
    { label: "فنادق", path: "/hotel" },
    // Add more breadcrumbs as needed
]}]
function Hotel() {
  return (
    <Layout menuDis='none'>
       <BreadcrumbList breadcrumbsArrayname={breadcrumb1}  btnTitle="العودة"
        // btnRef="/"
        />
      <Pagescomponent
      textAlignProp="center"
        arryName={worldHotel}
        currntpath='hotel'
        title="أفضل الفنادق العالمية"
        span="ابحث عن أفضل الفنادق في أشهر الوجهات"
      />
    </Layout>
  );
}

export default Hotel;
