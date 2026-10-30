import React, { useEffect, useRef, useState } from "react";
import classes from "./meetYourHost.module.css";
import { useRouter } from "next/router";
import HostVideo from "./hostVideo";

const MeetYourHost = ({
  host,
  showVideo = false,
  layout,
  videoThumbnail,
  useVideoThumbnail = true,
}) => {
  const router = useRouter();
  // Bio is clamped to 12 lines; "Read more" shows only when it actually overflows
  const descRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const el = descRef.current;
    if (!el || expanded) return;
    const check = () => setOverflows(el.scrollHeight - el.clientHeight > 2);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [expanded, host?.about]);

  if (!host) return null;

  const isStacked = layout === "stacked";

  const handleViewProfile = () => {
    router.push(host.profileUrl || `/cohosted-profile/${host.id}`);
  };

  const imageBlock = (
    <div className={classes.imageSection}>
      <div className={classes.imageWrapper}>
        <img
          src={host.profileImage || host.heroImage || "/assets/placeholder-host.jpg"}
          alt={host.name}
          className={classes.hostImage}
          loading="lazy"
          decoding="async"
        />
        {host.verified && (
          <div className={classes.verifiedBadge}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="#286675" />
              <path
                d="M7 12L10.5 15.5L17 9"
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
  );

  return (
    <div
      className={`${classes.container} ${isStacked ? classes.hostJourney : ""}`}
    >
      <div className={`${classes.content} ${isStacked ? classes.stacked : ""}`}>
        {isStacked && imageBlock}
        <div className={classes.textSection}>
          <div className={classes.badge}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                fill="#FFD700"
              />
            </svg>
            <span>Expert Host</span>
          </div>

          <h2 className={classes.title}>Meet Your Host</h2>

          <div className={classes.hostInfo}>
            <h3 className={classes.hostName}>{host.name}</h3>
            <p className={classes.hostTitle}>{host.title}</p>
          </div>

          <div className={classes.descriptionWrap}>
            <p
              ref={descRef}
              className={`${classes.description} ${expanded ? "" : classes.clamped}`}
            >
              {host.about ||
                `Travel with ${host.name}, an experienced local guide who brings authentic insights and unforgettable experiences to every journey. With deep knowledge of the region and passion for cultural immersion, your adventure will be both safe and memorable.`
              }
              {expanded && (
                <button type="button" className={classes.readToggle} onClick={() => setExpanded(false)}>
                  {" "}Read less
                </button>
              )}
            </p>
            {!expanded && overflows && (
              <button
                type="button"
                className={`${classes.readToggle} ${classes.readMoreInline}`}
                onClick={() => setExpanded(true)}
              >
                <span className={classes.ellipsis}>… </span>Read more
              </button>
            )}
          </div>

          {!showVideo && (
            <button className={classes.profileButton} onClick={handleViewProfile}>
              View Profile
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>

        {!isStacked && imageBlock}
      </div>

      {showVideo && host.introURL && (
        <div className={classes.videoRow}>
          <HostVideo
            host={host}
            thumbnailImage={videoThumbnail}
            useThumbnailImage={useVideoThumbnail}
          />
        </div>
      )}
    </div>
  );
};

export default MeetYourHost;
