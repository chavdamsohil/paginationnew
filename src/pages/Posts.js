import React from "react";
import styles from "../styles/Posts.module.css";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  //
  return (
    <ul>
      {posts.map((post) => (
        <div key={post.id} className={styles.container}>
          <li className={styles.lists}>{post.title}</li>
        </div>
      ))}
    </ul>
  );
};

export default Posts;
