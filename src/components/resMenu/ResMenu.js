import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { navbar } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <RiCloseLine
            style={{ color: "var(--primary2)" }}
            size={27}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <IoIosMenu color="#fff" size={27} onClick={() => setIsOpen(true)} />
        )}
      </div>

      <nav id="menu" className={isOpen ? "active" : ""}>
        <ul style={{position:'relative'}}>
          <li className="options">خيارات</li>
          {navbar.map((nav) => (
            <>
              <li
                key={nav.id}
                className="footerLi"
                style={{ marginTop: nav.id===0 ? "25%" : undefined }}
              >
                <>
                  <div className="icon">
                    <Image fill src={nav.image} />
                  </div>
                  <div className="textwithicon">
                    <div className="text">
                      <h5 className="text2">{nav.title}</h5>
                      <Link className={`text3`} href={`#${nav.id}`}>
                        {nav.desc}
                      </Link>
                      <IoIosArrowForward
                        style={{ color: "var( --primary2)", fontSize: "18PX" }}
                      />
                    </div>
                  </div>
                </>
              </li>
            </>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;
