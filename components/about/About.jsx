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
              <span>Sideways 6, a proud unit of AD6 Advertising, is a vibrant
              collective of diverse yet like-minded individuals driven by a
              shared passion for innovation and excellence. Our guiding
              principles—'Delivering Unique Service' and 'Great Ideas'—form the
              foundation of everything we do, all delivered with unwavering
              enthusiasm and a smile.</span>
            </p>
            <p className={styles.aboutText2} role="text">
              <span>At Sideways 6, building brands we love isn't just our mission—it's
              our art. We thrive on pushing boundaries, thinking differently,
              and crafting experiences that resonate deeply with our clients'
              brand values and integrity. From concept to execution, we approach
              event planning with unparalleled creativity and precision,
              ensuring each project is as unique and memorable as the story
              behind it.</span>
            </p>
            {/* <p className={styles.aboutText3}>
              <span>With a wealth of expertise, a commitment to excellence, and a
              track record of success, we are equipped to design and execute
              innovative, large-scale events that leave lasting impressions.
              Year after year, we bring fresh ideas to life, creating
              extraordinary moments that captivate audiences and strengthen
              brand identities.</span>
            </p> */}
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
