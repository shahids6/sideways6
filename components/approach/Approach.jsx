import React, { useRef, useEffect } from 'react'
import styles from './Approach.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useTitleAnimation } from '../../utils/animations'

gsap.registerPlugin(ScrollTrigger)

const Approach = () => {
  const sectionRef = useRef(null)
  const { titleRef, subtitleRef } = useTitleAnimation()

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth <= 768
      const contentRows = sectionRef.current.querySelectorAll(`.${styles.contentRow}`)
      
      contentRows.forEach((row, index) => {
        const img = row.querySelector('img')
        const text = row.querySelectorAll('h3, p')
        const isEven = index % 2 === 0

        // Set initial states
        gsap.set(img, {
          x: isEven ? (isMobile ? 100 : 200) : (isMobile ? -100 : -200),
          rotation: isEven ? 5 : -5,
          opacity: 0
        })
        gsap.set(text, {
          y: 30,
          opacity: 0
        })

        // Create timeline for each row
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "center center",
            toggleActions: "play none none reverse"
          }
        })

        tl.to(img, {
          x: 0,
          rotation: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        })
        .to(text, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out"
        }, "-=0.5")
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className={styles.approach} ref={sectionRef}>
      
      {/* Header section */}
      <div className={styles.header}>
        <h2 className='title1' ref={titleRef}>Our Approach</h2>
        <p className='subTitle1' ref={subtitleRef}>
          We are a creative powerhouse that builds beloved brands by delivering unique services and innovative events, all while staying true to client values and pushing the boundaries of excellence.
        </p>
      </div>

      {/* First section */}
      <div className={styles.contentRow}>
        <div className={styles.leftContent}>
          <h3>Attentive Ears</h3>
          <p>We believe true communication lies in understanding what remains unspoken.</p>
        </div>
        <div className={styles.rightContent}  style={{flex: '0 0 55%'}}>
          <img 
            src="/images/services/CONFERENCES.jpg" 
            alt="Attentive Ears"
            className={styles.approachImage}
          />
        </div>
      </div>

      {/* Second section */}
      <div className={styles.contentRow}>
        <div className={styles.leftContent}   style={{flex: '0 0 55%'}}>
          <img 
            src="/images/services/CORPORATE EVENTS.jpg" 
            alt="Swift Enthusiasts"
            height={510}
            width={750}
            className={styles.approachImage}
          />
        </div>
        <div className={styles.rightContent}>
          <h3>Swift Enthusiasts</h3>
          <p>We go above and beyond to bring ideas to life, ensuring swift execution from concept to completion.</p>
        </div>
      </div>

      {/* Third section */}
      <div className={styles.contentRow}>
        <div className={styles.leftContent}>
          <h3>Creative Fixers</h3>
          <p>We understand that solving problems requires a fresh perspective, not the same mindset that created them.</p>
        </div>
        <div className={styles.rightContent}  style={{flex: '0 0 55%'}}>
          <img 
            src="/images/services/DEALERS MEET.jpg" 
            alt="Creative Fixers"
            className={styles.approachImage}
          />
        </div>
      </div>

      {/* Fourth section */}
      <div className={styles.contentRow}>
        <div className={styles.leftContent}  style={{flex: '0 0 55%'}}>
          <img 
            src="/images/services/PRODUCT LAUNCHES.jpg" 
            alt="Proficiency Pioneers"
            className={styles.approachImage}
          />
        </div>
        <div className={styles.rightContent}>
          <h3>Proficiency Pioneers</h3>
          <p>Our expertise shines through in our innovative ideation and flawless execution, driven by a dedicated team of passionate professionals.</p>
        </div>
      </div>
    </section>
  )
}

export default Approach