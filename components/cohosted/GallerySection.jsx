import React, { useState } from "react";
import classes from "../../pages/community-trips/community-trips.module.css";
import GalleryModal from "../sharedComponents/GalleryModal";

const images = [
  { src: "/assets/cohosted/Adventure_gallery1.jpg", alt: "Adventure 1", className: classes.image1 },
  { src: "/assets/cohosted/Adventure_gallery2.jpg", alt: "Adventure 2", className: classes.image2 },
  { src: "/assets/cohosted/Adventure_gallery13.jpg", alt: "Adventure 3", className: classes.image3 },
  { src: "/assets/cohosted/Adventure_gallery4.jpg", alt: "Adventure 4", className: classes.image4 },
  { src: "/assets/cohosted/Adventure_gallery5.jpg", alt: "Adventure 5", className: classes.image5 },
  { src: "/assets/cohosted/Adventure_gallery6.jpg", alt: "Adventure 6", className: classes.image6 }
];

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
        <div className={classes.sectionHeader}>
          <h2>Adventure Gallery</h2>
        </div>
        <div className={classes.gallery}>
          {images.map((img, idx) => (
            <img 
              key={idx}
              src={img.src}
              alt={img.alt}
              className={`${classes.galleryImage} ${img.className}`}
              onClick={() => openGallery(idx)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openGallery(idx)}
            />
          ))}
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
