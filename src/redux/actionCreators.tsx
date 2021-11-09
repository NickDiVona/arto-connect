import * as ActionTypes from "./actionTypes";
import { zerg, terran, protoss, events } from "constants/data";
import { shuffle } from "constants/functions/shuffle";

export const updateBoardType = (boardType: string) => {
  const zergGame = events.concat(zerg);
  const terranGame = events.concat(terran);
  const protossGame = events.concat(protoss);
  const noGame = events;
  let currentGameType = noGame;

  if (boardType === "Zerg") {
    currentGameType = shuffle(zergGame);
  } else if (boardType === "Terran") {
    currentGameType = shuffle(terranGame);
  } else if (boardType === "Protoss") {
    currentGameType = shuffle(protossGame);
  } else {
    currentGameType = shuffle(noGame);
  }

  return {
    type: ActionTypes.UPDATE_BOARD_TYPE,
    payload: currentGameType
  };
};
