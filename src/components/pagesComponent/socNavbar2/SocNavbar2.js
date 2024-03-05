import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { countrys } from "../../../constants/constants";
import ProgramCard2 from "@/components/pro2/ProgramCard2";
export default function SocNavbar2({ arrName }) {
  const packagesArray = countrys[0].nav[0].packages[0].nav;
  var filteredPackages = packagesArray.filter(
    (packagena) => packagena.type === "شهرالعسل "
  );
  const [scrolled, setScrolled] = useState(false);

  const [packages, setPackages] = useState(filteredPackages);
  const [selectedType, setSelectedType] = useState("شهرالعسل ");
  const router = useRouter();
  const getNavItems = () => {
    const currentPath = router.asPath;

    const items = [
      {
        name: "شهرالعسل ",
        ref: currentPath,
        id: 1,
      },
      {
        name: "عوائل",
        ref: currentPath,
        id: 2,
      },
      {
        name: "vip",
        ref: currentPath,
        id: 3,
      },
    ];

    return items;
  };
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 90;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleNavClick = (selectedType) => {
    if (!selectedType) {
      var filteredPackages = packagesArray.filter(
        (packagena) => packagena.type === "شهرالعسل "
      );
    } else {
      filteredPackages = packagesArray.filter(
        (packagena) => packagena.type === selectedType
      );
    }

    setPackages(filteredPackages);
    setSelectedType(selectedType);
  };
  return (
    <div className={`SocNavbarcontainer `}>
      <div className={`soc_860 SocNavbar ${scrolled ? "scrolled" : ""} `}>
        <ul className="SocNavbar_ul">
          {getNavItems().map((item) => (
            <li
              onClick={() => handleNavClick(item.name)}
              className={`SocNavbar_li ${
                selectedType === item.name ? "activeSoc" : ""
              }`}
              key={item.id}
            >
              <Link href={item.ref}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <ProgramCard2
        ArrayName={packages}
        page_title={`باقات ${selectedType}`}
        
      />
    </div>
  );
}
