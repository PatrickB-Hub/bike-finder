import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";

import { CheckboxFilterOptions } from "../../atoms/FilterOptions";
import {
  color_grey_dark,
  color_grey_light,
  color_secondary,
  font_primary
} from "../../atoms/Variables";

import FilterContext from "../../context/FilterContext";

const CheckboxFilter = ({ visible }) => {
  const { changeCheckboxFilterOptions } = useContext(FilterContext);
  const [checkboxOptions, setCheckboxOptions] = useState(CheckboxFilterOptions);

  const onChangeHandler = (id, option) => {
    const newCheckboxOptions = [...checkboxOptions];
    newCheckboxOptions[id].checked = !checkboxOptions[id].checked;
    setCheckboxOptions(newCheckboxOptions);
    newCheckboxOptions[id].checked
      ? changeCheckboxFilterOptions(option, "push")
      : changeCheckboxFilterOptions(option);
  };

  const Checkbox = ({ labelName, id }) => {
    return (
      <CheckboxWrapper>
        <CheckboxInput
          type="checkbox"
          id={labelName.concat("checkbox", id)}
          checked={checkboxOptions[id].checked}
          onChange={() => onChangeHandler(id, labelName)}
        ></CheckboxInput>
        <CheckboxLabel htmlFor={labelName.concat("checkbox", id)}>
          {labelName}
        </CheckboxLabel>
      </CheckboxWrapper>
    );
  };

  return (
    <FilterWrapper filterHidden={!visible}>
      {checkboxOptions.map(elem => {
        return (
          <Checkbox
            labelName={elem.option}
            id={elem.id}
            key={elem.id}
            checked={elem.checked}
          ></Checkbox>
        );
      })}
    </FilterWrapper>
  );
};

export default CheckboxFilter;

const CheckboxLabel = styled.label`
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

  ::after {
    /* check mark style for check boxes */
    width: 16px;
    height: 16px;
    left: 0;
    background: url(${require("../../images/check-mark.svg")}) no-repeat
      center center;
  }
`;

const CheckboxInput = styled.input`
  /* shared style for input elements */
  font-family: ${font_primary};
  border-radius: 0;
  background-color: #fff;
  border: 2px solid ${color_grey_light};

  /* Hide the browser's default checkbox */
  position: absolute;
  top: 0;
  left: 0;
  opacity 0;
  z-index: 3;

  :checked + label::before {
    border-color: ${color_secondary};
    background-color: ${color_secondary};
  }

  :checked + label::after {
    display: block;
  }
`;

const CheckboxWrapper = styled.div`
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
