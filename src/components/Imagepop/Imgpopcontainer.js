import React, { useEffect, useState } from "react";
import styles from "../packageCard/packageCard.module.css";
import Image from "next/image";
import PopupGfg from "../Imagepop/ImgPop";
export default function CustomPopup({
  widthCard,
  arryName,
  hCard,
  sliderName,
  namenav,

}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
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
  const openPopup = (item) => {
    setSelectedItem({ item});
    setIsOpen(true);
  };

  const closePopup = () => {
    setSelectedItem(null);
    setIsOpen(false);
  };
  const myArray = arryName;

  return (
    <div className={styles.rowContainer} id={`${sliderName}`}>
      {myArray.map((item) => (
        <div
          onClick={() => openPopup(item)}
          key={item.id}
          className={styles.rowItem}
          style={{ minWidth: `${isTabletOrSmaller? "": widthCard}`, height: `${hCard}` }}
        >
          <Image
            fill={true}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            src={item.image}
            alt="item"
            style={{ borderRadius: ".2cm " }}
          />

          <div className="blackdiv" />
          <div style={{ zIndex: "2" }} className={styles.link}>
            <div className={styles.itemDescription}>
              <div className={styles.descText}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {isOpen && (
        <div className="custom-popup">
          <div className="custom-popup-content">
            {/* <button onClick={closePopup}>Close</button> */}
            <div onClick={closePopup}>
              <PopupGfg
                alt={selectedItem.item.title}
                src={selectedItem.item.image}
                title={selectedItem.item.title}
                desc={selectedItem.item.desc ? selectedItem.item.desc : ""}
                Itemopenprop={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
