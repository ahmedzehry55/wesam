import { Layout } from "@/layout/Layout";
import React, { useEffect, useState } from "react";

import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import Hero from "../about/AboutComponet/Hero";
import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/images/tourHero.jpg";
import SocNavbar from "@/components/pagesComponent/socNavbar/SocNavbar";
import { useRouter } from "next/router";

const breadcrumb1 = [
  {
    breadcrumbs: [
      { label: "الرئيسية", path: "/" },
      { label: "الجولات السياحية", path: "/tours" },
      // Add more breadcrumbs as needed
    ],
  },
];
function Offers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/offers")
      .then((res) => res.json())
      .then((data) => {
        
        setData(data.data);
      });
  }, []);
  var filteredPackages = data
  const [packages, setPackages] = useState(filteredPackages);
  const [selectedType, setSelectedType] = useState("جميع العروض");
  const router = useRouter();
  const getNavItems = () => {
    const currentPath = router.asPath;
    const items = [
      {
        name: "جميع العروض",
        ref: currentPath,
        id: 3,
      },
      {
        name: "فنادق",
        ref: currentPath,
        id: 1,
      },
      {
        name: "طيران",
        ref: currentPath,
        id: 2,
      },
      {
        name: "انشطة",
        ref: currentPath,
        id: 3,
      },
      {
        name: "عروض شاليهات",
        ref: currentPath,
        id: 1,
      },
    ];
    return items;
  };
  const handleNavClick = (selectedType) => {
    if (selectedType == "جميع العروض") {
      setPackages(data);
    } else {
      const filteredPackages = data.filter((packagena) => packagena.type.includes(selectedType));
      setPackages(filteredPackages);
    }
    setSelectedType(selectedType);
  };
  
  const phoneNumber = "+966545003143";
  const message = "Please help me?";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url);
  };
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 860px)");

    const handleViewportChange = (event) => {
      setIsTabletOrSmaller(event.matches);
    };

    mediaQuery.addEventListener("change", handleViewportChange);

    // Initial check
    setIsTabletOrSmaller(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  return (
    <Layout menuDis="none" headerPos="fixed">
      {/* <ul className="tour_nav_ul">
            {tourNav.map((nav) => (
              <li key={nav.id} className="tour_nav_ul_li">
                <Link href="/" className="tour_nav_ul_li_link">
                  <figure>
                    <Image fill src={nav.img} alt={nav.title} />
                  </figure>
                  <h4>{nav.title}</h4>
                </Link>
              </li>
            ))}
          </ul> */}
      <div className="offer_container">
        <ul className="SocNavbar_ul">
          {getNavItems().map((item) => (
            <li
              onClick={() => handleNavClick(item.name)}
              className={`SocNavbar_li ${
                selectedType === item.name ? "activeSoc" : ""
              }`}
              key={item.id}
            >
              <Link href={item.ref}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <ul className="offers_list_container_ul">
          {packages.map((offer, index) => (
            <li key={index} className="offers_list_container_card">
              {isTabletOrSmaller && (
                <figure className="offers_list_container_card_img">
                  <Image
                    src={offer.image}
                    fill
                    alt={offer.title}
                    style={{ borderRadius: "12px 12px  0 0 " }}
                  />
                </figure>
              )}
              <div className="offers_list_container_card_text_container">
                <div className="offers_list_container_card_type_container">
                  {offer.type.map((type, index) => (
                    <span
                      key={index}
                      className="offers_list_container_card_type_span"
                      style={{display:`${index==0 ? "none": ""}`}}
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <h2 className="offers_list_container_card_title">
                  {offer.title}
                </h2>
                <p className="offers_list_container_card_desc">{offer.desc}</p>
                <p className="offers_list_container_card_code">
                  <span className="offers_list_container_card_code_span">
                    الكود:{" "}
                  </span>{" "}
                  {offer.code}
                </p>
                <p>*تُطبق الشروط والأحكام</p>
                <div className="offers_list_container_card_buttondiv">
                  <button
                    className="offers_list_container_card_button"
                    onClick={handleWhatsAppClick}
                  >
                    {isTabletOrSmaller ? "عرض التفاصيل " : "تفاصيل العرض"}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default Offers;
