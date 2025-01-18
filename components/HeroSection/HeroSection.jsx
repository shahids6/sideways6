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
      {/* <div className={styles.imageBg}>
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
      </div> */}
      
      {/* <div className={styles.overlay}></div> */}
      
      <div className={styles.heroContent}>
        <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Crafting
          Extraordinary
          <br />
          Events
        </h1>
        
        <p className={styles.subtitle}>
        With expertise, excellence, and a proven track record,<br/> we design innovative, large-scale events <br/> that captivate audiences and strengthen brands.
        </p>
      <Link href="#achievements">
        <div className={styles.scrollDown}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={styles.scrollArrow}
          >
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
            <path 
              d="M8 10L12 14L16 10" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        </Link>
        </div>
        
        
        <div className={styles.buttonGroup}>
          <Link href="#about">
            <button className={styles.secondaryBtn}>Learn more</button>
          </Link>
          <Link href="#contact">
            <button className={styles.primaryBtn}>Get In Touch</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default HeroSection