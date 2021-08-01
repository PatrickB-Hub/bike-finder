import React from "react";
import styled from "styled-components";

import { color_grey_dark, color_primary } from "../../atoms/Variables";

const Pagination = ({ previous, next, page, setPage }) => {
  return (
    <PaginationWrapper>
      <nav className="page-nav">
        <ul className="pagination">
          <li key="prev" className="page-item">
            <button
              onClick={() => {
                setPage((page -= 1));
                window.scroll({ top: 0, behavior: "smooth" });
              }}
              href="/"
              className={"page-link" + (!previous ? " active" : "")}
            >
              Previous
            </button>
          </li>
          <li key="next" className="page-item">
            <button
              onClick={() => {
                setPage((page += 1));
                window.scroll({ top: 0, behavior: "smooth" });
              }}
              href="/"
              className={"page-link" + (!next ? " active" : "")}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  .pagination {
    margin: 5rem 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .page-link {
    margin-right: -1px;
    padding: 1.5rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${color_primary};
    cursor: pointer;

    &.active {
      color: ${color_grey_dark};
      pointer-events: none;
    }
  }
`;
