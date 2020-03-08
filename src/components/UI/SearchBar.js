import React, { useContext, useState } from "react";
import styled from "styled-components";

import {
  color_secondary,
  color_grey_dark,
  tab_filter_height
} from "../../atoms/Variables";

import FilterContext from "../../context/FilterContext";

import { media } from "../../utilities/MediaQueriesBuilder";

const SearchBar = () => {
  const { changeSelectedFilter } = useContext(FilterContext);
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = e => {
    setInputValue(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    changeSelectedFilter({ filterPart: "searchBar", value: inputValue });
  };

  return (
    <Filter>
      <form onSubmit={onSubmitHandler}>
        <input
          className="filter_input"
          type="text"
          placeholder="Search.."
          autoFocus
          onChange={onChangeHandler}
          value={inputValue}
        ></input>
      </form>
    </Filter>
  );
};

export default SearchBar;

const Filter = styled.div`
  display: block;
  /* set same size of the .cd-tab-filter */
  height: ${tab_filter_height};
  width: 40%;
  margin: 0 auto;
  text-align: center;
  box-shadow: inset 0 -2px 0 ${color_secondary};

  .filter_input {
    width: 95%;
    background: url(${require("../../images/search-icon.svg")}) no-repeat left
      center;
    background-size: 1.8rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${color_grey_dark};
    padding: 1.2rem 3rem;
    border: none;

    ::placeholder {
      color: ${color_grey_dark};
    }

    :focus {
      outline: none;
    }
  }

  ${media.sizeII`
    width: 30%;
  `}

  ${media.sizeI`
    width: 35%;
  `}
`;
