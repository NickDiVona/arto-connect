import React from "react";
import { useWindowDimensions } from "react-native";
import { Box, Text } from "native-base";

interface TitleTileProps {
  title: string;
}

const TitleTile: React.FC<TitleTileProps> = ({ title }) => {
  const winWidth = useWindowDimensions().width / 6;

  return (
    <Box
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      height={10}
      width={winWidth}
      maxWidth={{ base: 80, md: 100, lg: 120 }}
      margin={1}
      bgColor={"lightskyblue"}
    >
      <Text fontSize={24} fontWeight={"bold"}>
        {title}
      </Text>
    </Box>
  );
};

export default TitleTile;
