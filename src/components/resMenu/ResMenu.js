import { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { navMenu } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/router";
const HamburgerMenu = ({color}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);
  const router = useRouter();
  const [ismain, setIsmain] = useState(false);

  useEffect(() => {
    if (router.pathname === '/') {
      setIsmain(true);
    }
  }, [router.pathname]);

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
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`hamburger ${isOpen ? "activee" : ""}`}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <RiCloseLine
            style={{ color: '5fbccb'}}
            size={27}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <IoIosMenu color={isTabletOrSmaller&& ismain ? color: 'white'} size={27} onClick={() => setIsOpen(true)} />
        )}
      </div>

      <nav id="menu" className={isOpen ? "active" : ""}>
        <ul style={{ position: "relative" }}>
          <div className="footerLi"><li className="options">خيارات</li></div>
          {navMenu.map((nav) => (
            <div key={nav.id}>
              <li
                className="footerLi"
                style={{ marginTop: nav.id === 0 ? "25%" : undefined }}
              >
                <>
                  <div className="icon">
                    <Image
                      fill
                      src={nav.image}
                      alt="icon"
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                    />
                  </div>
                  <div className="textwithicon">
                    <div className="text">
                      {/* <h5 "></h5> */}
                      <Link className="text2"  href={nav.ref}>
                      {nav.title}
                      </Link>
                      <IoIosArrowForward
                        style={{ color: "var( --primary2)", fontSize: "18PX" }}
                      />
                    </div>
                  </div>
                </>
              </li>
            </div>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;
