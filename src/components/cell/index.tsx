import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { Box, Pressable } from "native-base";

export interface CellTypes {
  name: string;
  type: string;
  description: string;
  artysReaction?: string;
}

const Cell: React.FC<CellTypes> = ({ name, type, description, artysReaction }) => {
  const winWidth = useWindowDimensions().width / 6;
  const [bgColor, setBgColor] = useState("lightblue");

  const changeColor = () => {
    return bgColor === "lightblue" ? setBgColor("lightgreen") : setBgColor("lightblue");
  };

  return (
    <Pressable
      onPress={() => changeColor()}
      bgColor={bgColor}
      width={winWidth}
      height={winWidth}
      maxHeight={{ base: 80, md: 100, lg: 120 }}
      maxWidth={{ base: 80, md: 100, lg: 120 }}
      margin={1}
    >
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        {name}
      </Box>
    </Pressable>
  );
};
export default Cell;
