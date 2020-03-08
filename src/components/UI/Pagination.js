import React from "react";
import styled from "styled-components";

import { color_primary } from "../../atoms/Variables";

const Pagination = ({ casesPerPage, totalCases, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCases / casesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      <nav className="page-nav">
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  .pagination {
    margin: 5rem 0;
    justify-content: center;
  }

  .page-link {
    margin-right: -1px;
    padding: 1.5rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${color_primary};
    cursor: pointer;
  }
`;
