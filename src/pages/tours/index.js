import { Layout } from "@/layout/Layout";
import React from "react";
import Pagescomponent from "@/components/pagesComponent/Main";
import { cityGuides, tourList, tourNav } from "@/constants/constants";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import Hero from "../about/AboutComponet/Hero";
import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/images/tourHero.jpg";
import { CiSearch } from "react-icons/ci";
import Search from "@/components/search/Search";

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
  return (
    <Layout menuDis="none">
      <div className="tour_hero">
        <Hero imag={hero} />
        <div className="tour_heroSerch">
          <Search />
        </div>

        <h3>اكتشف اروع التجارب معنا</h3>
      </div>
      {/* <BreadcrumbList
        breadcrumbsArrayname={breadcrumb1}
        btnTitle="العودة"
        // btnRef="/"
      /> */}

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
          {tourList.map((nav) => (
            <li key={nav.id}>
              <Link href={`/tours/${nav.id}`} className="tour_list_ul_li_link">
                <figure>
                  <Image
                    style={{ borderRadius: ".2cm" }}
                    fill
                    src={nav.img}
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
    </Layout>
  );
}

export default Tours;
