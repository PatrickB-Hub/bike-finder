import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";

import { color_primary } from "../../atoms/Variables";

import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import Pagination from "../UI/Pagination";

import FilterContext from "../../context/FilterContext";

import { media } from "../../utilities/MediaQueriesBuilder";
import { filterApplier } from "../../utilities/FilterApplier";

const Gallery = ({ loading, data, failed, casesPerPage }) => {
  const { sideFilterVisibility, filtersFixed, sideFilterOptions } = useContext(
    FilterContext
  );
  const [currentPage, setCurrentPage] = useState(1);

  // Get current cases
  const filteredCases =
    !loading && filterApplier(sideFilterOptions, data.incidents);
  const indexOfLastCase = currentPage * casesPerPage;
  const indexOfFirstCase = indexOfLastCase - casesPerPage;
  const currentCases =
    !loading && filteredCases.slice(indexOfFirstCase, indexOfLastCase);

  return (
    <>
      <CardsWrapper
        sideFilterVisibility={sideFilterVisibility}
        filtersFixed={filtersFixed}
      >
        {loading && <Spinner />}
        {!loading &&
          !failed &&
          currentCases.map(incident => {
            const date = new Date(incident.occurred_at * 1000);

            return (
              <Card
                key={incident.id}
                image={incident.media.image_url}
                title={incident.title}
                text={incident.description}
                details={incident.details}
                time={`${date.getDate()}.${date.getMonth() +
                  1}.${date.getFullYear()}`}
                location={incident.address}
                source={incident.source.html_url}
                sideFilterVisibility={sideFilterVisibility}
              ></Card>
            );
          })}
        {!loading && !failed && !data.incidents.length && (
          <FeedbackMessage>No results found.</FeedbackMessage>
        )}
        {!loading && !data && failed && (
          <FeedbackMessage>Error, try again later.</FeedbackMessage>
        )}
      </CardsWrapper>
      <Pagination
        casesPerPage={casesPerPage}
        totalCases={!loading && filteredCases.length}
        paginate={setCurrentPage}
      ></Pagination>
    </>
  );
};

export default Gallery;

const FeedbackMessage = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${color_primary};
  text-align: center;
`;

const CardsWrapper = styled.section`
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${props =>
    props.filtersFixed &&
    css`
      padding-top: 7rem;
    `}

  ${media.sizeII`
    flex-direction: row;

    ${props =>
      props.sideFilterVisibility &&
      css`
        width: 65%;
        margin-left: 35%;
      `} 
  `}

  ${media.sizeI`
    flex-direction: row;
    transition: width 0.3s;

    ${props =>
      props.sideFilterVisibility &&
      css`
        width: 75%;
        margin-left: 25%;
      `} 
  `}
`;
