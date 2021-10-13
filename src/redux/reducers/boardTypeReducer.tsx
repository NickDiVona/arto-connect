import * as ActionTypes from '../actionTypes';
//
import { racesList } from 'constants/races';
//

export interface StateType {
  state: string;
}

export interface ActionType {
  type: string;
  payload?: string;
}

export interface EnemyRaceReducerTypes {
  action: {
    type: 'string';
    payload: 'string';
  };
}

export const boardTypeReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    default:
      return state;
  }
};
