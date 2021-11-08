import * as ActionTypes from './actionTypes';
import { zerg, terran, protoss, events } from 'constants/data';

export const updateBoardType = (boardType: string) => {
  const zergGame = events.concat(zerg);
  const terranGame = events.concat(terran);
  const protossGame = events.concat(protoss);
  const noGame = events;
  let currentGameType = noGame;

  switch (boardType) {
    case 'Zerg':
      currentGameType = zergGame;

    case 'Terran':
      currentGameType = terranGame;

    case 'Protoss':
      currentGameType = protossGame;

    case 'Events':
      currentGameType = noGame;

    default:
      currentGameType = noGame;
  }

  return {
    type: ActionTypes.UPDATE_BOARD_TYPE,
    payload: currentGameType
  };
};
