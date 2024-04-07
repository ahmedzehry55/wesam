import React, { useEffect, useState } from "react";
import styles from "./MainCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function MainCard({
  arryName,
  pathname,
  itemWidth,
  itemHeight,
  itemText,
  justitem,
  textflex,
  phonewidth
}) {
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
  const currentPath = router.asPath;
  const myArray = arryName;
  const [badge, setBadge] = useState(false);
  return (
    <>
      <div className={`trending`}>
        <div className={styles.container}>
          <div className={styles.rowContainer}>
            {myArray.map((nav) => (
              <Link
                href={`/${currentPath}/${nav.pathname ? nav.pathname : nav.name}`}
                key={nav.id}
                className={styles.rowItem}
                style={{
                
                  height: `${itemHeight}`,
                  textAlign: `${itemText}`,
                  width: `${isTabletOrSmaller  ? '' : itemWidth}`,

                }}
              >
                <div className={styles.blackdiv} />
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  src={nav.image}
                  alt={nav.name}
                  style={{ objectFit: "cover", borderRadius: ".2cm " }}
                />
                <div  className={styles.badgediv} >
                  {nav.badge ? <p className={styles.badge}>{nav.badge}</p> : null}
                  {nav.bestSeller ? <p className={styles.badge}>{nav.bestSeller}</p> : null}
                </div>
                <div className="blackdiv"/>
           
                <section
                  className={styles.link}
                  style={{ alignItems: `${itemText}`, zIndex:"2" }}
                >

                  <section
                    className={styles.itemDescription}
                    style={{ justifyContent: `${textflex}` }}
                  >
                    <section
                      className={styles.descText}
                      style={{
                        alignItems: `${itemText}`,
                        justifyItems: `${justitem}`,
                        rowGap: ".5vw",
                      }}
                    >
                      <h3>{nav.name}</h3>
                      <div className={styles.arraydesc_div}>
                        {nav.desc.length > 0 ? (
                          nav.desc.map((city, index) => (
                            <div className={styles.arraydesc_div_array}>
                              <p>{city}</p>
                              {index === nav.desc.length - 1 ? (
                                <div
                                  className="city_dot"
                                  style={{ display: "none" }}
                                />
                              ) : (
                                <div className="city_dot" />
                              )}
                            </div>
                          ))
                        ) : (
                          <p>{nav.desc}</p>
                        )}
                      </div>
                    </section>
                  </section>
                </section>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
