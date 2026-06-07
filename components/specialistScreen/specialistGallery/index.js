import React, { useEffect, useState, useCallback } from "react";
import classes from "./specialistGallery.module.css";

const INITIAL_VISIBLE = 9;

function SpecialistGallery({ profile }) {
  const images = profile?.gallery_images || [];
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const firstName = profile?.specialist_name?.split(" ")[0] || "your specialist";

  if (!images.length) return null;

  const visibleImages = expanded ? images : images.slice(0, INITIAL_VISIBLE);
  const canShowMore = images.length > INITIAL_VISIBLE && !expanded;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <section className={classes.gallery_section} id="gallery">
      <div className={classes.container}>
        <h2>On the Ground with {firstName}</h2>

        <div className={classes.masonry}>
          {visibleImages.map((img, idx) => (
            <button
              type="button"
              key={idx}
              className={classes.tile}
              onClick={() => setLightboxIndex(idx)}
              aria-label={img.caption || `Photo ${idx + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.caption || ""} loading="lazy" />
              {img.caption && (
                <span className={classes.caption}>{img.caption}</span>
              )}
            </button>
          ))}
        </div>

        {profile?.gallery_quote && (
          <figure className={classes.editorial_quote}>
            <blockquote>“{profile.gallery_quote}”</blockquote>
            <figcaption>— {profile?.specialist_name}</figcaption>
          </figure>
        )}

        {canShowMore && (
          <div className={classes.show_more_wrapper}>
            <button
              type="button"
              className={classes.show_more}
              onClick={() => setExpanded(true)}
            >
              See More Photos
            </button>
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <div
          className={classes.lightbox}
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className={classes.lightbox_close}
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close"
          >
            ×
          </button>
          <button
            type="button"
            className={classes.lightbox_prev}
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <figure
            className={classes.lightbox_inner}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].caption || ""}
            />
            {images[lightboxIndex].caption && (
              <figcaption>{images[lightboxIndex].caption}</figcaption>
            )}
          </figure>
          <button
            type="button"
            className={classes.lightbox_next}
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

export default SpecialistGallery;
