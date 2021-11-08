import * as Actions from '../actionTypes';
//

export interface ActionTypes {
  type: string;
  payload?: string[];
}

export interface BoardTypeReducerTypes {
  boardType: string[];
}

const INITIAL_STATE = { boardType: [] };

export const BoardTypeReducer = (state = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case Actions.UPDATE_BOARD_TYPE:
      return { ...state, boardType: action.payload };

    default:
      return state;
  }
};
