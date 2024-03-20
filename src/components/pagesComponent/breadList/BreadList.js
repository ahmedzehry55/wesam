import React from "react";
import Link from "next/link";
import styles from "./breadList.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
export const BreadcrumbList = ({ breadcrumbsArrayname ,btnTitle, btnRef,padT,f_s }) => {
  const breadcrumbs = breadcrumbsArrayname[0].breadcrumbs;

  return (
    <nav aria-label="Breadcrumb" className={`${styles.Breadcrumbcss} `} style={{paddingTop:`${padT}`, fontSize:`${f_s}`}}>
      <ul className={`${styles.ol} section_margin`} >
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={index}
            className={`${styles.li} ${
              index === breadcrumbs.length - 1 ? styles.lastItem : ""
            }`}
          >
            <Link href={breadcrumb.path} className={styles.link}>
              {breadcrumb.label}
            </Link>
            <div className={styles.icon}>
              <IoIosArrowBack />
            </div>
          </li>
        ))}
      </ul>
 
    </nav>
  );
};
