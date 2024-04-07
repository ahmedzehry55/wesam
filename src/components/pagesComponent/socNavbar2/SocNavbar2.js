import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProgramCard2 from "@/components/pro2/ProgramCard2";
import {ButtonBread} from "../breadList/ButtonBread";
export default function SocNavbar2({ arrName ,country}) {
  const [data, setData] = useState([]);

  const [scrolled, setScrolled] = useState(false);
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);
  const [selectedType, setSelectedType] = useState("شهر العسل");
  const packagesArray = data


  var filteredcountry = packagesArray.filter(
    (packagena) => packagena.country === country
  );
  var filteredPackages = filteredcountry.filter(
    (packagena) => packagena.type === "شهر العسل"
  );
  console.log(filteredPackages)
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/aprogrammes");
        const data = await response.json();
        setData(data.data);
        var filteredcountry = data.data.filter(
          (packagena) => packagena.country === country
        );
        const filteredPackages = filteredcountry.filter((packagena) => packagena.type === "شهر العسل");
        setPackages(filteredPackages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  
  console.log(filteredPackages);
  const router = useRouter();
  const getNavItems = () => {
    const currentPath = router.asPath;
    const items = [
      {
        name: "شهر العسل",
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

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleNavClick = (selectedType) => {
    if (!selectedType) {
      var filteredPackages = filteredcountry.filter(
        (packagena) => packagena.type === "شهر العسل"
      );
    } else {
      filteredPackages = filteredcountry.filter(
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
      <Link
        href="/packages/worldpackages"
        className="SocNavbarcontainer_button "
        style={{ position: "relative", width: "100%", marginBottom: "2vw" }}
      >
        <ButtonBread title="العودة الى الباقات" />
      </Link>
      <div style={{ marginTop: `${isTabletOrSmaller ? "50px" : ""}` }}>
        <ProgramCard2
          ArrayName={packages}
          page_title={`باقات ${selectedType}`}
        />
      </div>
    </div>
  );
}
