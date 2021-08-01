import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { color_primary } from "../../atoms/Variables";

import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import Pagination from "../UI/Pagination";

import FilterContext from "../../context/FilterContext";

import { media } from "../../utilities/MediaQueriesBuilder";
import { filterApplier } from "../../utilities/FilterApplier";

const Gallery = ({ loading, bikes, error, casesPerPage }) => {
  const {
    queryOptions,
    sideFilterVisibility,
    filtersFixed,
    sideFilterOptions,
    changeSelectedFilter,
  } = useContext(FilterContext);

  const setPage = (page) => {
    changeSelectedFilter({
      filterPart: "page",
      value: page,
    });
  };

  // Get current cases
  let filteredCases = [];
  if (!loading) filteredCases = filterApplier(sideFilterOptions, bikes);

  return (
    <>
      <CardsWrapper
        sideFilterVisibility={sideFilterVisibility}
        filtersFixed={filtersFixed}
      >
        {loading && <Spinner />}
        {!loading &&
          !error &&
          filteredCases.map((incident) => {
            const date = new Date(incident.date_stolen * 1000);

            return (
              <Card
                key={incident.id}
                image={incident.large_img}
                title={incident.title}
                text={incident.description}
                details={incident.frame_colors}
                time={`${date.getDate()}.${
                  date.getMonth() + 1
                }.${date.getFullYear()}`}
                location={incident.stolen_location}
                source={incident.url}
                sideFilterVisibility={sideFilterVisibility}
              ></Card>
            );
          })}
        {!loading && !error && !filteredCases.length && (
          <FeedbackMessage>No results found.</FeedbackMessage>
        )}
        {!loading && !bikes && error && (
          <FeedbackMessage>Error, try again later.</FeedbackMessage>
        )}
      </CardsWrapper>
      <Pagination
        previous={queryOptions.page > 1}
        next={bikes.length === casesPerPage}
        page={queryOptions.page}
        setPage={setPage}
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

  ${(props) =>
    props.filtersFixed &&
    css`
      padding-top: 7rem;
    `}

  ${media.sizeII`
    flex-direction: row;

    ${(props) =>
      props.sideFilterVisibility &&
      css`
        width: 65%;
        margin-left: 35%;
      `} 
  `}

  ${media.sizeI`
    flex-direction: row;
    transition: width 0.3s;

    ${(props) =>
      props.sideFilterVisibility &&
      css`
        width: 75%;
        margin-left: 25%;
      `} 
  `}
`;
