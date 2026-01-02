import React, { useEffect } from "react";
import styles from "./About.module.css"; // You'll need to create this CSS module
import { useTitleAnimation } from "../../utils/animations";

const About = () => {
  const { titleRef, subtitleRef } = useTitleAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll(`.${styles.aboutText1}, .${styles.aboutText2}`);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className={styles.aboutSection} id='about' role="region" aria-label="About us">
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 className="title1" ref={titleRef}><span>About Us</span></h2>
            <p className={styles.aboutText1} ref={subtitleRef} role="text">
              <span>At Sideways 6, we bring creativity and precision to event management,
                delivering impactful corporate events that reflect true brand identity.
                As a leading event management company and trusted event planners,
                we handle everything from event decoration to creating the perfect stage
                for event experiences. Recognised among the top corporate event planners
                in Bangalore, our events company offers seamless events and services,
                making us the go-to corporate event management company in Bangalore.</span>
            </p>
          </div>
          <div className={styles.iframeContainer} role="complementary" aria-label="About us video">
            <iframe
              src="https://www.youtube.com/embed/MFWN6BJmZ4c?si=UlKMNDT6u3E9GfCa"
              title="About Us Video"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              aria-label="About Sideways 6 company video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
