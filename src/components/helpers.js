export function getCells(count, perRow) {
  const rows = parseInt(count) / perRow;
  const arr = new Array(rows).fill(null).map((_, index) =>
    new Array(perRow).fill(null).map((_, i) => ({
      row: index + 1,
      col: i + 1,
    }))
  );

  const table = [].concat.apply([], arr);
  const map = table.reduce(
    (acc, { row, col }) => ({ ...acc, [`${row}:${col}`]: false }),
    {}
  );

  return {
    table,
    map,
  };
}
