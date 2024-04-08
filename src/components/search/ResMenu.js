import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { tourNav } from "@/constants/constants";
const Search = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`shamburger ${isOpen ? "sactivee" : ""}`}
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
          <input type="search" placeholder="البحث" />
          <h3>الأنشطةالمقترحة</h3>
          <ul>
            {tourNav.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Search;
