
import Hero from "../../about/AboutComponet/Hero";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import {
  datasoc,
} from "@/constants/constants";
import { Layout } from "@/layout/Layout";
import {
  cruiseIncludes,
  cruiseterms,
} from "@/constants/countryConstants";
import PackageCard from "@/components/packageCard2/packageCard";
import { FaWhatsapp } from "react-icons/fa6";
import Accordion from "@/components/accordion2/Accordion";
import { ButtonBread } from "@/components/pagesComponent/breadList/ButtonBread";
import SocNavbar from "@/components/pagesComponent/socNavbar/SocNavbar";
import Link from "next/link";


const SinglePage = ({ object }) => {
  const breadcrumb1 = [
    {
      breadcrumbs: [
        { label: "الرئيسية", path: "/" },
        { label: "البرامج السياحية", path: "/packages" },
        { label: "باقات  باسعار", path: "/packages/pricePakages" },

        {
          label: object.name,
          path: `/packages/pricePakages/${object.name}`,
        },
      ],
    },
  ];
  return (
    <Layout menuDis="none" bgcolor="#fafafa" btnTitlea="العودة للباقات">
      <div className="program_container_hero_container  ">
        <Hero imag={object.image} />
        <h2 className="program_container_hero_container_h2">
          {object.title}
        </h2>
      </div>
      <div className="program_data_container_socnav section_margin">
        <SocNavbar arrName={datasoc} scrolvh={65} />
      </div>
      <div className="program_container section_margin">
        <div className="program_data_container">
          <Link href="/packages/cruise">
            <ButtonBread title="العودة الى البرامج" />
          </Link>

          <BreadcrumbList
            breadcrumbsArrayname={breadcrumb1}
            btnTitle="العودة"
            padT="0"
            f_s="12px"
          />
          <div className="program_data_container2">
            <div className="program_data_container_p">
              <p>
                {object.pargrahp} <br /> <br /> <br /> <br />{" "}
              </p>
            </div>
            <div className="program_data_container_card" id="dataCard">
              <PackageCard
                compTitle="خيارات الغرف "
                arryName={object.packages}
                sliderName="germensinglecruise"
                widthCard="22.1vw"
                hCard="250px"
              />
            </div>

            <div className="program_data_container_Itinerary2">
              <h3 style={{ padding: "3vw 0 5vw" }} id="roadmap">
                خط سير الرحلة{" "}
              </h3>

              <div className="program_data_container_Itinerary_container">
                <div className={`program_data_container_Itinerary_ul2`}>
                  <Accordion arrayName={object.days} />
                  <div style={{ padding: "5vw 0 .2vw" }}>
                    <h2
                      style={{ padding: "0vw 16px 5vw" }}
                      className="cruiseIncludes__h2 "
                    >
                      الباقه تشمل :
                    </h2>
                    <Accordion arrayName={cruiseIncludes.days} navId={0} />
                    <div className="program_data_PRICEpACKAGE">
                      <span>
                      احصل على باقة بسعر ثابت لشخص واحد في غرفة مزدوجة
                      </span>
                      <h2 style={{color:"#333333" , fontSize:"18px", fontWeight:"900"}}>{object.desc}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="program_data_container_terms">
              <h3 className="program_data_container_terms_h3">
                الشروط والاحكام
              </h3>
              <ul className="program_data_container_terms_ul">
                {cruiseterms.map((item, index) => (
                  <li key={index} className="program_data_container_terms_li">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
  const data = await fetch("http://wesamelnagah.com:4000/api/priceprogrammes")
  .then((res) => res.json())
  .then((data) => data.data);

console.log(data); // Print the fetched data

  const paths = data.map((object) => ({
    params: { id: object.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  
  const data = await fetch("http://wesamelnagah.com:4000/api/priceprogrammes")
    .then((res) => res.json())
    .then((data) => data.data);

  console.log(data); // Print the fetched data

  const object = data.find((object) => object.name === params.id);

  return { props: { object } };
}

export default SinglePage;
