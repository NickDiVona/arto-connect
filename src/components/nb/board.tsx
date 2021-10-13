import React from 'react';
import { HStack, VStack } from 'native-base';
import { Cell, TitleTile } from '.';

export const Board = () => {
  const generateRows = () => {
    return;
  };

  return (
    <VStack justifyContent={'center'} alignItems={'center'}>
      {generateRows()}
      <HStack>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </HStack>
      <HStack>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </HStack>
      <HStack>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </HStack>
      <HStack>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </HStack>
      <HStack>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </HStack>
    </VStack>
  );
};
