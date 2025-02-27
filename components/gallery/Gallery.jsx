import React, { useState, useRef, useEffect } from 'react';
import styles from './Gallery.module.css';
import { useTitleAnimation } from '../../utils/animations';

const images = [
  { id: 1, url: '/images/corporate-events.jpg', alt: 'Neon sign' },
  { id: 2, url: "/images/services/TRADE SHOW & FAIRS, ETC.jpg", alt: 'Portrait' },
  { id: 3, url: "/images/services/PUBLIC EVENTS.jpg", alt: 'Foggy forest' },
  { id: 4, url:  "/images/services/PRODUCT LAUNCHES.jpg", alt: 'Dog portrait' },
  { id: 5, url: "/images/services/MALL PROMOTIONS.jpg", alt: 'Coastal bridge' },
  { id: 6, url: "/images/services/TRADE SHOW & FAIRS, ETC.jpg", alt: 'City at night' },
  { id: 7, url:  "/images/services/PRODUCT LAUNCHES.jpg", alt: 'Sea turtle' },
  { id: 8, url: '/images/corporate-events.jpg', alt: 'Strawberries' },
  { id: 9, url: "/images/services/PUBLIC EVENTS.jpg",alt: 'City bridge' },
  { id: 10, url: "/images/services/MALL PROMOTIONS.jpg", alt: 'Aerial city view' },
  { id: 1, url: '/images/corporate-events.jpg', alt: 'Neon sign' },
  { id: 2, url: "/images/services/TRADE SHOW & FAIRS, ETC.jpg", alt: 'Portrait' },
  { id: 3, url: "/images/services/PUBLIC EVENTS.jpg", alt: 'Foggy forest' },
  { id: 4, url:  "/images/services/PRODUCT LAUNCHES.jpg", alt: 'Dog portrait' },
  { id: 5, url: "/images/services/MALL PROMOTIONS.jpg", alt: 'Coastal bridge' },
  { id: 6, url: "/images/services/TRADE SHOW & FAIRS, ETC.jpg", alt: 'City at night' },
  { id: 7, url:  "/images/services/PRODUCT LAUNCHES.jpg", alt: 'Sea turtle' },
  { id: 8, url: '/images/corporate-events.jpg', alt: 'Strawberries' },
  { id: 9, url: "/images/services/PUBLIC EVENTS.jpg",alt: 'City bridge' },
  { id: 10, url: "/images/services/MALL PROMOTIONS.jpg", alt: 'Aerial city view' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [pausedColumn, setPausedColumn] = useState(null);
  const { titleRef, subtitleRef } = useTitleAnimation();
  
  // Split images into 3 columns
  const column1 = images.slice(0, 7);
  const column2 = images.slice(7, 14);
  const column3 = images.slice(14, 21);

  const handleImageClick = (index) => {
    document.querySelector('body').style.overflowY = 'hidden'
    setSelectedImage(index);
  };

  const handleClose = () => {
    document.querySelector('body').style.overflowY = 'unset'
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className={styles['gallery-container']} id='gallery' role="region" aria-label="Events gallery">
      <h2 className='title1' style={{textAlign: 'center'}} ref={titleRef}>Events Gallery</h2>
      <p className='subTitle1' style={{textAlign: 'center'}} ref={subtitleRef} role="text">Capturing moments that tell your story</p>
      
      <div className={styles['gallery-columns-container']} role="list" aria-label="Gallery images">
        {[column1, column2, column3].map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={styles['gallery-column']}
            onMouseEnter={() => setPausedColumn(columnIndex)}
            onMouseLeave={() => setPausedColumn(null)}
            role="list"
            aria-label={`Gallery column ${columnIndex + 1}`}
          >
            <div className={`${styles['column-scroll']} ${columnIndex === 1 ? styles['second-column'] : ''} ${pausedColumn === columnIndex ? styles['paused'] : ''}`}>
              {[...column, ...column].map((image, index) => (
                <div 
                  key={`${image.id}-${index}`}
                  className={styles['gallery-item']}
                  onClick={() => handleImageClick(image.id - 1)}
                  role="listitem"
                  aria-label={image.alt}
                  tabIndex="0"
                >
                  <div className={styles['image-wrapper']}>
                    <img src={image.url} alt={image.alt} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className={styles.modal} role="dialog" aria-label="Image preview">
          <div className={styles['modal-content']}>
            <button className={styles['close-button']} onClick={handleClose} aria-label="Close image preview">&times;</button>
            <button className={styles['nav-button'] + ' ' + styles.prev} onClick={handlePrevious} aria-label="Previous image">&lt;</button>
            <button className={styles['nav-button'] + ' ' + styles.next} onClick={handleNext} aria-label="Next image">&gt;</button>
            <img 
              src={images[selectedImage].url} 
              alt={images[selectedImage].alt}
              aria-label={`Large preview of ${images[selectedImage].alt}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 