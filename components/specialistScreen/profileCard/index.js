import React from "react";
import Image from "next/image";
import classes from "./profileCard.module.css";

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 4.5A2.5 2.5 0 1 1 6.5 7 2.5 2.5 0 0 1 4 4.5zM4.5 8.75h4V20h-4zM10.5 8.75h3.85v1.5h.06a4.22 4.22 0 0 1 3.8-2.08c4.07 0 4.82 2.68 4.82 6.16V20h-4v-4.94c0-1.18 0-2.7-1.65-2.7s-1.9 1.29-1.9 2.62V20h-4z" />
    </svg>
  );
}

function SpecialistProfileCard({ profile }) {
  const name = profile?.specialist_name;
  const verified = !!profile?.is_verified;
  const specialisation = profile?.specialisation_type;

  return (
    <section className={classes.profile_section} id="about">
      <div className={classes.container}>
        <div className={classes.profile_card}>
          <div className={classes.profile_content}>
            <div className={classes.profile_image_container}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile?.specialist_photo}
                alt={`${name} - Travel Specialist`}
                className={classes.profile_image}
              />
            </div>

            <div className={classes.profile_details}>
              <div className={classes.name_section}>
                <h2>{name}</h2>
                {verified && (
                  <Image
                    src="/assets/cohosted_profile/svgs/verified.svg"
                    alt="Verified"
                    width={22}
                    height={22}
                    className={classes.verified_icon}
                  />
                )}
              </div>

              {specialisation && (
                <p className={classes.title_line}>{specialisation} Specialist</p>
              )}

              <div className={classes.about_section}>
                <h3>About {name}</h3>
                <p>{profile?.bio_text}</p>

                {profile?.usp_statement && (
                  <figure className={classes.usp_block}>
                    <span className={classes.usp_label}>Their Specialist Edge</span>
                    <blockquote className={classes.usp_quote}>
                      “{profile.usp_statement}”
                    </blockquote>
                  </figure>
                )}

                <div className={classes.pro_links}>
                  {profile?.website_url && (
                    <a
                      href={profile.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.pro_link}
                      aria-label="Website"
                    >
                      <GlobeIcon />
                    </a>
                  )}
                  {profile?.linkedin_url && (
                    <a
                      href={profile.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.pro_link}
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                  {profile?.instagram_url && (
                    <a
                      href={profile.instagram_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.pro_link}
                      aria-label="Instagram"
                    >
                      <Image
                        src="/assets/cohosted_profile/svgs/instagram.svg"
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialistProfileCard;
