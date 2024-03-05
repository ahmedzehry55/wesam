import Button from "@/components/button/Button";
import Pagescomponent from "@/components/pagesComponent/Main";
import { BreadcrumbList } from "@/components/pagesComponent/breadList/BreadList";
import SocNavbar2 from "@/components/pagesComponent/socNavbar2/SocNavbar2";
import { hotels } from "@/constants/hotels";
import { Layout } from "@/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdDirections } from "react-icons/md";
import { RiWalkFill } from "react-icons/ri";


const SinglePage = ({ object }) => {
  const phoneNumber = '+966545003143';
  const message = 'Please help me?';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url);
  };
  const router = useRouter()
  const currentPath = router.asPath;
  const Icon = <IoMdStar size={15} color="orange" />;
  const breadcrumb1 = [
    {
      breadcrumbs: [
        { label: "الرئيسية", path: "/" },
        { label: "الفنادق", path: "/hotel" },
        { label: `${object.title}`, path: `/hotel/${object.id}` },
      ],
    },
  ];
  return (
    <Layout menuDis="none" btnTitlea="العودة للباقات">
      <BreadcrumbList breadcrumbsArrayname={breadcrumb1} btnTitle="العودة" />
      <div className="hotel__page_container" >
        <h1 className="page_title">الفنادق المشهورة</h1>
        <div className="hotel__container">
          {hotels[0].list.map((nav) => (
             <div onClick={handleWhatsAppClick} className="hotel__card_container">
              <div className="hotel__image">
                <Image fill src={nav.image} style={{objectFit:"cover", borderRadius:"0 .5cm .5cm 0 "}} />
              </div>

              <div className="hotel__text_container">
                <div className="hotel__text_title">
                  <h4 className="hotel__text_h4">{nav.hotelName}</h4>
                  <div className="hotel__text_RateDiv">
                    {Array.from({ length: nav.rate }).map((_, index) => (
                      <div
                        className="hotel__text_RateDiv_inner_rate"
                        key={index}
                      >
                        {Icon}
                      </div>
                    ))}
                  </div>
                </div>
                <span className="hotel__text_loc">
                  <IoLocationOutline /> {" "} {nav.location}
                </span>
                <span className="hotel__text_dis">
                  <MdDirections /> {" "}
                  {nav.distance}
                </span>
                <span className="hotel__text_dis">
                  <RiWalkFill />{" "}
                  {nav.timer}
                </span>
                <div className="hotel__text_button">
                  <Button title='احجز الأن' itemId={currentPath} onClick={handleWhatsAppClick}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const countryIds = hotels.map((country) => country.id);
  const paths = countryIds.map((id) => ({
    params: { place: id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const country = hotels.find(
    (country) => country.id === parseInt(params.place)
  );
  const object = { ...country };

  return { props: { object } };
}

export default SinglePage;
