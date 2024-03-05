import { Layout } from "@/layout/Layout";
import React from "react";
import Pagescomponent from "@/components/pagesComponent/Main";
import { cityGuides } from "@/constants/constants";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
const breadcrumb1 = [
  {
    breadcrumbs: [
      { label: "الرئيسية", path: "/" },
      { label: "الجولات السياحية", path: "/tours" },
      // Add more breadcrumbs as needed
    ],
  },
];
function Tours() {
  return (
    <Layout menuDis='none'>
      <BreadcrumbList
        breadcrumbsArrayname={breadcrumb1}
        btnTitle="العودة"
        // btnRef="/"
      />
      <Pagescomponent
        arryName={cityGuides}
        currntpath="city-guides"
        title="الجولات السياحية"
        span="اكتشف معنا أروع وجهات السفر"
      />
    </Layout>
  );
}

export default Tours;
