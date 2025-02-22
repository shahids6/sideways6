import React, { useEffect, useRef } from "react";
import styles from "./Services.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from '@gsap/react'
import { useTitleAnimation } from "../../utils/animations";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll({
  allowNestedScroll: true,
  lockAxis: false,
  momentum: self => Math.min(3, self.velocityY / 1000), // dynamically control the duration of the momentum when flick-scrolling
  type: "touch,wheel,pointer", // now the page will be drag-scrollable on desktop because "pointer" is in the list
});

const Services = () => {
  const servicesRef = useRef(null);
  const { titleRef, subtitleRef } = useTitleAnimation();

  useGSAP(() => {
    // Header animation
    gsap.from(`.${styles.headerSection}`, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: `.${styles.headerSection}`,
        start: "top bottom",
        end: "top center",
        toggleActions: "play none none reverse"
      }
    })

    // Service cards animations
    const cards = servicesRef.current.querySelectorAll(`.${styles.serviceCard}`)
    
    cards.forEach((card, index) => {
      gsap.set(card, {
        y: 100,
        opacity: 0,
        scale: 0.8
      })

      gsap.to(card, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "top center",
          toggleActions: "play none none reverse"
        }
      })
    })

    return () => {
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
    <section className={styles.services} id='services'>
      <div className={styles.headerSection}>
        <h2 className='title1' ref={titleRef}>Our Services</h2>
        <p className='subTitle1' ref={subtitleRef}>Comprehensive Solutions, Seamless Experiences</p>
      </div>
      <div className={styles.servicesContainer} ref={servicesRef}>
        {services.map((service, index) => (
          <div
            key={index}
            className={styles.serviceCard}
          >
            <div className={`${styles.cardContent} ${index % 2 !== 0 ? styles.reverse : ''}`}>
              <div className={styles.textContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className={styles.bulletPoints}>
                  {service.bulletPoints.map((point, idx) => (
                    <li key={idx}>
                      <CheckmarkIcon />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.imageContent}>
                <Image
                  src={service.contentImage}
                  alt={service.title}
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
