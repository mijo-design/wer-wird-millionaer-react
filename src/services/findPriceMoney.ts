export const findPriceMoney = (
  currentPositionIndex: number,
  moneyTree: number[],
  checkpoints: number[]
) => {
  const currentIsOutOfRange =
    currentPositionIndex < 0 || currentPositionIndex >= moneyTree.length;
  if (currentIsOutOfRange) {
    return -1;
  }
  const playedQuestions = moneyTree.slice(0, currentPositionIndex);
  for (let i = playedQuestions.length - 1; i >= 0; i--) {
    const priceMoney = moneyTree[i];
    const hasFoundCheckpoint = checkpoints.includes(priceMoney);
    if (hasFoundCheckpoint) {
      return priceMoney;
    }
  }
  return 0;
};
