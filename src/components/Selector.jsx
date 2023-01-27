import React from "react";
import styled from "styled-components";

const Selector = ({ selectValueHandler, options }) => (
  <SelectorBox name="modes" onChange={selectValueHandler}>
    <option value="">Pick mode</option>
    {options.map(({ name, field }, i) => {
      return (
        <option value={field} name={name} key={i}>
          {name}
        </option>
      );
    })}
  </SelectorBox>
);

const SelectorBox = styled.select`
  flex-shrink: 0;
  display: flex;
  width: 65%;
  height: 75%;
  padding-left: 5%;
  font-size: 18px;
  justify-content: center;
`;
export default Selector;
