import React from "react";
import styles from "./pcard2.module.css";
import { CiSun } from "react-icons/ci";
import { IoMdLocate } from "react-icons/io";
import { MdOutlineArrowBack } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdStarRate } from "react-icons/md";
import { programs } from "@/constants/constants";
import Button from "../button/Button";

export default function ProgramCard2() {
  return (
    <div className={styles.container}>
      <strong className={styles.title}>احدث البرامج السياحية</strong>

      <div className={styles.rowContainer} id={"programsslide"}>
        {programs.slice(0, 3).map((item) => (
          <div key={item.id} className={styles.rowItem}>
            <div className={styles.link}>
              <div className={styles.itemHeader}>
                <Image
                  fill
                  src={item.image}
                  alt={item.title}
                  className={styles.newPrograms__card__img}
                />
              </div>
              <div className={styles.itemDescription}>
                <div className={styles.newPrograms__card__content}>
                  {/* <div className={styles.descText}>
                <div className={styles.textContainer}> */}
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
                      {Array.from(Array(item.rate)).map((s, i) => (
                        <>
                          <MdStarRate />
                          <MdStarRate />
                          <MdStarRate />
                          <MdStarRate />
                          <MdStarRate />
                        </>
                      ))}
                    </div>
                  </div>
                  <div className={styles.newPrograms__card__price}>
                    <span className={styles.new__price}>{item.price}</span>
                    <span style={{ fontSize: ".6rem" }}>ريال سعودي</span>
                  </div>
                  {/* </div> */}
                  <div className={styles.newPrograms__card__btns}>
                    <div style={{ position: "relative,", width: "10rem" }}>
                      <Button title={"تفاصيل العرض"} />
                    </div>
                    <div style={{ position: "relative,", width: "10rem" }}>
                      <Button title={' حجز العرض'}/>
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
