'use-client'
import React, { useRef, useState } from 'react';
import styles from './Achievements.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  { 
    number: '1950+', 
    label: 'Events/Exhibitions',
    image: '/images/beautiful-event.jpg' // Table setup with flowers image
  },
  { 
    number: '5,00,000+', 
    label: 'Attendees',
    image: '/images/services/BTL ACTIVATIONS.jpg' // Wedding ceremony setup image
  },
  { 
    number: '90+', 
    label: 'Happy Clients',
    image: '/images/happy-client.avif' // People celebrating image
  },
  {
    type: 'video',
    label: 'Watch Our Showreel',
    videoUrl: 'https://www.youtube.com/embed/DvZ24LZA6Ko?si=-G3AIEDtafx8E0_z&controls=0&showinfo=0&rel=0&modestbranding=1&autoplay=1',
    thumbnail: 'https://i.ytimg.com/vi/DvZ24LZA6Ko/sddefault.jpg'
  }
];

const Achievements = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState('');
  
  useGSAP(() => {
    // Set initial state for all cards
    cardsRef.current.forEach(card => {
      gsap.from(card, {
        opacity: 1,
        rotateX: 40,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%", 
          end: "top 20%",
          scrub: 2,
          toggleActions: 'play play reverse reverse',
        }
      })
    });

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { scope: containerRef });

  const handleVideoClick = (videoUrl) => {
    setActiveVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveVideo('');
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  
  return (
    <>
      <div className={styles.container} id='achievements' ref={containerRef} role="region" aria-label="Our achievements">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className={`${styles.achievementCard} ${achievement.type === 'video' ? styles.videoCard : ''}`}
            ref={el => cardsRef.current[index] = el}
            role="article"
            aria-labelledby={`achievement-${index}`}
            onClick={achievement.type === 'video' ? () => handleVideoClick(achievement.videoUrl) : undefined}
            style={{ cursor: achievement.type === 'video' ? 'pointer' : 'default' }}
          >
            {achievement.type === 'video' ? (
              <>
                <img 
                  src={achievement.thumbnail} 
                  alt={`Thumbnail for ${achievement.label}`}
                  className={styles.backgroundImage}
                  aria-hidden="true"
                />
                <div className={styles.playButton}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="rgba(0, 0, 0, 0.7)"/>
                    <path d="M25 20L40 30L25 40V20Z" fill="white"/>
                  </svg>
                </div>
              </>
            ) : (
              <img 
                src={achievement.image} 
                alt={`Illustration for ${achievement.label}`}
                className={styles.backgroundImage}
                aria-hidden="true"
              />
            )}
            <div className={styles.content}>
              {achievement.type === 'video' ? (
                <div className={styles.label} role="text">{achievement.label}</div>
              ) : (
                <>
                  <div className={styles.number} id={`achievement-${index}`} role="text">{achievement.number}</div>
                  <div className={styles.label} role="text">{achievement.label}</div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modal} onClick={handleModalClick}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={closeModal} aria-label="Close video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DvZ24LZA6Ko?si=-G3AIEDtafx8E0_z&controls=0&showinfo=0&rel=0&modestbranding=1&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Achievements; 
