import React from "react";
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
  justitem
})
 {
  const router = useRouter()
  const currentPath = router.asPath;
  const myArray = arryName[0].nav;
  return (
    <>
      <div className={`trending`}>
        <div className={styles.container}>
          <div className={styles.rowContainer}>
            {myArray.map((nav) => (
              <Link
                href={`/${currentPath}/${nav.id}`}
                key={nav.id}
                className={styles.rowItem}
                style={{
                  width: `${itemWidth}`,
                  height: `${itemHeight}`,
                  textAlign: `${itemText}`,
                }}
              >
                 <Image
                    fill
                    sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                    src={nav.image}
                    alt={nav.title}
                    style={{ objectFit: "cover",borderRadius: ".2cm " }}
                  />

                <section
                  className={styles.link}
                  style={{ alignItems: `${itemText}` }}
                >
                  <section className={styles.itemDescription}>
                    <section
                      className={styles.descText}
                      style={{ alignItems: `${itemText}`, justifyItems:`${justitem}`, rowGap: ".5vw" }}
                    >
                      <h3>{nav.title}</h3>
                      <p>{nav.desc}</p>
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
