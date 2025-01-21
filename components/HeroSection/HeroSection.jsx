import React, { useEffect, useState } from "react";
import styles from "./heroSection.module.css";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.heroContainer} id="home">
      <div className={styles.videoBg}>
        <video autoPlay loop muted playsInline className={styles.videoElement}>
          <source src="/backgroundVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.heroContent}>
        <div className={styles.titleContainer}>
          <h1 className={`${styles.title} ${isVisible ? styles.visible : ""}`}>
            Crafting Extraordinary
            <br />
            Events
          </h1>

          <p
            className={`${styles.subtitle} ${isVisible ? styles.visible : ""}`}
          >
            With expertise, excellence, and a proven track record,
            <br /> we design innovative, large-scale events <br /> that
            captivate audiences and strengthen brands.
          </p>

          <Link href="#contact">
            <button className={styles.primaryBtn}>Get In Touch</button>
          </Link>

          <Link href="#achievements">
            <div className={styles.scrollDown}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.scrollArrow}
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M8 10L12 14L16 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
