import React from 'react';
import { HStack, VStack } from 'native-base';
import { Cell } from 'components';

export const Board: React.FC = () => {
  return (
    <VStack justifyContent={'center'} alignItems={'center'}>
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
