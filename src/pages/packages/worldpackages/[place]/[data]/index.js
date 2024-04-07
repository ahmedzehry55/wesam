import Hero from "../../../../about/AboutComponet/Hero";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import { datasoc, programs, socnavData } from "@/constants/constants";
import { Layout } from "@/layout/Layout";
import { Includes, City } from "@/constants/countryConstants";
import PackageCard, { PopUpImage } from "@/components/packageCard/packageCard";
import { FaWhatsapp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Accordion from "@/components/accordion/Accordion";
import { ButtonBread } from "@/components/pagesComponent/breadList/ButtonBread";
import SocNavbar from "@/components/pagesComponent/socNavbar/SocNavbar";
import Link from "next/link";
import ImageModal from "@/components/Imagepop/ImgPop";
import PopupGfg from "@/components/Imagepop/ImgPop";

const SinglePage = ({ object }) => {



  const programIds = programs.map((program) => ({
    id: program.id,
    data: program.place_id,
  }));

  const breadcrumb1 = [
    {
      breadcrumbs: [
        { label: "الرئيسية", path: "/" },
        { label: "البرامج السياحية", path: "/packages" },
        { label: "باقات دولية", path: "/packages/worldpackages" },
        {
          label: `${object.country}`,
          path: `/packages/worldpackages/${object.country}`,
        },
        {
          label: `${object.name}`,
          path: `/packages/worldpackages/${object.country}/${object.name}`,
        },
      ],
    },
  ];
  const city = object.cites;
  const [selectedCity, setSelectedCity] = useState(city[0].name);
  return (
    <Layout menuDis="none" bgcolor="#fafafa" btnTitlea="العودة للباقات">
      <div className="program_container_hero_container  ">
        <Hero imag={object.image} />
        <h2 className="program_container_hero_container_h2">{object.name}</h2>
      </div>
      <div className="program_data_container_socnav section_margin">
        <SocNavbar arrName={datasoc} scrolvh={65} />
      </div>
      <div className="program_container section_margin">
        <div className="program_data_container">
          <div>
            {programIds.map((program) => (
              <Link href={`/packages/worldpackages/${program.data}`}>
                <ButtonBread title="العودة الى البرامج" />
              </Link>
            ))}
          </div>

          <BreadcrumbList
            breadcrumbsArrayname={breadcrumb1}
            btnTitle="العودة"
            padT="0"
            f_s="12px"
          />
          <div className="program_data_container2">
            <div className="program_data_container_p">
              <p>{object.para}</p>
            </div>
            <div className="program_data_container_card" id="dataCard">
              <PackageCard
                compTitle=" وجهات يمكنك زيارتها"
                arryName={object.cites}
                sliderName="germenCity"
                widthCard="22.1vw"
                hCard="250px"
              
              />
            </div>
          
            <div className="program_data_container_Itinerary">
              <h3 style={{ padding: "3vw 0 5vw" }} id="roadmap">
                خط سير الرحلة{" "}
              </h3>
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
                  city.map((nav, index) => (
                    <div
                      key={nav.id}
                      id={nav.name}
                      className={`program_data_container_Itinerary_ul ${
                        selectedCity === nav.name ? "activecityul" : ""
                      }`}
                    >
                      <Accordion arrayName={object} navId={index} />
                      <div style={{ padding: "5vw 0" }}>
                        <h2
                          style={{ padding: "0vw 0 5vw" }}
                          className="Includes__h2 "
                        >
                          الباقه تشمل :
                        </h2>
                        <Accordion arrayName={Includes} navId={0} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="program_form_container" id="dataForm">
          <div className="program_form_container_textSec">
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
          </div>
          <span>او</span>
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
  const data = await fetch("http://localhost:4000/api/aprogrammes")
  .then((res) => res.json())
  .then((data) => data.data);

  const programIds = data.map((program) => ({
    id: program.name,
    data: program.country,
  }));
  const paths = programIds.map((program) => ({
    params: { place: program.data, data: program.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await fetch("http://localhost:4000/api/aprogrammes")
  .then((res) => res.json())
  .then((data) => data.data);

  const program = data.find(
    (program) => program.name === params.data
  );
  const object = { ...program };

  return { props: { object } };
}

export default SinglePage;
