import * as React from 'react';
import { StyledView, StyledText } from 'components/styled';
import { Board } from 'components/index';

const GameScreen = ({ navigation }: any) => {
  return (
    <StyledView flex={1} justifyContent={'center'} alignItems={'center'}>
      <StyledText fontSize={48}>Arto Connect</StyledText>
      <Board />
    </StyledView>
  );
};

export default GameScreen;
