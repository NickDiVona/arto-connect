import * as React from 'react';
import { Board } from 'components/nb';
import { StyledView, StyledText } from '../components/styled';

const GameScreen = ({ navigation }: any) => {
  return (
    <StyledView flex={1} justifyContent={'center'} alignItems={'center'}>
      <StyledText fontSize={48}>Arto Bingo</StyledText>
      <Board />
    </StyledView>
  );
};

export default GameScreen;
