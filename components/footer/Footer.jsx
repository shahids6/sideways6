import styles from './style.module.css';
import brandLogo from '../../public/brand-logo.svg'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo" aria-label="Site footer">
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.footerHeader}>
          <div className={styles.logo}>
            <Image src={brandLogo} alt="Sideways 6 Logo" />
          </div>
          <nav className={styles.footerNav} aria-label="Footer navigation">
            <ul role="list">
              <li role="listitem"><a href="#home" aria-label="Navigate to home section">Home</a></li>
              <li role="listitem"><a href="#about" aria-label="Navigate to about section">About Us</a></li>
              <li role="listitem"><a href="#services" aria-label="Navigate to services section">Services</a></li>
              <li role="listitem"><a href="#gallery" aria-label="Navigate to gallery section">Gallery</a></li>
              <li role="listitem"><a href="#contact" aria-label="Navigate to contact section">Contact</a></li>
            </ul>
          </nav>
        </div>

        <hr className={styles.divider} aria-hidden="true" />

        {/* Message Section */}
        <div className={styles.messageSection} role="region" aria-label="Important message">
          <p>
            The most important part of an event is to create a safe, memorable, 
            and seamless experience for the attendees. If you have any kind of 
            questions please call or contact us.
          </p>
        </div>

        <div className={styles.footerBottom}>
          <p role="contentinfo" aria-label="Copyright information">&copy; 2024 Sideways 6. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 