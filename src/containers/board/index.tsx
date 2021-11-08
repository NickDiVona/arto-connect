import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Text, Pressable, View } from 'native-base';
//
import { Board, BoardProps } from 'components';
import * as data from 'constants/data';
import { RootStateTypes } from '../../redux/configureStore';
import ConnectedBoardSelectionButton from 'containers/boardSelectionButton';
//

const ConnectedBoard: React.FC = () => {
  const boardType = useSelector((state: RootStateTypes) => state.boardType.boardType);
  const dispatch = useDispatch();

  return (
    <View flex={1} justifyContent={'center'} alignItems={'center'}>
      {boardType.length ? (
        <Board data={data.zerg} />
      ) : (
        <View justifyContent={'center'} alignItems={'center'} flexDirection="column">
          <Text fontSize={'32px'} marginBottom={'40px'}>
            What's he doing?
          </Text>
          <View justifyContent={'center'} alignItems={'center'} marginBottom={'40px'}>
            <Text fontSize={'24px'}>Playing Games</Text>
            <Text fontSize={'16px'}>What race is the enemy?</Text>
            <ConnectedBoardSelectionButton boardType={'Terran'} bgColor={'lightsteelblue'} />
            <ConnectedBoardSelectionButton boardType={'Zerg'} bgColor={'plum'} />
            <ConnectedBoardSelectionButton boardType={'Protoss'} bgColor={'moccasin'} />
          </View>
          <Text fontSize={'24px'}>Just Chatting</Text>
          <Text fontSize={'16px'}>Ban/Unban, Just Chatting, etc.</Text>
          <ConnectedBoardSelectionButton boardType={'Events'} />
        </View>
      )}
    </View>
  );
};

export default ConnectedBoard;
