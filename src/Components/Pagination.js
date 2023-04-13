import React from "react";
import styles from "../styles/Home.module.css";

const Pagination = ({ postsPerPage, totalPost, pageChange }) => {
  const pageNUmber = [];
  const totalPagesReq = Math.ceil(totalPost / postsPerPage);

  for (let index = 1; index <= totalPagesReq; index++) {
    pageNUmber.push(index);
  }

  return (
    <div>
      <ul className={styles.container}>
        {pageNUmber.map((pageno) => (
          <li key={pageno}>
            <a
              href="#"
              className={styles.links}
              onClick={() => {
                pageChange(pageno);
              }}
            >
              {pageno}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
