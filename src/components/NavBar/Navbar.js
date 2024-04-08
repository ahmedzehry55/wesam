import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import more from "../../../public/icons/more.svg";
import { navMenu  } from "@/constants/constants";
export default function Navbar() {
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
    <div className="container section_margin" id="navbar">
      <h5
        className="navbar_h5"
        style={{
          display: isTabletOrSmaller ? "block" : "none",
        }}
      >
        المزيد من الخدمات
      </h5>
      <ul className='navbar_navcont'>
        {navMenu
          .slice(isTabletOrSmaller ? 4 : 0, isTabletOrSmaller ? 7 : 5)
          .map((nav, index) => (
            <div key={index} style={{ display: "flex" }}>
          
                <Link
                  className= 'navbar_navLinkTag' 
                  style={{
                    color: "black",
                    border: "2 solid BLACK",
                    marginRight: index === 0 ? 0 : undefined,
                  }}
                  href={nav.ref}
                >
                  <div className= 'navbar_icon' >
                    <Image
                      fill
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                      src={nav.image}
                      alt={nav.title}
                    />
                  </div>
                  {nav.title}
                </Link>
            
              <div className= 'navbar_provider' />
            </div>
          ))}
        <li >
          <Link
            className='navbar_navLinkTag'
            style={{
              color: "black",
              border: "2 solid BLACK",
            }}
            href="/more"
          >
            <div className='navbar_icon' style={{ paddinBottom: "0.6vw" }}>
              <Image
                sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                fill
                src={more}
                alt="more"
              />
            </div>
            خدمات اخرى
          </Link>
        </li>
      </ul>
    </div>
  );
}
