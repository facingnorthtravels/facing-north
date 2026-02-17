import React, { useState } from "react";
import Image from "next/image";
import classes from "./profileCard.module.css";
import VideoModal from "../../sharedComponents/VideoModal";

// Small inline thumbnail + modal wrapper used in profile card
function VideoThumb({ videoUrl, profileName }) {
  const [open, setOpen] = useState(false);

  const getYoutubeId = (url) => {
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
      if (u.hostname === "youtu.be") return u.pathname.replace("/", "");
      // fallback to undefined
      return null;
    } catch (e) {
      return null;
    }
  };

  const ytId = getYoutubeId(videoUrl);
  const thumb = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : null;

  return (
    <>
      <div
        className={classes.video_thumbnail}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        aria-label={`Play video about ${profileName}`}
      >
        {thumb ? (
          <img src={thumb} alt={`${profileName} video thumbnail`} className={classes.video_thumb_image} />
        ) : (
          <div className={classes.video_thumb_image} />
        )}
        <div className={classes.play_overlay} aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="rgba(8,145,178,0.9)" />
            <path d="M10 8L16 12L10 16V8Z" fill="white" />
          </svg>
        </div>
      </div>

      <VideoModal open={open} onClose={() => setOpen(false)} videoUrl={videoUrl} title={`${profileName} — Video`} />
    </>
  );
}

function ProfileCard({ profile }) {
  const socialLinks = profile?.socialLinks || [];

  return (
    <div className={classes.profile_section}>
      <div className={classes.container}>
        <div className={classes.profile_card}>
          <div className={classes.profile_content}>
            {/* Profile Image */}
            <div className={classes.profile_image_container}>
              <Image
                src={profile?.profileImage || "/assets/cohosted_profile/placholder_cohost.png"}
                alt={`${profile?.name || "Ray"} - Adventure Guide`}
                width={160}
                height={160}
                className={classes.profile_image}
              />
            </div>

            {/* Profile Details */}
            <div className={classes.profile_details}>
              {/* Name and Verification */}
              <div className={classes.name_section}>
                <h2>{profile?.name || "Ray"}</h2>
                {profile?.verified && (
                  <Image
                    src="/assets/cohosted_profile/svgs/verified.svg"
                    alt="Verified"
                    width={24}
                    height={24}
                    className={classes.verified_icon}
                  />
                )}
              </div>

              {/* Rating */}
              {/* <div className={classes.rating_section}>
                <Image
                  src="/assets/cohosted_profile/svgs/Container.svg"
                  alt="Rating stars"
                  width={70}
                  height={20}
                  className={classes.rating_stars}
                />
                <span className={classes.rating_text}>{profile?.rating || 4.8} ({profile?.reviewCount || 24} reviews)</span>
              </div> */}

              {/* Stats Cards */}
              {/* <div className={classes.stats_container}>
                <div className={classes.stat_card}>
                  <Image
                    src="/assets/cohosted_profile/svgs/hiking.svg"
                    alt="Tours hosted"
                    width={30}
                    height={36}
                    className={classes.stat_icon}
                  />
                  <p>{profile?.stats?.toursHosted || 4} Tours Hosted</p>
                </div>
                <div className={classes.stat_card}>
                  <Image
                    src="/assets/cohosted_profile/svgs/group.svg"
                    alt="Travelers guided"
                    width={30}
                    height={36}
                    className={classes.stat_icon}
                  />
                  <p>{profile?.stats?.travelersGuided || 180}+ Travelers Guided</p>
                </div>
                <div className={classes.stat_card}>
                  <Image
                    src="/assets/cohosted_profile/svgs/public.svg"
                    alt="Countries"
                    width={30}
                    height={36}
                    className={classes.stat_icon}
                  />
                  <p>{profile?.stats?.countries || 5} Countries</p>
                </div>
              </div> */}

              {/* About Section */}
              <div className={classes.about_section}>
                <h3>About {profile?.name || "Ray"}</h3>
                <div className={classes.about_content}>
                  <p>
                    {profile?.about || ""}
                  </p>
                    {/* Video thumbnail (if profile.videoUrl provided) */}
                    {profile?.videoUrl && (
                      <VideoThumb
                        videoUrl={profile.videoUrl}
                        profileName={profile?.name}
                      />
                    )}
                </div>

                {/* Social Links */}
                {socialLinks.length > 0 && (
                  <div className={classes.social_links}>
                    {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      className={classes.social_button}
                      aria-label={social.label}
                      href={social?.href}
                      target="blank"
                    >
                      <Image
                        src={social.icon}
                        alt={social.label}
                        width={20}
                        height={20}
                        className={classes.social_icon}
                      />
                    </a>
                  ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
