import React from "react";
import styled from "styled-components";

import { color_primary, header_height } from "../../atoms/Variables";

const Header = () => {
  return (
    <HeaderMain>
      <h1>Bike Finder</h1>
    </HeaderMain>
  );
}

export default Header;

const HeaderMain = styled.div`
  position: relative;
  height: ${header_height};
  background-color: ${color_primary};

  h1 {
    color: #fff;
    text-align: center;
    line-height: 150px;
    letter-spacing: .35rem;
    font-size: 3.4rem;
    font-weight: 700;
    letter-spacing: .8rem;
    text-transform: uppercase;
  }
`;
