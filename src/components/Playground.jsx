import React from "react";
import styled from "styled-components";
import PlaygroundBox from "./PlaygroundBox";
import Selector from "./Selector";
import StartButton from "./StartButton";

const Playground = ({
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
      <Settings>
        <Selector options={options} selectValueHandler={selectValueHandler} />
        <StartButton startHandler={startHandler} value={value} />
      </Settings>
      <PlaygroundBox
        value={value}
        table={table}
        tableMap={tableMap}
        toggleCell={toggleCell}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  flex: 50%;
  border: none;
`;

const Settings = styled.div`
  flex-shrink: 0;
  height: 15%;
  display: flex;
  justify-content: space-between;
  border: none;
`;

export default Playground;
