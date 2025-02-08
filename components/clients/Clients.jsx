import React, { useEffect, useState } from 'react';
import styles from './Clients.module.css';
import Image from 'next/image';
import { useTitleAnimation } from '../../utils/animations';

const Clients = () => {
  const [logos, setLogos] = useState([
    '/images/clients/01.png',
    '/images/clients/02.png',
    '/images/clients/03.png',
    '/images/clients/04.png',
    '/images/clients/05.png',
    '/images/clients/06.png',
    '/images/clients/07.png',
    '/images/clients/08.png',
    '/images/clients/09.png',
    '/images/clients/10.png',
    '/images/clients/11.png',
    '/images/clients/12.png',
    '/images/clients/13.png',
    '/images/clients/14.png',
    '/images/clients/15.png',
    '/images/clients/16.png',
    '/images/clients/17.png',
    '/images/clients/18.png',
    '/images/clients/19.png',
    '/images/clients/20.png',
  ]);
  const [visibleLogos, setVisibleLogos] = useState([]);
  const { titleRef } = useTitleAnimation();

  useEffect(() => {
    // Shuffle logos when component mounts
    const shuffledLogos = [...logos].sort(() => Math.random() - 0.5);
    setLogos(shuffledLogos);

    // Start revealing logos one by one
    const revealLogos = () => {
      let timeouts = [];
      shuffledLogos.forEach((_, index) => {
        const timeout = setTimeout(() => {
          setVisibleLogos(prev => [...prev, index]);
        }, 1000 + Math.random() * 2000);
        timeouts.push(timeout);
      });

      // Add animation delays to logo wrappers
      const logoWrappers = document.querySelectorAll(`.${styles.logoWrapper}`);
      logoWrappers.forEach((wrapper, index) => {
        wrapper.style.setProperty('--animation-delay', `${index * 0.2}s`);
      });

      return () => timeouts.forEach(timeout => clearTimeout(timeout));
    };

    // Start the reveal animation when the section is in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        revealLogos();
      }
    });

    const section = document.querySelector(`.${styles.clientsSection}`);
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.clientsSection}>
      <h2 className='title1' ref={titleRef}>Our Prestigious Clients</h2>
      <p className='subTitle1'>Partnering with industry leaders across the globe</p>
      <div className={styles.logoContainer}>
        {logos.map((logo, index) => (
          <div 
            key={index} 
            className={`${styles.logoWrapper} ${visibleLogos.includes(index) ? styles.visible : ''}`}
          >
            <Image
              src={logo}
              alt={`Client Logo ${index + 1}`}
              width={150}
              height={100}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;