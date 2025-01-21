import styles from './style.module.css';
import brandLogo from '../../public/brand-logo.svg'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.footerHeader}>
          <div className={styles.logo}>
            <Image src={brandLogo} alt="Company Logo" />
          </div>
          <nav className={styles.footerNav}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">services</a></li>
              <li><a href="#gallery">gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>

        <hr className={styles.divider} />

        {/* Message Section */}
        <div className={styles.messageSection}>
          <p>
            The most important part of an event is to create a safe, memorable, 
            and seamless experience for the attendees. If you have any kind of 
            questions please call or contact us.
          </p>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 