import React from "react";
import { HStack, VStack, View, Text } from "native-base";
import { ArrayCellDataTypes } from "constants/data";

interface BoardTypes {
  boardType: ArrayCellDataTypes[];
}

export const Board: React.FC<BoardTypes> = ({ boardType }) => {
  const renderRows = () => {
    return boardType.map((item) => <Text>{item.description}</Text>);
  };

  return <View>{renderRows()}</View>;
};

export default Board;
