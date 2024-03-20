import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import SocNavbar2 from "@/components/pagesComponent/socNavbar2/SocNavbar2";
import { countrys } from "@/constants/constants";
import { Layout } from "@/layout/Layout";

const SinglePage = ({ object }) => {
  const breadcrumb1 = [
    {
      breadcrumbs: [
        { label: "الرئيسية", path: "/" },
        { label: "البرامج السياحية", path: "/packages" },
        { label: "باقات دولية", path: "/packages/worldpackages" },
        {
          label: `${object.title}`,
          path: `/packages/worldpackages/${object.id}`,
        },
      ],
    },
  ];
  return (
    <Layout menuDis="none" btnTitlea="العودة للباقات">
      <BreadcrumbList breadcrumbsArrayname={breadcrumb1} btnTitle="العودة" />
      <SocNavbar2 />
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
  const country = countrys[0].nav.find(
    (country) => country.id === parseInt(params.place)
  );
  const object = { ...country };

  return { props: { object } };
}

export default SinglePage;
