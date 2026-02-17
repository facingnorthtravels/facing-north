import React, { useEffect, useRef } from "react";
import styles from "./videoModal.module.css";

/**
 * Reusable VideoModal
 * Props:
 * - open: boolean
 * - onClose: () => void
 * - videoUrl: string (YouTube embed or watch URL, Vimeo, or already embed URL)
 */
const toEmbedUrl = (url) => {
  if (!url) return "";
  try {
    const u = new URL(url);
    // YouTube watch URL -> embed
    if (u.hostname.includes("youtube.com")) {
      const vid = u.searchParams.get("v");
      if (vid) return `https://www.youtube.com/embed/${vid}`;
      // if path contains /embed already
      if (u.pathname.includes("/embed/")) return url;
    }
    // youtu.be short link
    if (u.hostname === "youtu.be") {
      const vid = u.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${vid}`;
    }
    // Vimeo short handling (vimeo.com/<id>)
    if (u.hostname.includes("vimeo.com") && !u.hostname.includes("player.")) {
      const vid = u.pathname.split("/").filter(Boolean).pop();
      return `https://player.vimeo.com/video/${vid}`;
    }
    return url;
  } catch (e) {
    return url;
  }
};

const VideoModal = ({ open, onClose, videoUrl, title = "Video" }) => {
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // focus close button for accessibility
    setTimeout(() => closeBtnRef.current?.focus(), 50);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const embedSrc = toEmbedUrl(videoUrl);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={styles.modal}
      onClick={(e) => {
        // click outside content closes
        if (e.target === overlayRef.current) onClose();
      }}
      ref={overlayRef}
    >
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button
            aria-label="Close video"
            className={styles.close}
            onClick={onClose}
            ref={closeBtnRef}
          >
            ×
          </button>
        </div>

        <div className={styles.videoWrapper}>
          {/* Use iframe with responsive wrapper */}
          <iframe
            title={title}
            src={embedSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
