import React, { useEffect, useState } from "react";
import BlogCard from "../components/blogCard";
import classes from "./blogsContainer.module.css";
import bg from "../../../public/assets/blog_card_assets/bg.png";
import { useRouter } from "next/router";
import { blogs } from "../../../data/blogs";

function BlogsContainer() {
  const [blogsArr, setBlogsArr] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
    }
  }, [router.query]);

  useState(() => {
    if (blogs?.length > 0) {
      setBlogsArr(blogs);
    }
  }, [blogs]);

  // console.log(blogs);

  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        {" "}
        <p className={classes.title}>
          Find resources to improve your style from Imito Pakistan. Our blogs
          can help in your styling efficiently
        </p>
        <div className={classes.cards_container}>
          {blogsArr?.map((blog, index) => (
            <BlogCard blogDetails={blog} key={index} pic={blog.img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogsContainer;
