import React from "react";
import styles from "./Services.module.css";
import Image from "next/image";
// import corporateImg from '/images/corporate-events.jpg' // Add your background images
// import brandImg from '../../assets/brand-activations.jpg'
// import productImg from '../../assets/product-launches.jpg'
// import sportsImg from '../../assets/sports-events.jpg'
// import exhibitionImg from '../../assets/exhibitions.jpg'

const Services = () => {
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
      contentImage: "/images/corporate-events.jpg",
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
      contentImage: "/images/corporate-events.jpg",
    },
    {
      title: "Product & Brand Launches",
      description:
        "Launch your products with precision and creativity. We ensure your brand’s big moment is impactful, memorable, and perfectly aligned with your goals.",
      bulletPoints: [
        "Product Launches",
        "Inaugurations",
      ],
      bgImage:
        "https://ortcoin.org/wp-content/uploads/2024/03/customer-support-box-2.webp",
      contentImage: "/images/corporate-events.jpg",
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
      contentImage: "/images/corporate-events.jpg",
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
      contentImage: "/images/corporate-events.jpg",
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
        <h2>Our Services</h2>
        <p className={styles.subtitle}>Comprehensive Solutions, Seamless Experiences</p>
      </div>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div
            key={index}
            className={styles.serviceCard}
            style={{ backgroundImage: `url(${service.bgImage})` }}
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
