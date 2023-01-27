import React from "react";
import styled from "styled-components";

const StartButton = ({ value, startHandler }) => (
  <Button type="button" onClick={startHandler} disabled={!value}>
    START
  </Button>
);

export default StartButton;

const Button = styled.button`
  width: 30%;
  height: 75%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${(props) => (props.disabled ? "none" : null)};
  background-color: #0075d8;
  cursor: pointer;
  color: white;
  font-weight: 700;
  font-size: 23px;
  border-radius: 4px;
  border: none;
`;
