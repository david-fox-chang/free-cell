

// stackListHelper;

const getPokerNames = list => list.map(({ poker }) => poker);

const findPokerIndex = (list, poker) => {
  const pokers = getPokerNames(list);
  return pokers.lastIndexOf(poker);
};

const getPokerChainList = (list, startIndex, reverse = true) => {
  if (reverse) return list.slice(startIndex).reverse();
  return list.slice(startIndex);
};

/**
 * c: ♣, clubs
 * h: ♥, hearts
 * s: ♠, spades
 * d: ♦, diamonds
 */
const oppositeTable = {
  s: 'hd',
  c: 'hd',
  h: 'sc',
  d: 'sc',
};

const isOppositeSuit = (tailSuit, prevSuit) => oppositeTable[tailSuit].includes(prevSuit);

const isIncreaseByOne = (tailNum, prevNum) => (prevNum === (tailNum + 1));

const isChainPair = (tail, prev) => {
  console.log(`${tail}, ${prev}`);

  if (!isIncreaseByOne(tail.num, prev.num)) {
    return false;
  }
  return isOppositeSuit(tail.suit, prev.suit);
};

export default {
  getPokerNames,
  findPokerIndex,
  getPokerChainList,
  isChainPair,
};
