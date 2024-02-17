import React from 'react'
import styles from "./Hero.module.css"
import Image from 'next/image'

function Hero() {
  return (
    <div className={`${styles.container} ${styles.secPadding} `}>
        {/* <Image width={auto} height={900} src={travel}/> */}
    </div>
  )
}

export default Hero