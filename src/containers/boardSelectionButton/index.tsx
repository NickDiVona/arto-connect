import React from 'react';
import { useDispatch } from 'react-redux';
//
import BoardSelectionButton from 'components/boardSelectionButton';
import { updateBoardType } from 'redux/actionCreators';
//

export interface CellProps {
  boardType: string;
  bgColor?: string;
}

const ConnectedBoardSelectionButton: React.FC<CellProps> = ({ boardType, bgColor }) => {
  const dispatch = useDispatch();

  const boardSelectionButtonPressed = (boardType: string) => {
    dispatch(updateBoardType(boardType));
  };

  return (
    <BoardSelectionButton
      boardType={boardType}
      updateBoardType={() => boardSelectionButtonPressed(boardType)}
      bgColor={bgColor}
    />
  );
};

export default ConnectedBoardSelectionButton;
