import React from "react";
import "../styles/Home.module.css";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <h1>its home page</h1>
      <Link href={"/blog"}>
        <li>Blogs</li>
      </Link>
    </>
  );
};
export default Index;
