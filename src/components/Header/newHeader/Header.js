import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { navMenu, navbar } from "@/constants/constants";
import logo from "../../../../public/images/logo.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HamburgerMenu from "@/components/resMenu/ResMenu";

const Header = ({ navbarmenu, btnTitle, btnRef, btndisplay }) => {
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
  const router = useRouter();
  return (
    <div className={`container ${styles.header_container}`}>
      <div className={styles.header_item}>
        <div className={styles.header_logo_ham}>
        <Link className={`${styles.header_item_mainlogo}`} href="/">
            <Image
              fill
              src={logo}
              alt="wesam elnagah logo"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
          <HamburgerMenu color="white" />
          
        </div>
        <div className={styles.header_item_navMenu}>
          {navMenu.slice(0, isTabletOrSmaller ? 4 : 10).map((nav) => (
            <li key={nav.id}>
              <Link
                className={`${styles.header_navLink} ${
                  router.pathname === nav.ref ? styles.active : ""
                }`}
                href={nav.ref}
              >
                <figure className={styles.header_navMenuIcon}>
                  <Image
                    src={nav.image}
                    fill
                    alt={nav.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </figure>
                {nav.title}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
