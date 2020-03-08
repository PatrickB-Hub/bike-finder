import React from "react";
import styled, { css } from "styled-components";

import {
  color_secondary,
  color_grey_dark
} from "../../atoms/Variables";

import { media } from "../../utilities/MediaQueriesBuilder";

const Card = props => {
  const onClickHandler = url => {
    window.open(url, "_blank");
  };

  return (
    <CardWrapper
      sideFilterVisibility={props.sideFilterVisibility}
      className="card"
    >
      <ImagePlaceholder image={props.image} alt="Bike Image">
        No Image
      </ImagePlaceholder>
      <div className="card_container">
        <h2 className="card_container-heading">{props.title}</h2>
        <p className="card_container-description">
          {props.text ? props.text : "No Description"}
        </p>
        <div>
          <p className="card_container-description_details">
            <span className="card_container-description_details--bold">
              Details:{" "}
            </span>
            {`${props.details}, `}
            <span className="card_container-description_details--bold">
              Time:{" "}
            </span>
            {`${props.time}, `}
            <span className="card_container-description_details--bold">
              Location:{" "}
            </span>
            {props.location}
          </p>
          <button
            className="card_container-button"
            onClick={() => onClickHandler(props.source)}
          >
            Learn more
          </button>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 250px;
  text-align: center;
  padding: 10rem 0;
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  background-color: ${color_grey_dark};
  border-bottom: 4px solid ${color_secondary};

  ${props =>
    props.image &&
    css`
      background: url(${props => props.image}) no-repeat center center;
      background-clip: border-box;
      background-size: 100% 100%;
      color: transparent;
      text-indent: -100%;
    `}
`;

const CardWrapper = styled.div`
  width: 80%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: none;
  margin: 1rem auto;
  text-align: center;
  z-index: -1;

  ${media.sizeII`
    width: 40%;
    margin: 2rem;

    ${props =>
      props.sideFilterVisibility &&
      css`
        width: 65%;
      `}
  `};

  ${media.sizeI`
    width: 30%;
    margin: 1rem auto;

    ${props =>
      props.sideFilterVisibility &&
      css`
        width: 45%;
      `}
  `};

  .card {
    &_container {
      display: flex;
      flex-flow: column wrap;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      padding: 10px 20px;
    }

    &_container-heading {
      margin-top: 1rem;
      color: #1eb2b9;
      font-size: 2rem;
      font-weight: 700;
    }

    &_container-description {
      margin: 3rem 5%;
      color: ${color_grey_dark};
      font-size: 1.5rem;
      font-weight: 500;

      &_details {
        margin: 0 10% 1rem;
        color: ${color_grey_dark};
        font-size: 1.4rem;

        &--bold {
          font-weight: 500;
        }
      }
    }

    &_container-description_details--bold {
      font-weight: 500;
    }

    &_container-button {
      padding: 1rem 2rem;
      margin: 2rem auto;
      background-color: #1eb2b9;
      color: #fff;
      font-size: 1.4rem;
      border: none;
      outline: none;
      border-radius: 2px;
      cursor: pointer;

      &:hover {
        background-color: #019ca3;
      }

      &:active {
        transform: scale(1.03);
      }
    }
  }
`;
