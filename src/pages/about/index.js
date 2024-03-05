import React from "react";
import Header from "./AboutComponet/header/Header";
import Hero from "./AboutComponet/Hero";
import AboutSec from "./AboutComponet/AboutSec";

export default function About() {
  return (
    <div className="about_container">
      <Header />
      <Hero />
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
        <AboutSec/>
      </div>
      <div className="about_container_wesam_2"> </div>
      <div></div>
    </div>
  );
}
