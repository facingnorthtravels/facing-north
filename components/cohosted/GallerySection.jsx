import React, { useState } from "react";
import classes from "../../pages/community-trips/community-trips.module.css";
import GalleryModal from "../sharedComponents/GalleryModal";

const images = Array.from({ length: 12 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/assets/cohosted/gallery/gallery-${n}.webp`,
    alt: `Community trip moment ${i + 1}`,
  };
});

const GallerySection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openGallery = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  return (
    <>
      <section className={classes.gallerySection}>
        <div className={classes.sectionContent}>
          <div className={classes.howHeader}>
            <span className={classes.howEyebrow}>Moments</span>
            <h2 className={classes.howTitle}>Stories from the road</h2>
            <p className={classes.howIntro}>
              A glimpse into the landscapes, faces and quiet moments our
              travellers have shared across the mountains of Pakistan.
            </p>
          </div>

          <div className={classes.gallery}>
            {images.map((img, idx) => (
              <div
                key={idx}
                className={classes.galleryItem}
                onClick={() => openGallery(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openGallery(idx)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={classes.galleryImage}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <GalleryModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        images={images}
        currentImage={selectedImageIndex}
      />
    </>
  );
};

export default GallerySection;
