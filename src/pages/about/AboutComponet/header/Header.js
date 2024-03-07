import Image from "next/image";
import React from "react";
import logo from "../../../../../public/images/logoBlack1.png";
import Link from "next/link";
import HamburgerMenu from "@/components/resMenu/ResMenu";
export default function Header() {
  return (
    <div className="aboutHeadr_container">
      <HamburgerMenu  color="#0C97AD"/>
      <div className="aboutHeadr_container_logo">
        <figure className="aboutHeadr_container_logo_figer">
          <Image sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" fill src={logo} alt="img"/>
        </figure>
      </div>
      <div className="aboutHeadr_container_menu">
        <ul className="aboutHeadr_container_menu_ul">
          <li className="aboutHeadr_container_menu_li">
            {" "}
            <Link href="#aboutus"> نبذة عن الشركة </Link>{" "}
          </li>
          <li className="aboutHeadr_container_menu_li">
            {" "}
            <Link href="#ourWork">أعمالنا</Link>
          </li>
          <li className="aboutHeadr_container_menu_li">
            {" "}
            <Link href="#news">أخبار</Link>{" "}
          </li>
          <li className="aboutHeadr_container_menu_li">
            <Link href="connect"> تواصل معنا </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
