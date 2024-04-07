import Image from "next/image";
import React, { useState } from "react";
import styles from "./imgpop.module.css";
export default function PopupGfg({ alt, src, title,Itemopenprop,desc }) {
    const [Itemopen , setItemOpen] = useState(Itemopenprop)
    const close =()=>{
        return setItemOpen(false)
    }
  return (
    <div className={styles.container} style={{display: `${Itemopen ? "flex" : "none"}`}}>
      <div className={styles.container_datacontainer}>
        <figure className={styles.container_fig}>
          <Image fill alt={alt} src={src} />
        </figure>
        <div className={styles.container_desc}>
          <h3 className={styles.container_title}>{title}</h3>
          <span>{desc}</span>
        </div>
        <div  className={styles.container_button}>
          <button onClick={close} >اغلاق</button>
        </div>
      </div>
    </div>
  );
}
