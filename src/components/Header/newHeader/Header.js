import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { contentUsNav, navMenu, navbar } from "@/constants/constants";
import logo from "../../../../public/images/logoblack.png";
import logoBlack from "../../../../public/images/logoBlack1.png";
import { useEffect, useState } from "react";
const Headern = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.div2}>
        <ul className={`${styles.navcont} ${scrolled ? styles.scrolled : ""}` }style={{marginBottom:"2vw"}}>
          {contentUsNav.map((nav) => (
            <li key={nav.id} className={styles.navLinkmain}>
              <div
                style={{
                  margin: "0 5px 0 0 ",
                  position: "relative",
                  objectFit: "contain",
                  width: "2vw",
                  height:"2vw"
                }}
              >
                <Image fill src={nav.image} />
              </div>
              <Link className={styles.navLinktag} href={`#${nav.id}`}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.div1Res}>
        <div className={styles.div1}>
          <div className={styles.navMenu}>
            {navMenu.map((nav) => (
              <li
                key={nav.id}
                className={styles.navLink}
                style={{
                  minWidth: "fit-content",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className={styles.navMenuIcon}>
                  <Image src={nav.image} fill />
                </div>
                <Link href={`#${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </div>
          <Link className={`${styles.mainlogo} ${styles.logoscorll}`} href="/">
            {scrolled ? (
              <Image fill src={logo} alt="wesam elnagah logo" />
            ) : (
              <Image fill src={logoBlack} alt="wesam elnagah logo" />
            )}
          </Link>
          <Link className={`${styles.mainlogo} ${styles.logoBlack} `} href="/">
            <Image fill src={logo} alt="wesam elnagah logo" />
          </Link>
        </div>
      </div>
      <div className={styles.div2Res}>
        <ul className={styles.navcont}>
          {navbar.slice(0, 4).map((nav, index) => (
            <>
              <li key={index} style={{ listStyle: "none" }}>
                <Link
                  className={styles.navLink}
                  style={{
                    color: "black",
                    border: "2 solid BLACK",
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
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Headern;
