import React from "react";
import Header from "./AboutComponet/header/Header";
import Hero from "./AboutComponet/Hero";
import img from "../../../public/images/londn.jpg";
import AboutSec from "./AboutComponet/AboutSec";
import OurExp from "./AboutComponet/OurExp";
import Suppliers from "./AboutComponet/Suppliers";
import Agent from "./AboutComponet/Agent ";
import Form from "./AboutComponet/Form";
import FooterBar from "@/components/FooterBar/FooterBar";
import FooterContainer from "@/components/footer/FooterContainer";
import FooterRes from "@/components/footer/FooterRes/FooterRes";
export default function About() {
  return (
    <div className="about_container">
      <Header />
      <div className="about_hero_m "><Hero imag={img} /></div>
      <div className="about_container_wesam_1">
        <h3> شركة السفر الرائدة في المملكة العربية السعودية </h3>
        <span>
          {" "}
          نرتقي برحلات مسافرينا من المملكة العربية السعودية وداخلها وإليها
          وصولاً إلى المنطقة والعالم.
        </span>
        <button>اتصل بنا</button>
      </div>
      <div id="aboutus">
        <AboutSec />
      </div>
      <OurExp />
      <Suppliers />
      <Agent />
      <Form />
      <FooterBar />
      <FooterContainer />
      <FooterRes />
    </div>
  );
}
