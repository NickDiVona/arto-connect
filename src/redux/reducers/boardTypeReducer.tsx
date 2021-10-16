import * as ActionTypes from '../actionTypes';
//
// import { racesList } from 'constants/races';
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

const INITIAL_STATE = 'zerg';

export const boardTypeReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    default:
      return state;
  }
};
