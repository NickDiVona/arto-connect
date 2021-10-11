import * as React from 'react';
import { StyledView, StyledText } from '../components/styled';

const HighScoresScreen = ({ navigation }: any) => {
  return (
    <StyledView flex={1} justifyContent={'center'} alignItems={'center'}>
      <StyledText fontSize={48}>High Scores</StyledText>
    </StyledView>
  );
};

export default HighScoresScreen;
