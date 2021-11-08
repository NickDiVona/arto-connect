import * as Actions from '../actionTypes';
//

export interface ActionTypes {
  type: string;
}

export interface ObjectTypes {
  name: string;
  type: string;
  description: string;
  artysReaction: string;
}

export interface BoardSizeReducerTypes {
  boardSize: ObjectTypes[];
}

const INITIAL_STATE = { boardSize: 5 };

export const BoardSizeReducer = (state = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case Actions.INCREASE_BOARD_SIZE:
      return { ...state, boardSize: state.boardSize + 1 };

    case Actions.DECREASE_BOARD_SIZE:
      return { ...state, boardSize: state.boardSize - 1 };

    case Actions.RESET_BOARD_SIZE:
      return { ...state, boardSize: 5 };

    default:
      return state;
  }
};
