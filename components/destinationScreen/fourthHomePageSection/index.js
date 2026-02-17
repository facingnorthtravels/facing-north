import React from "react";
import classes from "./fourthHomePageSection.module.css";
import girl_pic from "../../../public/assets/destination_detail_assets/girl_placeholder.png";
import boy_pic from "../../../public/assets/destination_detail_assets/boy_placeholder.png";
import blog_bg from "../../../public/assets/destination_detail_assets/blog_bg.svg";
import star_filled from "../../../public/assets/destination_detail_assets/star_filled.svg";

function FourthHomePageSection() {
  return (
    <div className={classes.container}>
      <div className={classes.feedback_section}>
        <h2>Reviews</h2>
        <div className={classes.img_container}>
          <div className={classes.img_wrapper}>
            <img src={girl_pic.src} className={classes.img} />
            <div className={classes.review_container}>
              <h3>Bella Morgan</h3>
              <div className={classes.stars_container}>
                <img src={star_filled.src} className={classes.star} />
                <img src={star_filled.src} className={classes.star} />
                <img src={star_filled.src} className={classes.star} />
                <img src={star_filled.src} className={classes.star} />
                <img src={star_filled.src} className={classes.star} />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
                finibus urna. In ut justo quis metus rhoncus cursus quis vitae
                magna. Ut nibh metus, accumsan viverra massa ac, sagittis
                pulvinar ipsum.{" "}
              </p>
              <div className={classes.btn}>
                <p>READ MORE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.owner_container}>
        <div className={classes.img_container_2}>
          <div className={classes.img_wrapper_2}>
            <img src={boy_pic.src} className={classes.img} />
          </div>
          <div className={classes.owner_info_container}>
            <div className={classes.owner_info_content}>
              <h3>Hussain Khan</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
                finibus urna. In ut justo quis metus rhoncus cursus quis vitae
                magna. Ut nibh metus, accumsan viverra massa ac, sagittis
                pulvinar ipsum. Aenean lacus augue, sollicitudin eu eros
                eleifend, luctus ultricies lectus. Nam elementum tempor arcu, ut
                faucibus ligula pharetra eu. Mauris tempus est est, non mattis
                massa accumsan eu. Fusce nisl mauris, sollicitudin quis
                ullamcorper et, mollis nec odio. Aenean feugiat est in
                vestibulum posuere. Sed commodo elit neque, sed rutrum risus
                semper in. Vestibulum eu lorem condimentum, semper neque
                fringilla, elementum velit. Donec tincidunt fringilla enim, et
                mollis turpis auctor nec. In molestie ornare vehicula. Sed id
                vehicula felis. Vestibulum pulvinar quam id dictum egestas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.blogs_section}>
        <div className={classes.overlay} />
        <h3>Blogs</h3>
        <div className={classes.btn_white}>
          <p>EXPLORE</p>
        </div>
      </div>
    </div>
  );
}

export default FourthHomePageSection;
