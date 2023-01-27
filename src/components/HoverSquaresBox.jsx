import React from "react";
import { ToastContainer } from "react-toastify";
import styled, { keyframes } from "styled-components";

const HoverSquaresBox = ({ isOpen }) => {
  return (
    <Wrapper>
      <Title isOpen={isOpen}>Hover squares</Title>
      <HoverSquaresHolder>
        <ToastContainer
          position="top-center"
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </HoverSquaresHolder>
    </Wrapper>
  );
};
export const slideIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  flex: 50%;
  border: none;
`;

const Title = styled.div`
  animation: ${slideIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  flex-shrink: 0;

  height: 10%;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  font-size: 38px;
  line-height: 25px;
  font-weight: 700;
  margin: 0;
  padding-top: 0;
  padding-left: 10%;
  border: none;
`;
const HoverSquaresHolder = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  border: none;
  padding-left: 10%;
  background-color: transparent;
  ::-webkit-scrollbar {
    background: rgb(179, 177, 177);
    border-radius: 10px;
    width: 2px;
    position: relative;
  }
`;

export default HoverSquaresBox;
