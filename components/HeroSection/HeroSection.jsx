import React, { useEffect, useState } from 'react'
import styles from './heroSection.module.css'
import Image from 'next/image'
import Link from 'next/link';

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.heroContainer} id='home'>
      <div className={styles.imageBg}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          priority
          quality={100}
          style={{ 
            objectFit: 'cover',
            transform: `translateY(${scrollPosition * 0.5}px) scale(1.1)`,
            transition: 'transform 0.1s ease-out'
          }}
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
          <Link href="#contact">
            <button className={styles.primaryBtn}>Start Your Journey</button>
          </Link>
          <Link href="#about">
            <button className={styles.secondaryBtn}>Learn more</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection