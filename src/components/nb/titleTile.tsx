import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Box, Text } from 'native-base';

interface titleTileProps {
  title: string;
}

export const TitleTile = ({ title }: titleTileProps) => {
  const winWidth = useWindowDimensions().width / 6;

  return (
    <Box
      flex={1}
      justifyContent={'center'}
      alignItems={'center'}
      height={10}
      width={winWidth}
      maxWidth={150}
      margin={1}
      bgColor={'lightskyblue'}
    >
      <Text fontSize={24} fontWeight={'bold'}>
        {title}
      </Text>
    </Box>
  );
};
