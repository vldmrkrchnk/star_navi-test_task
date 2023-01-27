import axios from "axios";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import HoverMe from "./components/HoverMe";
import "./index.css";

import { getCells } from "./components/helpers";
import { useNotifications } from "./hooks/useNotifications";

const PER_ROW = 5;

function App() {
  const [options, setOptions] = useState([]);
  const [tableData, setTableData] = useState({ table: [], map: {} });
  const [value, setValue] = useState(0);
  const { dismissAll } = useNotifications();

  const startHandler = () => {
    if (!value) {
      return;
    }
    dismissAll();
    const { table, map } = getCells(value, PER_ROW);

    setTableData({ table, map });
  };

  const selectValueHandler = (e) => {
    setValue(e.target.value);
  };

  const toggleCell = (row, col) => {
    const { map } = tableData;

    const newMap = map;
    const cell = `${row}:${col}`;
    if (newMap[cell]) {
      newMap[cell] = false;
      setTableData({ ...tableData, map: newMap });
      return false;
    }
    newMap[cell] = true;
    setTableData({ ...tableData, map: newMap });
    return true;
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://demo7919674.mockable.io/");
      const data = await response.data;
      setOptions(data);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <AppWrapper>
      <HoverMe
        options={options}
        table={tableData.table}
        tableMap={tableData.map}
        value={value}
        selectValueHandler={selectValueHandler}
        startHandler={startHandler}
        toggleCell={toggleCell}
      />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparent;
`;
