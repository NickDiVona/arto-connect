import * as ActionTypes from "./actionTypes";
import { zerg, terran, protoss, events } from "constants/data";
import { shuffle } from "constants/functions/shuffle";
import { arrayToArrayOfArrays } from "constants/functions/arrayToarrayOfArrays";

export const updateBoardType = (boardType: string) => {
  const zergGame = events.concat(zerg);
  const terranGame = events.concat(terran);
  const protossGame = events.concat(protoss);
  const noGame = events;
  let currentGameType = noGame;

  switch (boardType) {
    case "Zerg":
      currentGameType = shuffle(zergGame);
      break;

    case "Terran":
      currentGameType = shuffle(terranGame);
      break;

    case "Protoss":
      currentGameType = shuffle(protossGame);
      break;

    case "Events":
      currentGameType = shuffle(noGame);
      break;

    default:
      currentGameType = shuffle(noGame);
      break;
  }

  if (currentGameType.length > 25) {
    currentGameType.length = 25;
    let temp = arrayToArrayOfArrays(currentGameType);

    currentGameType = temp;
  }

  return {
    type: ActionTypes.UPDATE_BOARD_TYPE,
    payload: currentGameType
  };
};
