import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";

import {
  tab_filter_height,
  color_secondary,
  color_grey_dark,
  header_height
} from "../../atoms/Variables";

import DateRangeFilter from "../UI/FilterDateRangePicker";
import SearchFilter from "../UI/SearchFilter";
import CheckboxFilter from "../UI/CheckboxFilter";
import RadioFilter from "../UI/RadioFilter";

import FilterContext from "../../context/FilterContext";

import { media } from "../../utilities/MediaQueriesBuilder";

const FilterSide = () => {
  const [visibility, setVisibility] = useState({
    DateRangeFilterComp: true,
    SearchFilterComp: true,
    CheckboxFilterComp: true,
    RadioFilterComp: true
  });
  const {
    filtersFixed,
    sideFilterVisibility,
    toggleSideFilterVisibility,
    datePickerExpanded
  } = useContext(FilterContext);

  const onClickHandler = comp => {
    const newVisibility = { ...visibility };
    newVisibility[comp] = !visibility[comp];
    setVisibility(newVisibility);
  };

  return (
    <FormWrapper
      isFilterVisible={sideFilterVisibility}
      filtersFixed={filtersFixed}
      datePickerExpanded={datePickerExpanded}
    >
      <FilterIcon>Filter</FilterIcon>
      <Form filtersFixed={filtersFixed}>
        <Heading
          onClick={() => onClickHandler("DateRangeFilterComp")}
          visible={!visibility.DateRangeFilterComp}
        >
          Occurrence
        </Heading>
        <DateRangeFilter visible={visibility.DateRangeFilterComp} />

        <Heading
          onClick={() => onClickHandler("SearchFilterComp")}
          visible={!visibility.SearchFilterComp}
        >
          Description
        </Heading>
        <SearchFilter visible={visibility.SearchFilterComp} />

        <Heading
          onClick={() => onClickHandler("RadioFilterComp")}
          visible={!visibility.RadioFilterComp}
        >
          Image
        </Heading>
        <RadioFilter visible={visibility.RadioFilterComp} />

        <Heading
          onClick={() => onClickHandler("CheckboxFilterComp")}
          visible={!visibility.CheckboxFilterComp}
        >
          Color
        </Heading>
        <CheckboxFilter visible={visibility.CheckboxFilterComp} />
      </Form>

      <div
        className="filter-close"
        onClick={() => toggleSideFilterVisibility()}
      >
        Close
      </div>
    </FormWrapper>
  );
};

export default FilterSide;

const Heading = styled.h4`
  /* filter block title */
  position: relative;
  margin-top: 1.5rem;
  padding: 1rem 0 1rem 2rem;

  color: ${color_grey_dark};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.3rem;

  user-select: none;
  cursor: pointer;

  :hover {
    color: ${color_secondary};
  }

  ::before {
    /* arrow */
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 16px;
    height: 16px;
    background: url(${require("../../images/arrow.svg")}) no-repeat center
      center;

    transform: translateY(-50%);
    transition: transform 0.3s;
  }

  ${props =>
    props.visible &&
    css`
      ::before {
        transform: translateY(-50%) rotate(-90deg);
      }
    `}
`;

const Form = styled.form`
  padding: 5rem 10%;
`;

const FilterIcon = styled.div`
  position: fixed;
  top: 0;
  left: 8%;
  padding-left: 24px;
  height: ${tab_filter_height};
  line-height: ${tab_filter_height};
  font-size: 1.6rem;
  font-weight: 500;
  width: auto;

  /* image replacement */
  text-indent: 0;
  color: #fff;
  white-space: nowrap;
  background: transparent url(${require("../../images/filter-icon.svg")})
    no-repeat left center;
  pointer-events: none;

  z-index: 6;

  transition: all 0.1s;
`;

const FormWrapper = styled.div`
  position: absolute;
  top: ${header_height};
  left: 0;
  width: 70%;
  height: 100%;

  background: #fff;

  z-index: 2;

  transform: translateX(-100%);
  transition: transform 0.3s, box-shadow 0.3s;

  ::before {
    /* top colored bar */
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: ${tab_filter_height};
    width: 100%;

    background-color: ${color_secondary};

    z-index: 2;
  }

  ${props =>
    props.filtersFixed &&
    css`
      position: fixed;
      top: 0;
      height: 100vh;

      ${Form} {
        height: 100%;
        overflow-y: scroll;

        ${props =>
          props.datePickerExpanded &&
          css`
            overflow-y: visible;
          `}
      }
    `}

  .filter-close {
    position: absolute;
    top: 0;
    right: 0;
    height: ${tab_filter_height};
    line-height: ${tab_filter_height};
    width: 60px;

    color: #fff; 
    background: #1eb2b9;
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
    cursor: pointer;

    z-index: 3;

    :hover {
      background: #019ca3;
    }
  }

  ${props =>
    props.isFilterVisible &&
    css`
      transform: translateX(0);
      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
    `}

    ${props =>
      !props.isFilterVisible &&
      css`
        ${FilterIcon} {
          opacity: 0;
        }
      `}

  ${media.sizeII`
    width: 35%;
  `}

  ${media.sizeI`
    width: 25%;
  `}
`;
