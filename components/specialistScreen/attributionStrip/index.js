import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./attributionStrip.module.css";

// "Led by …  ← Back to …'s Profile" strip on tour pages, for any host from data/hosts.js
function HostAttributionStrip({ host }) {
  if (!host) return null;

  return (
    <div className={classes.strip} role="complementary">
      <div className={classes.inner}>
        <div className={classes.left}>
          {host.profileImage && (
            <Image
              src={host.profileImage}
              alt={host.name}
              width={48}
              height={48}
              className={classes.avatar}
            />
          )}
          <div className={classes.text}>
            <span className={classes.led_by}>
              Led by <strong>{host.name}</strong>
            </span>
            <div className={classes.badges}>
              {host.title && <span className={classes.tag}>{host.title}</span>}
              {host.verified && (
                <span className={classes.verified}>Facing North Verified ✓</span>
              )}
            </div>
          </div>
        </div>

        <Link href={host.profileUrl} className={classes.back_link}>
          ← Back to {host.firstName}&rsquo;s Profile
        </Link>
      </div>
    </div>
  );
}

export default HostAttributionStrip;
