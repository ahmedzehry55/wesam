import { Layout } from "@/layout/Layout";
import React, { useEffect, useState } from "react";
import {  tourNav } from "@/constants/constants";
import Hero from "../about/AboutComponet/Hero";
import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/images/tourHero.jpg";

const breadcrumb1 = [
  {
    breadcrumbs: [
      { label: "الرئيسية", path: "/" },
      { label: "الجولات السياحية", path: "/tours" },
      // Add more breadcrumbs as needed
    ],
  },
];
function Tours() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/tours")
      .then((res) => res.json())
      .then((data) => {
        
        setData(data.data);
      });
  }, []);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [1]);
  return (
    <Layout menuDis="none" headerPos="fixed">
      <div style={{background:"white" ,width:"100%"}}>
        <div className={`tour_hero ${scrolled ? "tour_hero_scrolled" : ""}`}>
          <Hero imag={hero} />
          <input
            className="tour_heroSerch"
            type="search"
            placeholder={`ابحث عن الأنشطة داخل السعودية`}
          />
          <h3>اكتشف اروع التجارب معنا</h3>
        </div>
        {/* <BreadcrumbList
        breadcrumbsArrayname={breadcrumb1}
        btnTitle="العودة"
        // btnRef="/"
      /> */}

        <div
          style={{ background: "white", zIndex: "777777" , position:"relative" }}
          className={`${scrolled ? "tour_ul_list_scrolled" : ""}`}
        >
          <ul className="tour_nav_ul">
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
          </ul>
          <div className="tour_list_container">
            <h3>اكتشف افضل الوجهات </h3>
            <ul className="tour_list_ul">
              {data.map((nav) => (
                <li key={nav.id}>
                  <Link
                    href={`/tours/${nav.id}`}
                    className="tour_list_ul_li_link"
                  >
                    <figure>
                      <Image
                        style={{ borderRadius: ".2cm" }}
                        fill
                        src={nav.image}
                        alt={nav.title}
                      />
                    </figure>
                    <h4>{nav.title}</h4>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="tour_footer">
            <h3>ترقّب المزيد من الأنشطة والوجهات</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Tours;
