import React from "react";
import styled from "styled-components";

import SpinnerIcon from "./SpinnerIcon";

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <SpinnerIcon />
    </SpinnerWrapper>
  );
};

export default Spinner;

const SpinnerWrapper = styled.div`
  margin: 25vh auto;

  z-index: 999;
`;
