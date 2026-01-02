import React, { useRef, useEffect } from 'react';
import styles from './Approach.module.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTitleAnimation } from '../../utils/animations';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ limitCallbacks: true });

const Approach = () => {
  const sectionRef = useRef(null);
  const { titleRef, subtitleRef } = useTitleAnimation();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia(); // Match media for responsiveness

      mm.add(
        {
          isMobile: "(max-width: 768px)",
          isDesktop: "(min-width: 769px)",
        },
        (context) => {
          let { isMobile } = context.conditions;
          const contentRows = sectionRef.current.querySelectorAll(`.${styles.contentRow}`);

          contentRows.forEach((row, index) => {
            const img = row.querySelector('img');
            const text = row.querySelectorAll('h3, p');
            const isEven = index % 2 === 0;

            // Set up GSAP timeline
            gsap.timeline({
              scrollTrigger: {
                trigger: row,
                start: 'top 90%',
                end: 'top 20%',
                scrub: 1,
                toggleActions: 'play play reverse reverse',
              },
            })
              .from(img, {
                x: isEven ? (isMobile ? 150 : 200) : (isMobile ? -150 : -200),
                rotation: isEven ? 5 : -5,
                opacity: 0,
                duration: 1.2,
              })
              .from(text, {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
              });
          });
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Optimized Resize Event
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.approach} ref={sectionRef} role="region" aria-label="Our approach">
      {/* Header section */}
      <div className={styles.header} role="banner">
        <h2 className='title1' ref={titleRef}>Our Approach</h2>
        <p className='subTitle1' ref={subtitleRef} role="text">
          Event execution with precision, passion, and perfection.
        </p>
      </div>

      {/* Sections */}
      {[
        {
          title: 'Attentive Ears',
          text: 'We believe true communication lies in understanding what remains unspoken.',
          img: '/images/services/CONFERENCES.jpg',
          alt: 'Attentive Ears',
        },
        {
          title: 'Swift Enthusiasts',
          text: 'We go above and beyond to bring ideas to life, ensuring swift execution from concept to completion.',
          img: '/images/services/CORPORATE EVENTS.jpg',
          alt: 'Swift Enthusiasts',
        },
        {
          title: 'Creative Fixers',
          text: 'We understand that solving problems requires a fresh perspective, not the same mindset that created them.',
          img: '/images/services/DEALERS MEET.jpg',
          alt: 'Creative Fixers',
        },
        {
          title: 'Proficiency Pioneers',
          text: 'Our expertise shines through in our innovative ideation and flawless execution, driven by a dedicated team of passionate professionals.',
          img: '/images/services/PRODUCT LAUNCHES.jpg',
          alt: 'Proficiency Pioneers',
        },
      ].map(({ title, text, img, alt }, index) => (
        <div className={styles.contentRow} key={index} role="article" aria-labelledby={`approach-title-${index}`}>
          {index % 2 !== 0 ? (
            <>
              <div className={styles.leftContent} style={{ flex: '0 0 55%' }}>
                <img src={img} alt={alt} className={styles.approachImage} aria-hidden="true" />
              </div>
              <div className={styles.rightContent}>
                <h3 id={`approach-title-${index}`}>{title}</h3>
                <p role="text">{text}</p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.leftContent}>
                <h3 id={`approach-title-${index}`}>{title}</h3>
                <p role="text">{text}</p>
              </div>
              <div className={styles.rightContent} style={{ flex: '0 0 55%' }}>
                <img src={img} alt={alt} className={styles.approachImage} aria-hidden="true" />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default Approach;
