import React, { useState, useRef, useEffect } from 'react';
import styles from './Gallery.module.css';

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
    <div className={styles['gallery-container']} id='gallery'>
      <h2 className='title1' style={{textAlign: 'center'}}>Events Gallery</h2>
      <p className='subTitle1' style={{textAlign: 'center'}}>Capturing moments that tell your story</p>
      
      <div className={styles['gallery-columns-container']}>
        {[column1, column2, column3].map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={styles['gallery-column']}
            onMouseEnter={() => setPausedColumn(columnIndex)}
            onMouseLeave={() => setPausedColumn(null)}
          >
            <div className={`${styles['column-scroll']} ${pausedColumn === columnIndex ? styles['paused'] : ''}`}>
              {/* Double the images for seamless scrolling */}
              {[...column, ...column].map((image, index) => (
                <div 
                  key={`${image.id}-${index}`}
                  className={styles['gallery-item']}
                  onClick={() => handleImageClick(image.id - 1)}
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
        <div className={styles.modal}>
          <div className={styles['modal-content']}>
            <button className={styles['close-button']} onClick={handleClose}>&times;</button>
            <button className={styles['nav-button'] + ' ' + styles.prev} onClick={handlePrevious}>&lt;</button>
            <button className={styles['nav-button'] + ' ' + styles.next} onClick={handleNext}>&gt;</button>
            <img 
              src={images[selectedImage].url} 
              alt={images[selectedImage].alt} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 