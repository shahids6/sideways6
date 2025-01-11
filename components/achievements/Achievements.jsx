import React from 'react';
import styles from './Achievements.module.css';

const Achievements = () => {
  const achievements = [
    { 
      number: '400+', 
      label: 'Beautiful Events',
      image: '/images/beautiful-event.jpg' // Table setup with flowers image
    },
    { 
      number: '60+', 
      label: 'Successful Activations',
      image: '/images/activation.avif' // Wedding ceremony setup image
    },
    { 
      number: '50+', 
      label: 'Happy Clients',
      image: '/images/happy-client.avif' // People celebrating image
    },
  ];

  return (
    <div className={styles.container}>
      {achievements.map((achievement, index) => (
        <div key={index} className={styles.achievementCard}>
          <img 
            src={achievement.image} 
            alt={achievement.label}
            className={styles.backgroundImage}
          />
          <div className={styles.number}>{achievement.number}</div>
          <div className={styles.label}>{achievement.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Achievements; 