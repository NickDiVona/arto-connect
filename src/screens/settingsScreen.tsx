import * as React from 'react';
import { StyledView, StyledText } from '../components/styled';

// const TabTwoScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
const SettingsScreen = ({ navigation }: any) => {
  return (
    <StyledView flex={1} justifyContent={'center'} alignItems={'center'}>
      <StyledText fontSize={48}>Settings</StyledText>
    </StyledView>
  );
};

export default SettingsScreen;
