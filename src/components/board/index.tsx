import React from "react";
import { HStack, VStack, View, Text } from "native-base";
import { ArrayCellDataTypes } from "constants/data";
import Cell from "components/cell";

interface BoardTypes {
  boardType: ArrayCellDataTypes[];
}

export const Board: React.FC<BoardTypes> = ({ boardType }) => {
  const renderRows = (boardMatrix: ArrayCellDataTypes) => {
    return (
      <View>
        {boardMatrix.map((row) => {
          return (
            <HStack>
              {row.map((rowItem) => {
                return (
                  <Cell
                    name={rowItem.name}
                    type={rowItem.type}
                    description={rowItem.description}
                    artysReaction={rowItem.artysReaction}
                  />
                );
              })}
            </HStack>
          );
        })}
      </View>
    );
  };

  return <View>{renderRows(boardType)}</View>;
};

export default Board;
