import React, { useEffect, useRef } from "react";
import styles from "./Services.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from '@gsap/react'
import { useTitleAnimation } from "../../utils/animations";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);
  const { titleRef, subtitleRef } = useTitleAnimation();

  useGSAP(() => {
    // Service cards animations
    const cards = servicesRef.current.querySelectorAll(`.${styles.serviceCard}`)
    
    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "top center",
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
  }, { scope: servicesRef })

  const services = [
    {
      title: "Corporate Events",
      description:
        "We craft professional and memorable corporate gatherings tailored to reflect your brand. From planning to execution, we ensure success with every detail.",
      bulletPoints: [
        "Award Ceremonies",
        "Conferences",
        "Corporate Events", 
        "Dealers Meet",
        "Team Building & Workshops",
      ],
      bgImage:
        "https://ortcoin.org/wp-content/uploads/2024/03/customer-support-box-2.webp",
      contentImage: "/images/services/AWARD CEREMONIES.jpg",
    },
    {
      title: "Brand Activations & Promotions",
      description:
        "Our activations and promotions creatively bring your brand to life. We design campaigns that captivate audiences and amplify your market presence.",
      bulletPoints: [
        "BTL Activations",
        "Mall Promotions", 
        "Retail & Other Expos",
        "Road Shows",
        "Trade Shows & Fairs",
      ],
      bgImage:
        "https://ortcoin.org/wp-content/uploads/2024/03/Customer-support-software-Support-BG-2.webp",
      contentImage: "/images/services/MALL PROMOTIONS.jpg",
    },
    {
      title: "Product & Brand Launches",
      description:
        "Launch your products with precision and creativity. We ensure your brand's big moment is impactful, memorable, and perfectly aligned with your goals.",
      bulletPoints: [
        "Product Launches",
        "Inaugurations",
      ],
      bgImage:
        "https://ortcoin.org/wp-content/uploads/2024/03/customer-support-box-2.webp",
      contentImage: "/images/services/PRODUCT LAUNCHES.jpg",
    },
    {
      title: "Public & Sports Events",
      description:
        "From thrilling sports events to large-scale public gatherings, we design experiences that inspire, engage, and leave lasting impressions.",
      bulletPoints: [
        "Public Events",
        "Sports Events",
      ],
      bgImage:
        "https://ortcoin.org/wp-content/uploads/2024/03/customer-support-box-2.webp",
      contentImage: "/images/services/PUBLIC EVENTS.jpg",
    },
    {
      title: "Exhibitions & Displays",
      description:
        "Make your mark with stunning exhibition stalls and displays. We focus on creative designs and flawless execution for impactful brand visibility.",
      bulletPoints: [
        "Stalls & Exhibitions",
        "Trade Shows & Fairs",
      ],
      bgImage:
        "https://ortcoin.org/wp-content/uploads/2024/03/customer-support-box-2.webp",
      contentImage: "/images/services/TRADE SHOW & FAIRS, ETC.jpg",
    },
    // ... other services remain the same, just change 'image' to 'bgImage'
  ];

  const CheckmarkIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.checkmark}
    >
      <path
        d="M13.3334 4L6.00008 11.3333L2.66675 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className={styles.services} id='services' role="region" aria-label="Our services">
      <div className={styles.headerSection}>
        <h2 className='title1' ref={titleRef}>Our Services</h2>
        <p className='subTitle1' ref={subtitleRef}>Comprehensive Solutions, Seamless Experiences</p>
      </div>
      <div className={styles.servicesContainer} ref={servicesRef} role="list">
        {services.map((service, index) => (
          <div
            key={index}
            className={styles.serviceCard}
            role="listitem"
            aria-labelledby={`service-title-${index}`}
          >
            <div className={`${styles.cardContent} ${index % 2 !== 0 ? styles.reverse : ''}`}>
              <div className={styles.textContent}>
                <h3 id={`service-title-${index}`}>{service.title}</h3>
                <p>{service.description}</p>
                <ul className={styles.bulletPoints} role="list" aria-label={`Features of ${service.title}`}>
                  {service.bulletPoints.map((point, idx) => (
                    <li key={idx} role="listitem">
                      <CheckmarkIcon aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.imageContent}>
                <Image
                  src={service.contentImage}
                  alt={`Illustration of ${service.title}`}
                  width={500}
                  height={320}
                  layout="fixed"
                  objectFit="cover"
                  borderRadius={16}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
