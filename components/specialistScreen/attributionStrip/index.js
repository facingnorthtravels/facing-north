import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./attributionStrip.module.css";

function SpecialistAttributionStrip({ specialist }) {
  if (!specialist) return null;

  const slug = specialist.specialist_slug || specialist.id;

  return (
    <div className={classes.strip} role="complementary">
      <div className={classes.inner}>
        <div className={classes.left}>
          {specialist.specialist_photo && (
            <Image
              src={specialist.specialist_photo}
              alt={specialist.specialist_name}
              width={48}
              height={48}
              className={classes.avatar}
            />
          )}
          <div className={classes.text}>
            <span className={classes.led_by}>
              Led by <strong>{specialist.specialist_name}</strong>
            </span>
            <div className={classes.badges}>
              {specialist.specialisation_type && (
                <span className={classes.tag}>
                  {specialist.specialisation_type}
                </span>
              )}
              {specialist.is_verified && (
                <span className={classes.verified}>
                  Facing North Verified ✓
                </span>
              )}
            </div>
          </div>
        </div>

        <Link href={`/specialist-profile/${slug}`} className={classes.back_link}>
          ← Back to {specialist.specialist_name?.split(" ")[0]}&rsquo;s Profile
        </Link>
      </div>
    </div>
  );
}

export default SpecialistAttributionStrip;
