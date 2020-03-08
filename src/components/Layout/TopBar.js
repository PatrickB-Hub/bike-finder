import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { FilterDropdownOptions } from "../../atoms/FilterOptions";
import {
  color_secondary,
  color_grey_dark,
  tab_filter_height
} from "../../atoms/Variables";

import SearchBar from "../UI/SearchBar";
import Dropdown from "../UI/Dropdown";

import FilterContext from "../../context/FilterContext";

import { media } from "../../utilities/MediaQueriesBuilder";

function TopBar() {
  const {
    filtersFixed,
    sideFilterVisibility,
    toggleSideFilterVisibility
  } = useContext(FilterContext);

  return (
    <FilterBar filtersFixed={filtersFixed}>
      <FilterIcon
        onClick={() => toggleSideFilterVisibility()}
        sideFilterVisible={sideFilterVisibility}
      >
        Filter
      </FilterIcon>
      {/* <Tabs filterOptions={FilterTabOptions} /> */}
      <SearchBar />
      <Dropdown filterItems={FilterDropdownOptions} />
    </FilterBar>
  );
}

export default TopBar;

const FilterIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${tab_filter_height};
  line-height: ${tab_filter_height};
  width: 60px;

  /* image replacement */
  text-indent: 100%;
  cursor: pointer;
  border: none;
  outline: none;
  color: transparent;
  white-space: nowrap;
  background: transparent url(${require("../../images/filter-icon.svg")})
    no-repeat center center;

  z-index: 3;

  ${props =>
    props.sideFilterVisible &&
    css`
      opacity: 0;
      pointer-events: none;
    `}

  ${media.sizeII`
    width: auto;
    top: 0;
    left: 2%;

    text-indent: 0;
    color: ${color_grey_dark};
    font-size: 1.6rem;
    font-weight: 500;

    padding-left: 24px;
    background-position: left center;

    transition: all 0.3s;

    :hover {
      color: ${color_secondary};
    }

    ${props =>
      props.sideFilterVisible &&
      css`
        opacity: 0;
      `}
  `}
`;

const FilterBar = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08);
  z-index: 2;

  ${props =>
    props.filtersFixed &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    `}
`;
