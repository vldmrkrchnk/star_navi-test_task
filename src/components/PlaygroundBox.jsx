import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

const PlaygroundBox = ({ table, tableMap, toggleCell }) => (
  <PlaygroundBoxWrapper>
    {table.map(({ row, col }, i) => {
      return (
        <Cell
          key={i}
          row={row}
          col={col}
          table={table}
          active={tableMap[`${row}:${col}`]}
          toggleCell={toggleCell}
        />
      );
    })}
  </PlaygroundBoxWrapper>
);

const PlaygroundBoxWrapper = styled.div`
  overflow-y: auto;
  border: none;
  display: flex;
  flex-wrap: wrap;
  height: auto;
`;

export default PlaygroundBox;
