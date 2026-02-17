import React from "react";
import BlogsContainer from "../../components/blogsScreen/blogsContainer";
import HeroBanner from "../../components/blogsScreen/heroBanner";
import classes from "./blogs.module.css";
import SEOHead from "../../components/common/SEOHead";
import { generateMetadata, STATIC_PAGES_METADATA } from "../../utils/seo";

function Blogs() {
  const metadata = generateMetadata(STATIC_PAGES_METADATA.blogs);

  return (
    <div className={classes.container}>
      <SEOHead metadata={metadata} />
      <HeroBanner />
      <BlogsContainer />
    </div>
  );
}

export default Blogs;
