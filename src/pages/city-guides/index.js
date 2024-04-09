import { Layout } from "@/layout/Layout";
import React from "react";
import Pagescomponent from "@/components/pagesComponent/Main";
import { cityGuides } from "@/constants/constants";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import Link from "next/link";
import { ButtonBread2 } from "@/components/pagesComponent/breadList/ButtonBread2";
export default function CityGuides() {
  return (
    <Layout menuDis="none">
      <div style={{display:"block" , width:"100%" ,position:"relative"}}>
        <Link href={`/`}>
          <ButtonBread2 title="الصفحة الرئيسية" />
        </Link>
      </div>
      <BreadcrumbList breadcrumbsArrayname={cityGuides} />
      
    <div style={{width:"100%" , marginTop:"44px"}}>
    <Pagescomponent
        arryName={cityGuides[0].nav}
        currntpath="city-guides"
        title="دليلك السياحي"
        span="اكتشف معنا أروع وجهات السفر"
      />
    </div>
    </Layout>
  );
}
