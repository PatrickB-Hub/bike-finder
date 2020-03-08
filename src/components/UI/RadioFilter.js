import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";

import { RadioFilterOptions } from "../../atoms/FilterOptions";
import {
  color_grey_dark,
  color_grey_light,
  color_secondary,
  font_primary
} from "../../atoms/Variables";

import FilterContext from "../../context/FilterContext";

const RadioFilter = ({visible}) => {
  const { sideFilterOptions, changeSelectedFilterOptions } = useContext(
    FilterContext
  );
  const [selectedOptionId, setSelectedOptionId] = useState(
    RadioFilterOptions.indexOf(sideFilterOptions.radioFilter)
  );

  const onChangeHandler = (option, id) => {
    changeSelectedFilterOptions({
      filterPart: "radioFilter",
      value: option
    });
    setSelectedOptionId(id);
  };

  const Radio = ({labelName, id, checked}) => {
    return (
      <RadioWrapper>
        <RadioInput
          type="radio"
          id={labelName.concat("radio", id)}
          checked={checked}
          onChange={() => onChangeHandler(labelName, id)}
        ></RadioInput>
        <RadioLabel htmlFor={labelName.concat("radio", id)}>
          {labelName}
        </RadioLabel>
      </RadioWrapper>
    );
  };

  return (
    <FilterWrapper filterHidden={!visible}>
      {RadioFilterOptions.map((element, index) => {
        return (
          <Radio
            labelName={element}
            checked={selectedOptionId === index}
            id={index}
            key={index}
          ></Radio>
        );
      })}
    </FilterWrapper>
  );
};

export default RadioFilter;

const RadioInput = styled.input`
  /* shared style for input elements */
  font-family: ${font_primary};
  border-radius: 0;
  background-color: #fff;
  border: 2px solid ${color_grey_light};

  /* hide the browser's default radio button */
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 3;

  :checked + label::before {
    border-color: ${color_secondary};
    background-color: ${color_secondary};
  }

  :checked + label::after {
    display: block;
  }
`;

const RadioLabel = styled.label`
  padding-left: 24px;
  font-size: 1.5rem;
  color: ${color_grey_dark};
  user-select: none;

  ::before {
    font-family: ${font_primary};
    border-radius: 0;
    background-color: #fff;
    border: 2px solid ${color_grey_light};
  }

  ::before,
  ::after {
    content: "";
    display: block;
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
  }

  ::before {
    width: 16px;
    height: 16px;
    left: 0;
  }

  ::after {
    /* check mark - hidden */
    display: none;
  }

  ::before,
  ::after {
    border-radius: 50%;
  }

  ::after {
    /* check mark style for radio buttons */
    width: 6px;
    height: 6px;
    background-color: #fff;
    left: 5px;
  }
`;

const RadioWrapper = styled.div`
  position: relative;
  margin-bottom: 0.5rem;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const FilterWrapper = styled.div`
  ${props =>
    props.filterHidden &&
    css`
      display: none;
    `}
`;
