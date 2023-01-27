import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useNotifications } from "../hooks/useNotifications";
import { slideIn } from "./HoverSquaresBox";

const Cell = ({ row, col, active, toggleCell }) => {
  const cellRef = useRef(null);
  const toastId = useRef(null);

  const { addRemoveNotification } = useNotifications(toastId);

  useEffect(() => {
    const toggleCellHandler = () => {
      const message = `row: ${row} col:${col}`;
      addRemoveNotification(toggleCell(row, col), message);
    };

    if (cellRef && cellRef.current) {
      cellRef.current.addEventListener("mouseenter", toggleCellHandler);
    }

    return () => {
      if (cellRef && cellRef.current) {
        cellRef.current.removeEventListener("mouseenter", toggleCellHandler);
      }
    };
  });

  return <StyledCell ref={cellRef} active={active} key={col * row} />;
};

const StyledCell = styled.div`
  height: 80px;
  width: 80px;
  background-color: ${({ active }) => (active ? "blue" : "transparent")};
  box-sizing: border-box;
  border: 1px solid black;
  animation: ${slideIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;

  &:hover {
    opacity: 0.7;
  }
`;
export default Cell;
