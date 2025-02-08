import React, { useRef } from 'react';
import styles from './Achievements.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
    { 
      number: '400+', 
      label: 'Beautiful Events',
      image: '/images/beautiful-event.jpg' // Table setup with flowers image
    },
    { 
      number: '60+', 
      label: 'Successful Activations',
      image: '/images/services/BTL ACTIVATIONS.jpg' // Wedding ceremony setup image
    },
    { 
      number: '50+', 
      label: 'Happy Clients',
      image: '/images/happy-client.avif' // People celebrating image
    },
  ];

const Achievements = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const isMobile = window.innerWidth <= 578;

    // Set initial state for all cards
    cardsRef.current.forEach(card => {
      gsap.set(card, {
        opacity: 0,
        rotateX: 40,
        transformPerspective: 1200,
        scale: 1,
        rotate: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformOrigin: 'unset'
      });
    });

    if (isMobile) {
      // Mobile view - animate cards individually
      cardsRef.current.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top bottom",
          end: "top center",
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              rotateX: 0,
              y: 0,
              duration: 1,
              ease: "power2.out",
            });
          },
          onLeave: () => {
            gsap.to(card, {
              opacity: 0,
              rotateX: 40,
              duration: 1,
              ease: "power2.out",
            });
          },
          onEnterBack: () => {
            gsap.to(card, {
              opacity: 1,
              rotateX: 0,
              duration: 1,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(card, {
              opacity: 0,
              rotateX: 40,
              duration: 1,
              ease: "power2.out",
            });
          }
        });
      });
    } else {
      // Desktop view - animate all cards together
      gsap.to(cardsRef.current, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", 
          end: "top 70%",
          toggleActions: "play none none reverse"
        }
      })
    }

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { scope: containerRef });
  
  return (
    <div className={styles.container} id='achievements' ref={containerRef}>
      {achievements.map((achievement, index) => (
        <div 
          key={index} 
          className={styles.achievementCard}
          ref={el => cardsRef.current[index] = el}
        >
          <img 
            src={achievement.image} 
            alt={achievement.label}
            className={styles.backgroundImage}
          />
          <div className={styles.content}>
            <div className={styles.number}>{achievement.number}</div>
            <div className={styles.label}>{achievement.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements; 