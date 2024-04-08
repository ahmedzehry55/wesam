import { Layout } from "@/layout/Layout";
import React, { useEffect, useState } from "react";
import Pagescomponent from "@/components/pagesComponent/Main";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
const breadcrumb1 = [
  {
    breadcrumbs: [
      { label: "الرئيسية", path: "/" },
      { label: "فنادق", path: "/hotel" },
      // Add more breadcrumbs as needed
    ],
  },
];
function Hotel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/hotels")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);
  return (
    <Layout menuDis="none">
      <BreadcrumbList
        breadcrumbsArrayname={breadcrumb1}
        btnTitle="العودة"
        // btnRef="/"
      />
      <Pagescomponent
        textAlignProp="center"
        arryName={data}
        currntpath="hotel"
        title="أفضل الفنادق العالمية"
        span="ابحث عن أفضل الفنادق في أشهر الوجهات"
      />
    </Layout>
  );
}

export default Hotel;
