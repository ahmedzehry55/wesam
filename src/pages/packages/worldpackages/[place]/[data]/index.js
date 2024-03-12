import Hero from "../../../../about/AboutComponet/Hero";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import { programs, socnavData } from "@/constants/constants";
import { Layout } from "@/layout/Layout";
import { Includes, City } from "@/constants/countryConstants";
import PackageCard from "@/components/packageCard/packageCard";
import { FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";
import Accordion from "@/components/accordion/Accordion";

const SinglePage = ({ object }) => {
  const breadcrumb1 = [
    {
      breadcrumbs: [
        { label: "الرئيسية", path: "/" },
        { label: "البرامج السياحية", path: "/packages" },
        { label: "باقات دولية", path: "/packages/worldpackages" },
        {
          label: `المانيا`,
          path: `/packages/worldpackages/1`,
        },
        {
          label: `بوكيت عرض لشخصين`,
          path: `/packages/worldpackages/1/1`,
        },
      ],
    },
  ];
  const city = City[0].nav;
  const [selectedCity, setSelectedCity] = useState(city[0].name);
  return (
    <Layout menuDis="none" bgcolor="#fafafa" btnTitlea="العودة للباقات">
      <div className="program_container_hero_container">
        <Hero imag={City[0].image} />
        <h2 className="program_container_hero_container_h2">{City[0].title}</h2>
      </div>
      <div className="program_container">
        <div className="program_data_container">
          {/* <div className="socnavbe_data">
          <SocNavbar2 arrName={socnavData} />
          </div> */}
          <BreadcrumbList
            breadcrumbsArrayname={breadcrumb1}
            btnTitle="العودة"
            padT="0"
            f_s="12px"
          />
          <div className="program_data_container2">
            <div className="program_data_container_p">
              <p>{City[0].para}</p>
            </div>
            <div className="program_data_container_card" id="dataCard">
              <PackageCard
                compTitle=" وجهات يمكنك زيارتها"
                arryName={City}
                sliderName="germenCity"
                widthCard="41vw"
                hCard="250px"
              />
            </div>

            <div className="program_data_container_Itinerary">
              <h3 style={{ paddingBottom: "3vw" }}>خط سير الرحلة </h3>
              <ul className="accordion_navTitle" id="acrd">
                {city.map((nav) => (
                  <div
                    key={nav.id}
                    onClick={() => setSelectedCity(nav.name)}
                    className={`${
                      selectedCity === nav.name ? "activecity" : ""
                    } accordion_navTitleli `}
                  >
                    {nav.name}
                  </div>
                ))}
              </ul>
              <div className="program_data_container_Itinerary_container">
                {selectedCity &&
                  city.map((nav) => (
                    <div
                      key={nav.id}
                      id={nav.name}
                      className={`program_data_container_Itinerary_ul ${
                        selectedCity === nav.name ? "activecityul" : ""
                      }`}
                    >
                      <Accordion arrayName={City} navId={nav.id} />
                      <div>
                        <h2 className="Includes__h2 ">الباقه تشمل :</h2>
                        <Accordion arrayName={Includes} navId={0} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="program_form_container" id="dataForm">
          <div>
            <h4>خطّط عطلتك كيفما شئت!</h4>
            <p>
              لقضاء عطلة استثنائية، يرجى التواصل معنا عن طريق الوتساب أو إدخال
              بياناتك، ليقوم أحد مستشاري السفر بالتواصل معك لمساعدتك في تخطيط
              عطلتك الخاصة!
            </p>
            <button>
              {" "}
              <div style={{ fontSize: "25px" }}>
                <FaWhatsapp />
              </div>{" "}
              تواصل معنا عن طريق الوتساب
            </button>
            <span>او</span>
          </div>
          <form className="program_form_container_form">
            <h5>المعلومات الشخصية</h5>
            <div>
              <label> الاسم الأول</label>
              <input></input>
            </div>
            <div>
              <label>بريدك الإلكتروني</label>
              <input type="email"></input>
            </div>
            <div>
              <label>رقم جوالك</label>
              <input type="number"></input>
            </div>
            <div>
              <label>عدد الأشخاص</label>
              <input type="number"></input>
            </div>
            <div>
              <label>تواريخ السفر</label>
              <input type="date"></input>
            </div>
            <button type="submit"> يرجى التواصل معي </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const programIds = programs.map((program) => ({
    id: program.id,
    data: program.place_id,
  }));
  const paths = programIds.map((program) => ({
    params: { place: program.data.toString(), data: program.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const program = programs.find(
    (program) => program.id.toString() === params.place
  );
  const object = { ...program };

  return { props: { object } };
}

export default SinglePage;
