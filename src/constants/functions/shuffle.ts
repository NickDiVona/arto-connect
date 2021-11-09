export const shuffle = (arr: any[]) => {
  let baseArr = arr;
  let newArr = [];

  for (let i = baseArr.length; i > 0; i--) {
    const randIdx = Math.floor(Math.random() * baseArr.length + 0);
    newArr.push(baseArr[randIdx]);
    baseArr.splice(randIdx, 1);
  }

  return newArr;
};

export default shuffle;
