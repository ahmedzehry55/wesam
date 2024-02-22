import React from "react";
import styles from "./Button.module.css"
import { MdOutlineArrowBack } from "react-icons/md";
export default function Button({title}) {
  return (
    <div>
      <div className={styles.button}>
        <p className={styles.pABtn} style={{zIndex:"10"}}> {title}</p>
        <div style={{zIndex:"10"}} className={styles.aBtnicon}>
          <MdOutlineArrowBack className={styles.abt} />
        </div>
      </div>
    </div>
  );
}
