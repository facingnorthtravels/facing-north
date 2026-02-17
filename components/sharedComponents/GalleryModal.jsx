import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./galleryModal.module.css";

/**
 * Reusable GalleryModal Component
 * Props:
 * - open: boolean - controls modal visibility
 * - onClose: () => void - callback when modal closes
 * - images: Array<{src: string, alt: string}> - array of images to display
 * - currentImage: number - index of the image to show first (0-based)
 */

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    className={`${styles.arrow} ${styles.arrowNext}`}
    onClick={onClick}
    aria-label="Next image"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className={`${styles.arrow} ${styles.arrowPrev}`}
    onClick={onClick}
    aria-label="Previous image"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);

const GalleryModal = ({ open, onClose, images = [], currentImage = 0 }) => {
  const overlayRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(currentImage);

  // Debug: Log when modal opens
  useEffect(() => {
    if (open) {
      console.log('GalleryModal opened with:', {
        imagesCount: images.length,
        currentImage,
        images
      });
    }
  }, [open, images, currentImage]);

  useEffect(() => {
    if (open && sliderRef.current) {
      // Go to the specified image when modal opens
      sliderRef.current.slickGoTo(currentImage);
      setCurrentSlide(currentImage);
    }
  }, [open, currentImage]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        sliderRef.current?.slickPrev();
      } else if (e.key === "ArrowRight") {
        sliderRef.current?.slickNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose]);

  if (!open) return null;

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    initialSlide: currentImage,
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={styles.modal}
      onClick={(e) => {
        if (e.target === overlayRef.current) {
          onClose();
        }
      }}
      ref={overlayRef}
    >
      <div className={styles.modalContent}>
        {/* Header with close button and counter */}
        <div className={styles.header}>
          <div className={styles.counter}>
            {currentSlide + 1} / {images.length}
          </div>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close gallery"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Slider Container */}
        <div className={styles.sliderWrapper}>
          {images.length > 0 ? (
            <Slider ref={sliderRef} {...settings}>
              {images.map((image, index) => (
                <div key={index} className={styles.slideContainer}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={image.src}
                      alt={image.alt || `Gallery image ${index + 1}`}
                      className={styles.image}
                      onError={(e) => {
                        console.error('Image failed to load:', image.src);
                        e.target.style.display = 'none';
                      }}
                      onLoad={() => console.log('Image loaded:', image.src)}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div style={{ color: 'white', fontSize: '18px' }}>No images to display</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
