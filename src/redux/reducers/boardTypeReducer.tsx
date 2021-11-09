import * as Actions from "../actionTypes";
import { ArrayCellDataTypes } from "constants/data";
//

export interface ActionTypes {
  type: string;
  payload?: ArrayCellDataTypes[];
}

export interface BoardTypeReducerTypes {
  boardType: ArrayCellDataTypes[];
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
