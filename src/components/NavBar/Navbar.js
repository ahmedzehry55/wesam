import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import more from "../../../public/images/more.png";
import { navbar } from "@/constants/constants";
export default function Navbar() {
  // const isTabletOrSmaller = window.innerWidth <= 768 ;
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
    <div className={`${styles.container}`} id="navbar">
      <div className={styles.div2non}>
        <div className={styles.div2}>
          <h5
            style={{
              alignSelf: "flex-start ",
              fontWeight: "bolder",
              fontSize:"2vw",
              padding: "0 3vw  2vw",
              display: isTabletOrSmaller ?   "block" : "none",  
            }}
          >
            المزيد من الخدمات
          </h5>
          <ul className={styles.navcont}>
            {navbar
              .slice(
                isTabletOrSmaller ? 4 : 0,
                isTabletOrSmaller ? 7 :5
              )
              .map((nav, index) => (
                <>
                  <li
                    key={index}
                    style={{
                      listStyle: "none",
                    }}
                    className={styles.navLinkcontdiv}

                  >
                    <Link
                      className={styles.navLink}
                      
                      style={{
                        color: "black",
                        border: "2 solid BLACK",
                        marginRight: index === 0 ? 0 : undefined,
                      }}
                      href={`#${nav.id}`}
                    >
                      <Image
                        className={styles.icon}
                        width={45}
                        height={45}
                        src={nav.image}
                        alt={nav.title}
                      />

                      {nav.title}
                    </Link>
                  </li>
                  <div className={styles.provider} />
                </>
              ))}
            <li className={styles.navLinkcontdiv} style={{ listStyle: "none" }}>
              <Link
                className={styles.navLink}
                style={{
                  color: "black",
                  border: "2 solid BLACK",
                }}
                href={`#id`}
              >
                <Image
                 className={styles.moreicon} 
                  width={45}
                  height={45}
                  src={more}
                  alt="more"
                />
                خدمات اخرى
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          marginTop: "10px",
          width: "1200px",
          height: "1px",
          background: "#0000001f",
          display: isTabletOrSmaller ? "none" : "block",
        }}
      />
    </div>
  );
}
