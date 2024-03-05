import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { contentUsNav, navMenu, navbar } from "@/constants/constants";
import logo from "../../../../public/images/logoblack.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ButtonBread from "@/components/pagesComponent/breadList/ButtonBread";

const Headern = ({navbarmenu , btnTitle, btnRef , btndisplay}) => {
  const phoneNumber = '+966545003143';
  const message = 'Please help me?';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url);
  };
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

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
    <div className={styles.header__outer}>
      
    <div className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.div2}>
        <ul className={`${styles.navcont} ${scrolled ? styles.scrolled : ""}`}>
          {contentUsNav.map((nav) => (
            <li key={nav.id} className={styles.navLinkmain}>
              <div
                style={{
                  margin: "0 5px 0 0 ",
                  position: "relative",
                  objectFit: "contain",
                  width: "2vw",
                  height: "2vw",
                }}
              >
                <Image fill src={nav.image} alt="icon" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              <Link className={styles.navLinktag} href={`#${nav.ref}`} onClick={handleWhatsAppClick}>
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
                className={`${styles.navLink} ${router.pathname === nav.ref ? styles.active : ""}`}
                style={{
                  minWidth: "fit-content",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link href={nav.ref} style={{ display: "flex", minWidth: "fit-content", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <div className={styles.navMenuIcon}>
                    <Image src={nav.image} fill alt="icon" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  </div>
                  {nav.title}
                </Link>
              </li>
            ))}
          </div>
          <Link className={`${styles.mainlogo} ${styles.logoscorll}`} href="/">
            <Image fill src={logo} alt="wesam elnagah logo" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </Link>
          <Link className={`${styles.mainlogo} ${styles.logoBlack} `} href="/">
            <Image fill src={logo} alt="wesam elnagah logo" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </Link>
        </div>
       {/* <div style={{
        margin:"2vw 0 ", justifySelf:"flex-end",display:`${btndisplay}`
       }}> <ButtonBread title={btnTitle} ref={btnRef} /></div> */}
      </div>
      <div className={styles.div2Res} style={{display:`${navbarmenu}`}}>
        <ul className={styles.navcont}>
          {navbar.slice(0, 4).map((nav, index) => (
            <div key={index}>
              <li style={{ listStyle: "none" }}>
                <Link
                  className={`${styles.navLink}`}
                  style={{
                    color: "black",
                    border: "2 solid BLACK",
                  }}
                  href={nav.ref}
                >
                  <div className={styles.icon}>
                    <Image fill src={nav.image} alt={nav.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  </div>
                  {nav.title}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Headern;
