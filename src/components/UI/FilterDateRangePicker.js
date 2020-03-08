import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "../../overrides/react_dates_overrides.css";
import { DateRangePicker } from "react-dates";
import styled, { css } from "styled-components";

import FilterContext from "../../context/FilterContext";

const DateRangeFilter = ({ visible }) => {
  const { setDatePickerExpanded, changeSelectedFilterOptions } = useContext(
    FilterContext
  );
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const onDatesChangeHandler = (dateRangeStart, dateRangeEnd) => {
    setStartDate(dateRangeStart);
    setEndDate(dateRangeEnd);
    changeSelectedFilterOptions({
      filterPart: "dateRangeFilter",
      value: {
        startDate: Date.parse(dateRangeStart), // Unix-timestamp format
        endDate: Date.parse(dateRangeEnd)
      }
    });
  };

  const onFocusChangeHandler = focus => {
    setFocusedInput(focus);
    // for use in FilterSide, to change the overflow property when expanded
    focus !== null ? setDatePickerExpanded(true) : setDatePickerExpanded(false);
  };

  return (
    <FilterWrapper filterHidden={!visible}>
      <DateRangePicker
        startDate={startDate}
        startDateId="your_unique_start_date_id"
        endDate={endDate}
        endDateId="your_unique_end_date_id"
        onDatesChange={({ startDate, endDate }) =>
          onDatesChangeHandler(startDate, endDate)
        }
        focusedInput={focusedInput}
        onFocusChange={onFocusChangeHandler}
        isDayBlocked={() => false}
        hideKeyboardShortcutsPanel
        withPortal
        isOutsideRange={() => false}
      />
    </FilterWrapper>
  );
};

export default DateRangeFilter;

const FilterWrapper = styled.div`
  ${props =>
    props.filterHidden &&
    css`
      display: none;
    `}
`;
