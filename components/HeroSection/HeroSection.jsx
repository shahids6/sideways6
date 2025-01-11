import React from 'react'
import styles from './heroSection.module.css'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className={styles.heroContainer} id='home'>
      <div className={styles.imageBg}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          priority
          quality={100}
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className={styles.overlay}></div>
      
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          <span>Crafting </span>
          <span className={styles.highlight}>Extraordinary</span>
          <br />
          <span>Events</span>
        </h1>
        
        <p className={styles.subtitle}>
          Transform your vision into an unforgettable experience
        </p>
        
        <div className={styles.buttonGroup}>
          <button className={styles.primaryBtn}>Start Your Journey</button>
          <button className={styles.secondaryBtn}>Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection