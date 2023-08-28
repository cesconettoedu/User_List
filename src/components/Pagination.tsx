import React from "react";
import PageLink from "./PageLink";
import "./Pagination.sass";
import { getPaginationItems } from '../lib/pagination';

export type Props = {
  currentPage: number;
  lastPage: number;
  maxLength: number;
  setCurrentPage: (page: number) => void;
};

export default function Pagination({ 
  currentPage,
  lastPage,
  maxLength,
  setCurrentPage 
}: Props) {
  const pageNums = getPaginationItems(currentPage, lastPage, maxLength);

  // prevent going less than page 1
  const prevClick = () => {
    if (currentPage <= 1) {
      setCurrentPage(1)
    } else {
      setCurrentPage(currentPage - 1)
    }
  };

    // avoid going forward after last page
  const nextClick = () => {
    if (currentPage === lastPage) {
      setCurrentPage(lastPage)
    } else {
      setCurrentPage(currentPage + 1)
    }
  };


  return (
    <nav className="pagination" aria-label="Pagination">
      <PageLink href="#" onClick={() => prevClick()}>
        &lt;
      </PageLink>
      {pageNums.map((pageNum, idx) => (
        <PageLink
          key={idx}
          href="#"
          active={pageNum === currentPage}
          disabled={isNaN(pageNum)}
          onClick={() => setCurrentPage(pageNum)}
        >
          {!isNaN(pageNum) ? pageNum : '...'}
        </PageLink>
      ))}

      <PageLink href="#" onClick={() => nextClick()}>
        &gt;
      </PageLink>
    </nav>
  );
}
