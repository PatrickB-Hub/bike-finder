import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";

import {
  color_grey_light,
  color_secondary,
  font_primary,
} from "../../atoms/Variables";

import FilterContext from "../../context/FilterContext";

const SearchFilter = ({ visible }) => {
  const { changeSelectedFilterOptions } = useContext(FilterContext);
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
    changeSelectedFilterOptions({
      filterPart: "searchFilter",
      value: inputValue,
    });
  };

  return (
    <SearchFilterWrapper filterHidden={!visible}>
      <input
        type="search"
        placeholder="Search.."
        onChange={onChangeHandler}
        value={inputValue}
      ></input>
    </SearchFilterWrapper>
  );
};

export default SearchFilter;

const SearchFilterWrapper = styled.div`
  transition: all 0.3s;

  input[type="search"] {
    width: 100%;
    padding: 1rem;
    font-family: ${font_primary};
    font-size: 1.6rem;
    background-color: ${color_grey_light};
    border-color: transparent;
    border-radius: 0;
    border: 2px solid ${color_grey_light};
    appearance: none;
    box-shadow: none;

    :focus {
      outline: none;
      background-color: #fff;
      border-color: ${color_secondary};
    }
  }

  ${(props) =>
    props.filterHidden &&
    css`
      display: none;
    `}
`;
