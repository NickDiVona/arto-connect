import * as ActionTypes from './actionTypes';

export const updateEnemyRace = (enemyRace: string) => {
  return {
    type: ActionTypes.UPDATE_ENEMY_RACE,
    payload: enemyRace
  };
};
