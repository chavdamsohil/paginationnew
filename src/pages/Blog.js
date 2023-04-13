import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";

const Blog = ({ mydata }) => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(5);

  const pageChange = (pageno) => {
    setCurrentPage(pageno);
  };

  // use effect fetching data
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
      setPost(res.data);

      setLoading(false);
    };
    fetchPosts();
  }, []);
  // logic for .posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change page function

  //return component
  return (
    <>
      <h2> Its my blog</h2>
      <Pagination
        postsPerPage={postsPerPage}
        totalPost={posts.length}
        pageChange={pageChange}
      ></Pagination>
      <Posts posts={currentPost} loading={loading}></Posts>
    </>
  );
};

export default Blog;
