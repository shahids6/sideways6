import React from 'react'
import styles from './Approach.module.css'

const Approach = () => {
  return (
    <section className={styles.approach}>
         <div className={styles.backgroundGradient}></div>
      <div className={styles.leftContent}>
        <h2 className={styles.title}>Our Approach</h2>
        <p className={styles.description}>
          We are a creative powerhouse that builds beloved brands by delivering unique services and innovative events, all while staying true to client values and pushing the boundaries of excellence.
        </p>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineItems}>
          <TimelineItem 
            number="1"
            title="Attentive Ears"
            description="We believe true communication lies in understanding what remains unspoken."
          />
          <TimelineItem 
            number="2"
            title="Swift Enthusiasts"
            description="We go above and beyond to bring ideas to life, ensuring swift execution from concept to completion."
          />
          <TimelineItem 
            number="3"
            title="Creative Fixers"
            description="We understand that solving problems requires a fresh perspective, not the same mindset that created them."
          />
          <TimelineItem 
            number="4"
            title="Proficiency Pioneers"
            description="Our expertise shines through in our innovative ideation and flawless execution, driven by a dedicated team of passionate professionals."
          />
        </div>
      </div>
    </section>
  )
}

const TimelineItem = ({ number, title, description }) => (
  <div className={styles.timelineItem}>
    <div className={styles.numberCircle}>{number}</div>
    <div className={styles.content}>
      <h3 className={styles.itemTitle}>{title}</h3>
      <p className={styles.itemDescription}>{description}</p>
    </div>
  </div>
)

export default Approach