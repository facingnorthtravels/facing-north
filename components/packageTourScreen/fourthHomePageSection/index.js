import React from "react";
import classes from "./fourthHomePageSection.module.css";
import { useRouter } from "next/router";

function FourthHomePageSection() {
  const router = useRouter()

  return (
    <div className={classes.container}>
      <div className={classes.blogs_section}>
        <div className={classes.overlay} />
        <h3>Blogs</h3>
        <div className={classes.btn_white} onClick={() => router.push("/blogs")}>
          <p>EXPLORE</p>
        </div>
      </div>
    </div>
  );
}

export default FourthHomePageSection;
