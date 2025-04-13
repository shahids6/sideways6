import React, { useState, useRef, useEffect } from "react";
import styles from "./Gallery.module.css";
import { useTitleAnimation } from "../../utils/animations";

// Function to generate image objects dynamically
const generateGalleryImages = () => {
  // List of all available images in the gallery-images directory
  const imageFiles = [
    "a1.JPG",
    "a2.JPG",
    "a3.JPG",
    "a4.JPG",
    "a5.JPG",
    "a6.JPG",
    "a7.jpg",
    "a8.jpg",
    "a9.jpg",
    "a10.JPG",
    "a11.JPG",
    "a12.JPG",
    "a13.JPG",
    "a14.JPG",
    "a15.JPG",
    "a16.JPG",
    "a17.JPG",
    "a18.JPG",
    "a19.JPG",
    "a20.JPG",
    "a21.JPG",
    "a22.JPG",
    "a23.JPG",
    "a24.JPG",
    "a25.JPG",
    "a26.JPG",
    "a27.JPG",
    "a28.JPG",
    "a29.JPG",
    "a30.jpg",
    "a31.JPG",
    "a32.jpg",
  ];

  return imageFiles.map((filename, index) => ({
    id: index + 1,
    url: `/images/gallery-images/${filename}`,
    alt: `Gallery image ${index + 1}`,
  }));
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [pausedColumn, setPausedColumn] = useState(null);
  const { titleRef, subtitleRef } = useTitleAnimation();

  // Generate images array dynamically
  const images = generateGalleryImages();

  // Split images into 3 columns
  const column1 = images.slice(0, Math.ceil(images.length / 3));
  const column2 = images.slice(
    Math.ceil(images.length / 3),
    Math.ceil(images.length / 3) * 2
  );
  const column3 = images.slice(Math.ceil(images.length / 3) * 2);

  // Add keyboard event handler
  const handleKeyDown = (e) => {
    if (selectedImage !== null) {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        handleClose();
      }
    }
  };

  // Add and remove event listener when modal opens/closes
  useEffect(() => {
    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  const handleImageClick = (index) => {
    // Prevent background scrolling
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    setSelectedImage(index);
  };

  const handleClose = () => {
    // Restore scrolling
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      className={styles["gallery-container"]}
      id="gallery"
      role="region"
      aria-label="Events gallery"
    >
      <h2 className="title1" style={{ textAlign: "center" }} ref={titleRef}>
        Events Gallery
      </h2>
      <p
        className="subTitle1"
        style={{ textAlign: "center" }}
        ref={subtitleRef}
        role="text"
      >
        Capturing moments that tell your story
      </p>

      <div
        className={styles["gallery-columns-container"]}
        role="list"
        aria-label="Gallery images"
      >
        {[column1, column2, column3].map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={styles["gallery-column"]}
            onMouseEnter={() => setPausedColumn(columnIndex)}
            onMouseLeave={() => setPausedColumn(null)}
            role="list"
            aria-label={`Gallery column ${columnIndex + 1}`}
          >
            <div
              className={`${styles["column-scroll"]} ${
                columnIndex === 1 ? styles["second-column"] : ""
              } ${pausedColumn === columnIndex ? styles["paused"] : ""}`}
            >
              {[...column, ...column].map((image, index) => (
                <div
                  key={`${image.id}-${index}`}
                  className={styles["gallery-item"]}
                  onClick={() => handleImageClick(image.id - 1)}
                  role="listitem"
                  aria-label={image.alt}
                  tabIndex="0"
                >
                  <div className={styles["image-wrapper"]}>
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
          <div className={styles["modal-content"]}>
            <button
              className={styles["close-button"]}
              onClick={handleClose}
              aria-label="Close image preview"
            >
              &times;
            </button>
            <button
              className={styles["nav-button"] + " " + styles.prev}
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={35}
                height={35}
                viewBox="0 0 60 60"
                fill="none"
                style={{rotate: '-180deg'}}
              >
                <path
                  d="M37.6539 30C37.6539 30.3013 37.6058 30.5817 37.5096 30.8413C37.4135 31.1009 37.2484 31.3477 37.0145 31.5817L25.7789 42.8172C25.4328 43.1634 24.9977 43.3405 24.4736 43.3485C23.9496 43.3565 23.5065 43.1795 23.1443 42.8172C22.7822 42.4551 22.6011 42.016 22.6011 41.5C22.6011 40.984 22.7822 40.5449 23.1443 40.1827L33.3271 30L23.1443 19.8172C22.7982 19.4711 22.6211 19.036 22.6131 18.512C22.6051 17.988 22.7822 17.5449 23.1443 17.1827C23.5065 16.8205 23.9456 16.6394 24.4616 16.6394C24.9776 16.6394 25.4167 16.8205 25.7789 17.1827L37.0145 28.4183C37.2484 28.6523 37.4135 28.8991 37.5096 29.1587C37.6058 29.4183 37.6539 29.6987 37.6539 30Z"
                  fill={'black'}
                />
              </svg>
            </button>
            <button
              className={styles["nav-button"] + " " + styles.next}
              onClick={handleNext}
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={35}
                height={35}
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M37.6539 30C37.6539 30.3013 37.6058 30.5817 37.5096 30.8413C37.4135 31.1009 37.2484 31.3477 37.0145 31.5817L25.7789 42.8172C25.4328 43.1634 24.9977 43.3405 24.4736 43.3485C23.9496 43.3565 23.5065 43.1795 23.1443 42.8172C22.7822 42.4551 22.6011 42.016 22.6011 41.5C22.6011 40.984 22.7822 40.5449 23.1443 40.1827L33.3271 30L23.1443 19.8172C22.7982 19.4711 22.6211 19.036 22.6131 18.512C22.6051 17.988 22.7822 17.5449 23.1443 17.1827C23.5065 16.8205 23.9456 16.6394 24.4616 16.6394C24.9776 16.6394 25.4167 16.8205 25.7789 17.1827L37.0145 28.4183C37.2484 28.6523 37.4135 28.8991 37.5096 29.1587C37.6058 29.4183 37.6539 29.6987 37.6539 30Z"
                  fill={'black'}
                />
              </svg>
            </button>
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
