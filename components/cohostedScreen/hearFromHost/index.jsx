import React, { useState } from "react";
import classes from "./hearFromHost.module.css";

function HearFromHost({ profile }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!profile?.introURL) return null;

  const getYoutubeId = (url) => {
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
      if (u.hostname === "youtu.be") return u.pathname.replace("/", "");
      return null;
    } catch (e) {
      return null;
    }
  };

  const getVimeoId = (url) => {
    try {
      const match = url.match(/vimeo\.com\/(\d+)/);
      return match ? match[1] : null;
    } catch (e) {
      return null;
    }
  };

  const isCloudinaryVideo = (url) => {
    return url.includes("player.cloudinary.com");
  };

  const isLocalVideo = (url) => {
    return url.startsWith("/") || url.startsWith("./") || url.includes("/assets/");
  };

  const ytId = getYoutubeId(profile.introURL);
  const vimeoId = getVimeoId(profile.introURL);
  const isCloudinary = isCloudinaryVideo(profile.introURL);
  const isLocal = isLocalVideo(profile.introURL);

  // Get thumbnail
  let thumbnailUrl = null;
  if (ytId) {
    thumbnailUrl = `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`;
  } else if (profile.profileImage) {
    thumbnailUrl = profile.profileImage;
  } else if (profile.heroImage) {
    thumbnailUrl = profile.heroImage;
  }

  // Get embed URL
  let embedUrl = null;
  if (ytId) {
    embedUrl = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`;
  } else if (vimeoId) {
    embedUrl = `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
  } else if (isCloudinary) {
    embedUrl = profile.introURL;
  }

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.header}>
          <h2 className={classes.title}>Hear it from your host</h2>
          <p className={classes.subtitle}>
            Get to know {profile?.name} and discover what makes their adventures unique
          </p>
        </div>

        <div className={classes.videoWrapper}>
          {!isPlaying ? (
            // Thumbnail with play button
            <div
              className={classes.thumbnail}
              onClick={handlePlay}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handlePlay()}
              aria-label={`Play video from ${profile?.name}`}
            >
              {thumbnailUrl ? (
                <img
                  src={thumbnailUrl}
                  alt={`${profile?.name} video thumbnail`}
                  className={classes.thumbnailImage}
                />
              ) : (
                <div className={classes.thumbnailPlaceholder}>
                  <span>Video from {profile?.name}</span>
                </div>
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
                    <circle
                      cx="40"
                      cy="40"
                      r="40"
                      fill="rgba(255, 255, 255, 0.95)"
                    />
                    <path
                      d="M32 26L56 40L32 54V26Z"
                      fill="#286675"
                    />
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
                  <path
                    d="M8 5L8 15L15 10L8 5Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Meet {profile?.name}</span>
              </div>
            </div>
          ) : (
            // Playing video
            <div className={classes.videoPlayer}>
              {isLocal ? (
                <video
                  className={classes.video}
                  controls
                  autoPlay
                  playsInline
                >
                  <source src={profile.introURL} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : embedUrl ? (
                <iframe
                  className={classes.video}
                  src={embedUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${profile?.name} introduction video`}
                />
              ) : null}
            </div>
          )}
        </div>

        <div className={classes.footer}>
          <div className={classes.hostInfo}>
            <img
              src={profile?.profileImage || "/assets/cohosted_profile/placholder_cohost.png"}
              alt={profile?.name}
              className={classes.hostAvatar}
            />
            <div className={classes.hostDetails}>
              <h4>{profile?.name}</h4>
              <p>{profile?.title || "Adventure Guide"}</p>
            </div>
          </div>
          
          {profile?.verified && (
            <div className={classes.verifiedBadge}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#286675" />
                <path
                  d="M6 10L8.5 12.5L14 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Verified Host</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HearFromHost;
