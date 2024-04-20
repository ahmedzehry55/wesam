import { singletourdata } from "@/constants/constants";

import { MdBolt } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { MdCancelPresentation } from "react-icons/md";
import { PiDeviceMobile } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import { IoShareOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Carsoul from "@/components/Carsoul/Carsoul";

// import Map from "@/components/map/Map";

const SinglePage = ({ object }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://wesamelnagah.com:4000/api/tours/660a4c27749ebc54b3d73842`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.toursData[0].sigleTourData);
      });
  }, []);
  console.log(data);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCity, setSelectedCity] = useState("#packgedesc");
  const phoneNumber = "+966545003143";
  const message = "Please help me?";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url);
  };
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 60;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [5]);
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
          label: `${object.title}`,
          path: `/packages/worldpackages/1/1`,
        },
      ],
    },
  ];
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div className="tour_data_container">
      {data.map((tour, index) => (
        <div key={index}>
          <figure className="bgimg">
            <GoArrowRight
              onClick={goBack}
              style={{
                color: "white",
                fontSize: "25px",
                zIndex: "1",
                position: "fixed",
                margin: "16px",
              }}
            />
            {/* <Image fill alt={tour.tourTitle} src={tour.bgImg} /> */}
            <Carsoul images={tour.img} dotbottm="5vw" />
            <IoShareOutline
              style={{
                color: "white",
                fontSize: "25px",
                zIndex: "1",
                position: "fixed",
                margin: "16px",
                left: "0",
              }}
            />
          </figure>
          <div
            className={`tour_data_container_header ${
              scrolled ? "tour_data_container_header_scrolled" : ""
            }`}
          >
            <span>
              {" "}
              <GoArrowRight
                onClick={goBack}
                style={{ color: "5fbccb", fontSize: "25px" }}
              />
            </span>
            <span style={{ fontWeight: "bolder" }}>{tour.tourTitle}</span>
            <span>
              <IoShareOutline style={{ color: "5fbccb", fontSize: "25px" }} />
            </span>
          </div>
          <div className="tour_data_bottom_div">
            <div className="tour_data_bottom_div_uperr">
              <h2 className="tour_data_bottom_div_h2">{tour.tourTitle}</h2>
              <p className="tour_data_bottom_div_p">
                {" "}
                <span className="tour_data_bottom_div_p_span">
                  <MdBolt style={{ color: "orange", fontSize: "24px" }} />{" "}
                </span>{" "}
                حجز فوري{" "}
              </p>
              <div style={{ height: "145px" }}>{/* <Map/> */}</div>
              <span className="tour_data_bottom_div_span">{tour.loc}</span>
              <div className="tour_data_bottom_div_overview_div">
                <h3>لمحة عامة </h3>
                <p>{tour.overview}</p>
              </div>
              <div className="tour_data_bottom_div_advantage_div">
                <h3>المميزات</h3>
                <ul className="tour_data_bottom_div_advantage_div_ul">
                  {tour.advantage.map((adv) => (
                    <li className="tour_data_bottom_div_advantage_div_ul_li">
                      <span>
                        <FaCheck
                          style={{ fontSize: "18px", fontWeight: "lighter" }}
                          color="#000000DE"
                        />
                      </span>
                      <p>{adv}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="tour_data_bottom_div_tour_packages">
              <h3>الباقات المتاحة</h3>
              {tour.tourPackages.map((item) => (
                <div className="tour_data_bottom_div_tour_packages_li">
                  <div className="tour_data_bottom_div_tour_packages_li_titldiv">
                    <h3>{item.packageTitle}</h3>
                    <div className="tour_data_bottom_div_tour_packages_li_titldiv_price">
                      <div>
                        <span style={{ fontSize: "10px", color: "black" }}>
                          من{" "}
                        </span>
                        <span>{item.packagePrice}</span>
                        <span> ر.س </span>
                      </div>
                      <p style={{ fontSize: "10px", color: "#66797f" }}>
                        {"(شاملا ضريبة القيمة المضافة)"}
                      </p>
                    </div>
                  </div>
                  <div className="tour_data_bottom_div_tour_packages_li_featuresdiv">
                    <div className="tour_data_bottom_div_tour_packages_li_featuresdiv_li">
                      {" "}
                      <span>
                        <MdCancelPresentation />
                      </span>
                      <h4>لا يوجد الغاء</h4>
                    </div>
                    <div className="tour_data_bottom_div_tour_packages_li_featuresdiv_li">
                      {" "}
                      <span>
                        <MdBolt style={{ color: "orange", fontSize: "24px" }} />
                      </span>
                      <h4>تاكيد فوري </h4>
                    </div>
                    <div className="tour_data_bottom_div_tour_packages_li_featuresdiv_li">
                      {" "}
                      <span>
                        <PiDeviceMobile />
                      </span>
                      <h4>عرض التذكرة من خلال الجوال او طباعة التذكرة</h4>
                    </div>
                  </div>
                  <div className="tour_data_bottom_div_tour_packages_li_detilesdiv">
                    <ul className="tour_data_bottom_div_tour_packages_li_detilesdiv_socnav">
                      <li
                        id="packgedesc"
                        onClick={() => setSelectedCity("#packgedesc")}
                        className={`data_socnav ${
                          selectedCity === "#packgedesc" ? "activnav" : ""
                        } `}
                      >
                        وصف الباقة
                      </li>
                      <li
                        id="packgereq"
                        onClick={() => setSelectedCity("#packgereq")}
                        className={` data_socnav ${
                          selectedCity === "#packgereq" ? "activnav" : ""
                        }`}
                      >
                        الشروط والاحكام
                      </li>
                      <li
                        id="packgedused"
                        onClick={() => setSelectedCity("#packgedused")}
                        className={` data_socnav ${
                          selectedCity === "#packgedused" ? "activnav" : ""
                        }`}
                      >
                        كيفية الاستخدام
                      </li>
                    </ul>
                    {selectedCity &&
                      item.packgeDescSec.map((obj) => (
                        <div
                          className={`tour_data_bottom_div_tour_packages_li_detilesdiv_detcontainer ${
                            selectedCity === "#packgedesc" ? "aciveArea" : ""
                          }`}
                        >
                          <h3>{obj.header}</h3>
                          {obj.text.map((textobj) => (
                            <div className="tour_data_bottom_div_tour_packages_li_featuresdiv_li">
                              <span>
                                <FaCheck style={{ fontSize: "18px" }} />
                              </span>
                              <span>{textobj}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    {selectedCity &&
                      item.packageused.map((obj) => (
                        <div
                          className={`tour_data_bottom_div_tour_packages_li_detilesdiv_detcontainer ${
                            selectedCity === "#packgedused" ? "aciveArea" : ""
                          }`}
                        >
                          <h3>{obj.header}</h3>
                          {obj.text.map((textobj) => (
                            <div className="tour_data_bottom_div_tour_packages_li_featuresdiv_li">
                              <span>
                                <FaCheck style={{ fontSize: "18px" }} />
                              </span>
                              <span>{textobj}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    {selectedCity &&
                      item.packagereq.map((obj) => (
                        <div
                          className={`tour_data_bottom_div_tour_packages_li_detilesdiv_detcontainer ${
                            selectedCity === "#packgereq" ? "aciveArea" : ""
                          }`}
                        >
                          <h3>{obj.header}</h3>
                          {obj.text.map((textobj) => (
                            <div className="tour_data_bottom_div_tour_packages_li_featuresdiv_li">
                              <span>
                                <FaCheck style={{ fontSize: "18px" }} />
                              </span>
                              <span>{textobj}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="tour_data_footer">
            <div className="tour_data_footer_pricediv">
              <div>
                <span>{tour.packagePrice}</span>
                {"  "}
                <span>ر.س</span>
              </div>
              <p style={{ fontSize: "10px", color: "rgb(102,121,127)" }}>
                {" "}
                {"(شاملا ضريبة القيمة المضافة )"}{" "}
              </p>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="tour_data_footer_button"
            >
              احجز الان
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export async function getStaticPaths() {
  const programIds = singletourdata.map((program) => ({
    id: program.id,
    data: program.place_id,
  }));
  const paths = programIds.map((program) => ({
    params: { place: program.data.toString(), data: program.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const program = singletourdata.find(
    (program) => program.id.toString() === params.data
  );
  const object = { ...program };

  return { props: { object } };
}

export default SinglePage;
