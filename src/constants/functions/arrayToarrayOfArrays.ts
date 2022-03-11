import { ArrayCellDataProps } from "constants/data";

interface rowProps {
  row: ArrayCellDataProps[];
}

export const arrayToArrayOfArrays = (arr: any) => {
  let matrix: rowProps[] = [];
  let row: rowProps[] = [];

  for (let i = 0; i < arr.length; i++) {
    row.push(arr[i]);

    if ((i + 1) % 5 === 0 && i !== 0) {
      console.log("true");
      matrix.push(row);
      row = [];
    }
  }

  return matrix;
};
