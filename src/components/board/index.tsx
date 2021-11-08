import React from 'react';
import { HStack, VStack } from 'native-base';
import { Cell, CellProps } from 'components/cell';

export interface BoardProps {
  data: CellProps[];
}

export const Board: React.FC<BoardProps> = ({ data }) => {
  const dummyData = [
    { name: 'yeehaw', type: 'MonkaT', description: 'hello this is some description text' },
    { name: 'yeehaw', type: 'MonkaT', description: 'hello this is some description text' },
    { name: 'yeehaw', type: 'MonkaT', description: 'hello this is some description text' },
    { name: 'yeehaw', type: 'MonkaT', description: 'hello this is some description text' },
    { name: 'yeehaw', type: 'MonkaT', description: 'hello this is some description text' }
  ];

  const renderRows = () => {
    return dummyData.map((item) => {
      return <Cell name={item.name} type={item.type} description={item.description} />;
    });
  };

  return (
    <VStack justifyContent={'center'} alignItems={'center'}>
      <HStack>{renderRows()}</HStack>
      <HStack>
        <HStack>{renderRows()}</HStack>
      </HStack>
      <HStack>
        <HStack>{renderRows()}</HStack>
      </HStack>
      <HStack>
        <HStack>{renderRows()}</HStack>
      </HStack>
      <HStack>
        <HStack>{renderRows()}</HStack>
      </HStack>
    </VStack>
  );
};
