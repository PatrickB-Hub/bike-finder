import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";

import {
  color_secondary,
  color_grey_dark,
  tab_filter_height,
  color_grey_light,
} from "../../atoms/Variables";

import FilterContext from "../../context/FilterContext";

import { media } from "../../utilities/MediaQueriesBuilder";

const Dropdown = ({ filterItems }) => {
  const { queryOptions, changeSelectedFilter } = useContext(FilterContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [option, setOption] = useState(queryOptions.dropdownFilter);
  const [inputValue, setInputValue] = useState("");

  const onClickHandler = (item) => {
    setOption(item);
    changeSelectedFilter({ filterPart: "dropdownFilter", value: item });
    setDropdownOpen(!dropdownOpen);
  };

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputValue !== "") setOption(inputValue);
    changeSelectedFilter({ filterPart: "dropdownFilter", value: inputValue });
    setInputValue("");
    setDropdownOpen(!dropdownOpen);
  };

  const FilterItems = () => {
    return filterItems.map((item, index) => (
      <FilterItem onClick={() => onClickHandler(item)} key={index}>
        {item}
      </FilterItem>
    ));
  };

  return (
    <Wrapper>
      <Filter opened={dropdownOpen}>
        <button
          className="dropdown_button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="dropdown_button__text">{option}</span>
        </button>
        <div className="dropdown_content">
          <form onSubmit={onSubmitHandler}>
            <input
              className="dropdown_content__search"
              type="text"
              placeholder="City.."
              onChange={onChangeHandler}
              value={inputValue}
            ></input>
          </form>
          <FilterItems />
        </div>
      </Filter>
    </Wrapper>
  );
};

export default Dropdown;

const FilterItem = styled.div`
  width: 100%;
  height: ${tab_filter_height};
  padding-left: 1rem;

  color: ${color_grey_dark};
  background: #fff;

  font-size: 1.6rem;
  font-weight: 500;

  &:not(:last-child) {
    border-bottom: 1px solid ${color_grey_light};
  }

  &:hover {
    background-color: #f2f2f2;
    color: ${color_secondary};
    box-shadow: inset 4px 0 0 ${color_secondary};
  }
`;

const Filter = styled.div`
  width: 100%;

  .dropdown {
    &_button {
      width: 100%;
      height: ${tab_filter_height};
      margin: 0 auto;
      padding-left: 1rem;

      font-size: 1.6rem;
      font-weight: 500;
      text-align: start;
      color: ${color_grey_dark};
      background: #fff;

      border: none;
      outline: none;

      cursor: pointer;

      /* small location icon */
      &::after {
        content: "";
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);

        display: inline-block;
        width: 24px;
        height: 24px;

        background: url(${require("../../images/map-icon.svg")}) no-repeat
          center center;
        background-size: 1.3rem;

        pointer-events: none;
      }

      &:hover {
        color: ${color_secondary};
      }

      &__text {
        display: none;
      }
    }

    &_content {
      display: none;
      width: 100%;
      margin-top: -21px;

      &__search {
        display: block;
        width: 100%;
        height: ${tab_filter_height};
        padding-left: 3.5rem;

        border: none;
        outline: none;
        box-shadow: inset 0 0 0 2px ${color_secondary};

        background: url(${require("../../images/search-icon.svg")}) no-repeat
          left center #fff;
        background-size: 1.7rem;
        background-position: 1rem;
        color: ${color_grey_dark};
        font-size: 1.6rem;
        font-weight: 500;

        &::placeholder {
          color: ${color_grey_dark};
          font-size: 1.6rem;
          font-weight: 500;
        }

        &:hover {
          &::placeholder {
            color: ${color_secondary};
          }
        }
      }
    }

    ${media.sizeII`
      box-shadow: none;

      &_button__text {
        display: inline-block;
      }

      &_content {
        margin: -2px;
      }
    `}
  }

  ${(props) =>
    props.opened &&
    css`
      .dropdown {
        &_button {
          box-shadow: none;
        }

        &_content {
          display: inline-block;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          border-bottom: 3px solid ${color_secondary};
        }
      }
    `}
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 2%;
  display: block;
  height: ${tab_filter_height};
  width: 110px;
  line-height: ${tab_filter_height};
  padding-left: 14px;
  cursor: pointer;

  ${media.sizeII`
    right: 2%;
    width: 150px
    `}
`;
