import React from "react";
import classes from "./meetYourHost.module.css";
import { useRouter } from "next/router";

const MeetYourHost = ({ host }) => {
  const router = useRouter();

  if (!host) return null;

  const handleViewProfile = () => {
    router.push(`/cohosted-profile/${host.id}`);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
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

          <p className={classes.description}>
            {host.about || 
              `Travel with ${host.name}, an experienced local guide who brings authentic insights and unforgettable experiences to every journey. With deep knowledge of the region and passion for cultural immersion, your adventure will be both safe and memorable.`
            }
          </p>

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
        </div>

        <div className={classes.imageSection}>
          <div className={classes.imageWrapper}>
            <img
              src={host.profileImage || host.heroImage || "/assets/placeholder-host.jpg"}
              alt={host.name}
              className={classes.hostImage}
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
      </div>
    </div>
  );
};

export default MeetYourHost;
