import React, { useState } from "react";
import classes from "./hostVideo.module.css";

function HostVideo({
  host,
  thumbnailImage,
  useThumbnailImage = true,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!host?.introURL) return null;

  const thumbnailUrl = useThumbnailImage
    ? thumbnailImage || host.profileImage || host.heroImage || null
    : null;
  const handlePlay = () => setIsPlaying(true);

  return (
    <div className={classes.videoWrapper}>
      {!isPlaying ? (
        <div
          className={classes.thumbnail}
          onClick={handlePlay}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handlePlay()}
          aria-label={`Play video from ${host.name}`}
        >
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={`${host.name} video thumbnail`}
              className={classes.thumbnailImage}
            />
          ) : (
            <video
              className={classes.thumbnailVideo}
              src={`${host.introURL}#t=0.1`}
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
          )}

          <div className={classes.playOverlay}>
            <div className={classes.playButton}>
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="rgba(255, 255, 255, 0.95)" />
                <path d="M32 26L56 40L32 54V26Z" fill="#286675" />
              </svg>
            </div>
            <div className={classes.playText}>
              <span>Watch Video</span>
            </div>
          </div>

          <div className={classes.videoBadge}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5L8 15L15 10L8 5Z" fill="currentColor" />
            </svg>
            <span>Meet {host.name}</span>
          </div>
        </div>
      ) : (
        <div className={classes.videoPlayer}>
          <video
            className={classes.video}
            controls
            autoPlay
            playsInline
            preload="none"
            poster={thumbnailUrl || undefined}
          >
            <source src={host.introURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default HostVideo;
