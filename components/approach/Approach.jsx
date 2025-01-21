import React from 'react'
import styles from './Approach.module.css'

const Approach = () => {
  return (
    <section className={styles.approach}>
      
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