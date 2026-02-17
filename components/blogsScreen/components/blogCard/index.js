import Link from "next/link";
import React from "react";
import classes from "./blogCard.module.css";

function BlogCard({ pic, blogDetails }) {
  return (
    <Link href={"/blogs/"+blogDetails?.id} passHref>
      <div className={classes.card_body}>
        <div className={classes.img_container} >
          <img src={pic.src} className={classes.img} />
        </div>
        <div className={classes.description_container}>
          <div className={classes.description_container_inner}>
            <h2>{blogDetails?.title}</h2>
            <p>
              {blogDetails?.paras[0]}
            </p>
            {/* <h3>November 5, 2021</h3> */}
            <div className={classes.btn}>
              <p>READ MORE</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
