import React from "react";
import classes from "./blog.module.css";
import bg from "../../../public/assets/blog-page-assets/bg.png";
import BlogCard from "../../../components/blogsScreen/components/blogCard";
import { blogs } from "../../../data/blogs";
import SEOHead from "../../../components/common/SEOHead";
import { getBlogMetadata } from "../../../utils/seo";

function Blog({ blog }) {
  // Generate metadata from static props
  const metadata = getBlogMetadata(blog);

  return (
    <div className={classes.container}>
      <SEOHead metadata={metadata} />
      <div className={classes.content_container}>
        <div className={classes.banner_container}>
          <div className={classes.overlay} />
          <div className={classes.banner_content_container}>
            <h2>{blog?.title}</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
              finibus urna. In ut justo quis metus rhoncus cursus quis vitae
              magna. Ut nibh metus, accumsan viverra massa ac, sagittis pulvinar
              ipsum. Aenean lacus augue, sollicitudin eu eros eleifend, luctus
              ultricies lectus
            </p> */}
          </div>
          <img className={classes.bg} src={bg.src} />
        </div>

        <div style={{ marginBottom: "20px"}}>
          {blog?.paras?.map((para, index) => (
            <>
              <p style={{ textAlign: "left", width: "100%", marginBottom: "8px" }}>
                {para?.heading && para?.heading}
              </p>

              <p key={index} className={classes.para}>
                {para?.para ? para?.para : para}
              </p>
            </>
          ))}
        </div>


        <div className={classes.other_blogs_container}>
          <h2 className={classes.other_blogs_heading}>You may also like</h2>
          <div className={classes.blogs_container}>
            {blogs
              ?.filter((blog, index) => index < 3)
              ?.map((blog, index) => (
                <BlogCard key={index} blogDetails={blog} pic={blog?.img} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate paths for all blogs at build time
export async function getStaticPaths() {
  const paths = blogs.map((blog) => ({
    params: { id: String(blog.id) },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

// Fetch blog data at build time
export async function getStaticProps({ params }) {
  const decodedId = decodeURIComponent(params.id || "");
  const blog = blogs.find((b) => String(b.id) === decodedId);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog,
    },
  };
}

export default Blog;
