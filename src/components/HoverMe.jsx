import React from "react";
import styled from "styled-components";
import HoverSquaresBox from "./HoverSquaresBox";
import Playground from "./Playground";

const HoverMe = ({
  value,
  options,
  table,
  tableMap,
  selectValueHandler,
  startHandler,
  toggleCell,
}) => {
  return (
    <Wrapper>
      <Playground
        value={value}
        options={options}
        table={table}
        tableMap={tableMap}
        selectValueHandler={selectValueHandler}
        startHandler={startHandler}
        toggleCell={toggleCell}
      />
      <HoverSquaresBox isOpen={!!table.length} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  height: 480px;
  background-color: transparent;
`;
export default HoverMe;
