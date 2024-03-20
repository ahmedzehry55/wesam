import React from "react";
import styles from "./pcard2.module.css";
import { CiSun } from "react-icons/ci";
import { IoMdLocate } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import { IoMdStar } from "react-icons/io";

export default function ProgramCard2({ i, ArrayName, page_title, cardRef }) {
  const Icon = <IoMdStar size={20} color="orange" />;
  return (
    <div className={styles.container}>
      <Link href="/packages">
        <strong className={styles.title}>{page_title}</strong>
      </Link>

      <div className={styles.rowContainer} id={"programsslide"}>
        {ArrayName.slice(0, i).map((item) => (
          <div key={item.id} className={styles.rowItem}>
            <div
              // href={`/travel-programs/${item.id}`}
              className={styles.link}
            >
              <section className={styles.itemHeader}>
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  src={item.image}
                  alt={item.title}
                  style={{ objectFit: "cover" }}
                  className={styles.newPrograms__card__img}
                />
              </section>
              <div className={styles.itemDescription}>
                <div className={styles.newPrograms__card__content}>
                  <div className={styles.newPrograms__card__period}>
                    <span className={styles.lable}>
                      {/* icon */}
                      <CiSun />
                      {item.day} يوم
                    </span>
                    <span className={styles.lable}>
                      {/* icon */}
                      <IoMoonOutline />
                      {item.night} ليالي
                    </span>
                    <span className={styles.lable}>
                      {/* icon */}
                      <IoMdLocate />
                      {item.locate}
                    </span>
                    <span className={styles.lable}>
                      {/* icon */}
                      <IoPeopleSharp />
                      {item.person}
                    </span>
                  </div>
                  <div className={styles.newPrograms__heading__container}>
                    <div className={styles.newPrograms__heading}>
                      <Link href=" ">
                        <h3 className={styles.newPrograms__card__title}>
                          {item.title}
                        </h3>
                      </Link>
                    </div>
                    <div className={styles.stars}>
                      {Array.from({ length: item.rate }).map((_, index) => (
                        <div key={index}>{Icon}</div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.newPrograms__card__price}>
                    <span className={styles.new__price}>{item.price}</span>
                    <span style={{ fontSize: ".6rem" }}> ريال سعودي </span>
                  </div>
                  {/* </div> */}
                  <div className={styles.newPrograms__card__btns}>
                    <div style={{ position: "relative,", width: "100%" }}>
                      <Button
                        itemId={`packages/worldpackages/${item.place_id}/${item.id}`}
                        title={"تفاصيل العرض"}
                      />
                    </div>
                    <div style={{ position: "relative,", width: "10rem" }}>
                      <Button
                        itemId={`packages/worldpackages/${item.place_id}/${item.id}`}
                        title={" حجز العرض"}
                      />
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
