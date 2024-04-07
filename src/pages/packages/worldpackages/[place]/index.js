import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import SocNavbar2 from "@/components/pagesComponent/socNavbar2/SocNavbar2";
import { countrys } from "@/constants/constants";
import { Layout } from "@/layout/Layout";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const SinglePage = ({ object }) => {
  const router = useRouter();
  const { place } = router.query;
  // console.log(place)



  const breadcrumb1 = [
    {
      breadcrumbs: [
        { label: "الرئيسية", path: "/" },
        { label: "البرامج السياحية", path: "/packages" },
        { label: "باقات دولية", path: "/packages/worldpackages" },
        {
          label: `${place}`,
          path: `/packages/worldpackages/${place}`,
        },
      ],
    },
  ];

  return (
    <Layout menuDis="none" btnTitlea="العودة للباقات">
      <BreadcrumbList breadcrumbsArrayname={breadcrumb1} />
      <SocNavbar2  country={place}/>
 
    </Layout>
  );
};

export async function getStaticPaths() {
  
  const data = await fetch("http://localhost:4000/api/routespage")
    .then((res) => res.json())
    .then((data) => data.data);

  const countryIds = data.map((country) => country.name);
  const paths = countryIds.map((id) => ({
    params: { place: id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await fetch("http://localhost:4000/api/routespage")
    .then((res) => res.json())
    .then((data) => data.data);
  const country = data.find(
    (country) => country.country === parseInt(params.place)
  );
  const object = { ...country };

  return { props: { object } };
}


export default SinglePage;
