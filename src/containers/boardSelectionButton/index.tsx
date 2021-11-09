import React from "react";
import { useDispatch } from "react-redux";
//
import BoardSelectionButton from "components/boardSelectionButton";
import { updateBoardType } from "redux/actionCreators";
//

export interface CellProps {
  boardType: string;
  bgColor?: string;
}

const ConnectedBoardSelectionButton: React.FC<CellProps> = ({ boardType, bgColor }) => {
  const dispatch = useDispatch();

  const boardSelectionButtonPressed = () => {
    dispatch(updateBoardType(boardType));
    console.log(boardType);
  };

  return (
    <BoardSelectionButton
      boardType={boardType}
      updateBoardType={() => boardSelectionButtonPressed()}
      bgColor={bgColor}
    />
  );
};

export default ConnectedBoardSelectionButton;
