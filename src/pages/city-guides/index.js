import { Layout } from "@/layout/Layout";
import React from "react";
import Pagescomponent from "@/components/pagesComponent/Main";
import { cityGuides, } from "@/constants/constants";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
function CityGuides() {
  return (
    <Layout menuDis='none'>
      <BreadcrumbList breadcrumbsArrayname={cityGuides} />
      <Pagescomponent
        arryName={cityGuides}
        currntpath='city-guides'
        title="دليلك السياحي"
        span="اكتشف معنا أروع وجهات السفر"
      />
    </Layout>
  );
}

export default CityGuides;
