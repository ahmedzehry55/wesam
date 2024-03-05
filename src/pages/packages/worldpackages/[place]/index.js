import Pagescomponent from "@/components/pagesComponent/Main";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import SocNavbar2 from '@/components/pagesComponent/socNavbar2/SocNavbar2'
import ProgramCard2 from "@/components/pro2/ProgramCard2";
import { countrys, socnav2, worldHotel } from "@/constants/constants";
import { Layout } from "@/layout/Layout";
import { useRef } from "react";

const SinglePage = ({ object }) => {
  const packagesArray = countrys[0].nav[0].packages;
  console.log(object)
  const breadcrumb1 = [
    {
      breadcrumbs: [
        { label: "الرئيسية", path: "/" },
        { label: "البرامج السياحية", path: "/packages" },
        { label: "باقات دولية", path: "/packages/worldpackages" },
        { label: `${object.title}`, path: `/packages/worldpackages/${object.id}` },
      ],
    },
  ];
  return (
    <Layout menuDis='none' bgcolor='#e9f6f8' btnTitlea="العودة للباقات">
      <BreadcrumbList
        breadcrumbsArrayname={breadcrumb1}
        btnTitle="العودة"
      />
      <SocNavbar2 />
      {/* <div style={{ justifySelf: "flex-start" }}></div>
    <SocNavbar2 arrName={socnav2(object.id)}  />
    <ProgramCard2 ArrayName={packagesArray}/> */}

      {/* <Pagescomponent arryName={packagesArray}/> */}
    </Layout>
  );
};

export async function getStaticPaths() {
  const countryIds = countrys[0].nav.map((country) => country.id);
  const paths = countryIds.map((id) => ({
    params: { place: id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const country = countrys[0].nav.find((country) => country.id === parseInt(params.place));
  const object = { ...country };
 
  return { props: { object } };
}



export default SinglePage;
