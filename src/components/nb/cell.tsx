import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { Box, Text, Pressable } from 'native-base';

export const Cell = () => {
  const winWidth = useWindowDimensions().width / 6;
  const [bgColor, setBgColor] = useState('lightblue');

  const changeColor = () => {
    return bgColor === 'lightblue' ? setBgColor('lightgreen') : setBgColor('lightblue');
  };

  return (
    <Pressable
      onPress={() => changeColor()}
      bgColor={bgColor}
      width={winWidth}
      height={winWidth}
      maxHeight={150}
      maxWidth={150}
      margin={1}
    >
      <Box flex={1} justifyContent={'center'} alignItems={'center'}>
        <Text>Click Me</Text>
      </Box>
    </Pressable>
  );
};
