import React, { useEffect, useRef } from 'react'
import styles from './ApproachFiller.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useTitleAnimation } from '../../utils/animations'

gsap.registerPlugin(ScrollTrigger);

const ApproachFiller = () => {
  const containerRef = useRef(null)
  const { titleRef } = useTitleAnimation()
  const cardsRef = useRef([])
  const wrapperRef = useRef(null)

  useGSAP(() => {
    // Title animation

    // Cards animations
    cardsRef.current.forEach((card, index) => {
      // Set initial state
      gsap.from(card, {
        opacity: .5,
        rotateX: 35,
        scale: 1,
        rotate: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformOrigin: 'unset',
        scrollTrigger: {
          trigger: card,
          start: "top 100%",
          end: "top 20%",
          scrub: 1,
          toggleActions: 'play play reverse reverse',
        }
      })
    })

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, { scope: containerRef }, [titleRef, cardsRef]);

  return (
    <div className={styles.container} ref={containerRef} role="region" aria-label="Our approach highlights">
      <div className={styles.videoBg} aria-hidden="true">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={styles.videoElement}
          width="1920"
          height="1080"
          loading="lazy"
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/backgroundVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.overlay} aria-hidden="true"></div>
      <div className={styles.wrapper} ref={wrapperRef}>
        <h2 className={`${styles.title} title1`} style={{textAlign: 'center'}} ref={titleRef}>
          We Create Event <br /> <span>Solutions With</span>
        </h2>
        
        <div className={styles.grid} role="list">
          {/* Ideation */}
          <div className={styles.card} ref={el => cardsRef.current[0] = el} role="listitem">
            <div className={styles.iconWrapper} aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.icon} aria-hidden="true" role="img">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle} id="ideation-title">Ideation</h3>
            <p className={styles.description} role="text">Crafting unique concepts to transform complex client briefs into exceptional events.</p>
          </div>

          {/* Event Production */}
          <div className={styles.card} ref={el => cardsRef.current[1] = el} role="listitem">
            <div className={styles.iconWrapper} aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.icon} aria-hidden="true" role="img">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className={styles.cardTitle} id="production-title">Event Production</h3>
            <p className={styles.description} role="text">Our unified strategy crafts events with elegance and grandeur, delivering exceptional flair.</p>
          </div>

          {/* Branding and Design */}
          <div className={styles.card} ref={el => cardsRef.current[2] = el} role="listitem">
            <div className={styles.iconWrapper} aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.icon} aria-hidden="true" role="img">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className={styles.cardTitle} id="branding-title">Branding and Design</h3>
            <p className={styles.description} role="text">We shape the identity of your event, creating a memorable experience that resonates with attendees.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApproachFiller