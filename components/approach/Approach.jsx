import React, { useEffect, useRef } from 'react'
import styles from './Approach.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Approach = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const contentRows = section.querySelectorAll(`.${styles.contentRow}`)

    contentRows.forEach((row, index) => {
      const img = row.querySelector('img')
      const text = row.querySelectorAll('h3, p')
      const isEven = index % 2 === 0

      // Initial states
      gsap.set(img, {
        x: isEven ? 369.5 : -369.5,
        rotation: isEven ? 10 : -10,
      })
      gsap.set(text, {
        y: '55%',
        opacity: 0,
      })

      // Create animation
      gsap.to(img, {
        x: 0,
        y: '-5%',
        rotation: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: row,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 5,
        },
      })

      // Text animation
      gsap.to(text, {
        y: '-5%',
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: row,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 1,
        },
      })
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className={styles.approach} ref={sectionRef}>
      
      {/* Header section */}
      <div className={styles.header}>
        <h2 className='title1'>Our Approach</h2>
        <p className='subTitle1'>
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