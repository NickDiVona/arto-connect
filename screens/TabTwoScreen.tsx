import * as React from 'react';
import { RootTabScreenProps } from '../types';
import { StyledView, StyledText } from '../components/styled';

const TabTwoScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  return (
    <StyledView flex={1} justifyContent={'center'} alignItems={'center'}>
      <StyledText fontSize={16}>Welcome to</StyledText>
      <StyledText fontSize={48}>Arto Bingo</StyledText>
    </StyledView>
  );
};

export default TabTwoScreen;
