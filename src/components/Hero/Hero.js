import React from 'react'
import styles from "./Hero.module.css"
import Image from 'next/image'

function Hero() {
  return (
    <div className={`${styles.container} ${styles.secPadding} `}>
       <video autoPlay loop muted className="background-video">
          <source src="/vid3.mp4" type="video/mp4" />
        </video>
    </div>
  )
}

export default Hero