import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { Box, Pressable, Text } from "native-base";
//

//

export interface BoardSelectionButtonTypes {
  boardType: string;
  bgColor?: string;
  updateBoardType: () => void;
}

export const BoardSelectionButton: React.FC<BoardSelectionButtonTypes> = ({
  boardType,
  bgColor,
  updateBoardType
}) => {
  return (
    <Pressable
      onPress={() => updateBoardType()}
      backgroundColor={bgColor ? bgColor : "lavender"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"5px"}
      paddingX={"10px"}
      paddingY={"5px"}
      width={"200px"}
      marginX={"10px"}
      marginY={"5px"}
    >
      <Text>{boardType}</Text>
    </Pressable>
  );
};

export default BoardSelectionButton;
