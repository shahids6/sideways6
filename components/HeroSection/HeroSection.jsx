import React, { memo } from "react";
import styles from "./heroSection.module.css";
import Link from "next/link";

const ScrollArrow = memo(() => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.scrollArrow}
    aria-hidden="true"
    role="img"
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
));

ScrollArrow.displayName = 'ScrollArrow';

const HeroSection = () => {
  return (
    <section className={styles.heroContainer} id="home" role="region" aria-label="Hero section">
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
          preload="auto"
          poster="/video-placeholder.png"
          aria-hidden="true"
        >
          <source src="/backgroundVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.overlay} aria-hidden="true"></div>

      <div className={styles.heroContent} role="region" aria-label="Hero content">
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            <span className={styles.titleText}>Events | Exhibitions |</span>
            <br />
            <span className={styles.titleText}>Activations</span>
          </h1>

          <p className={styles.subtitle}>
            Your next big event deserves the best-
            <br /> let’s connect and make it happen! <br />
          </p>

          <Link href="#contact">
            <button className={styles.primaryBtn} aria-label="Get in touch with us">
              Get In Touch
            </button>
          </Link>

          <Link href="#achievements" aria-label="Scroll to achievements section">
            <div className={styles.scrollDown}>
              <ScrollArrow />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
