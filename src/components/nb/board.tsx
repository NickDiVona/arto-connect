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
        <TitleTile title={'B'} />
        <TitleTile title={'I'} />
        <TitleTile title={'N'} />
        <TitleTile title={'G'} />
        <TitleTile title={'O'} />
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
