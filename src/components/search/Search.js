import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { navbar, tourNav } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Search = ({color}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`hamburger ${isOpen ? "sactivee" : ""}`}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <RiCloseLine
            style={{ color: "var(--primary2)" }}
            size={27}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <input
          className="tour_heroSerch"
          type="search"
          placeholder={`ابحث عن الأنشطة داخل السعودية`}
        />
        )}
      </div>

      <nav id="smenu" className={isOpen ? "active" : ""}>
        <div style={{ position: "relative" }}>
          <input type="search" placeholder="البحث"/>
          <h3>الأنشطةالمقترحة</h3>
          <ul>
            {tourNav.map((item) => (
              <li>
                {item.title}
              </li>

            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Search;
