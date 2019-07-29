import { shuffle, range } from 'lodash';
import PokerCard from '../../data-model/poker-card.class';
import stackListHelper from './stack-list-helper';

/**
 * c: ♣, clubs
 * h: ♥, hearts
 * s: ♠, spades
 * d: ♦, diamonds
 */

const strategiesOfShuffling = {
  random: shuffle,
  none: x => x,
};

const cardSuits = [...'chsd'];

const cards = range(13, 0)
  .map(num => cardSuits.map(suit => (
    new PokerCard({
      num,
      suit,
      poker: `${suit}${num.toString().padStart(2, '0')}`,
      chainSelect: false,
    })
  )))
  .flat();

const getShuffledPokers = (strategy = 'random') => strategiesOfShuffling[strategy](cards);

const stackNameGen = (name, len) => range(1, len + 1).map(i => `${name}${i}`);

// const stacksRecover = (stackName, wakeUps) => {};

const playingFliters = (stackName, stackNums, preparedCards) => {
  const cntOfCards = preparedCards.length;
  const fliters = range(stackNums).map(
    (i, ind) => range(ind, cntOfCards, stackNums),
  );
  const nameds = stackNameGen(stackName, stackNums);
  return {
    keys: nameds,
    stacks: Object.assign({}, ...nameds.map((name, ind) => ({
      [name]: fliters[ind].map(i => preparedCards[i]),
    }))),
  };
};

const playingSlicers = (stackName, stackNums, preparedCards) => {
  const cntOfCards = preparedCards.length;
  const slicer = range(stackNums).map(
    (i, ind) => range(ind + 1, cntOfCards + 1, stackNums),
  ).map(({ length }) => length)
    .reduce((sum, len) => {
      const { length } = sum;
      const start = length ? sum[length - 1][1] + 1 : 0;
      sum.push([start, start + len - 1]);
      return sum;
    }, []);
  console.log(slicer);

  const nameds = stackNameGen(stackName, stackNums);
  return {
    keys: nameds,
    stacks: Object.assign({}, ...nameds.map((name, ind) => ({
      [name]: preparedCards.slice(...slicer[ind]),
    }))),
  };
};


const flitersInit = playingFliters('cascade', 8, getShuffledPokers());
const slicersInit = 1 || playingSlicers('cascade', 8, getShuffledPokers());

const pokersSetConst = {
  cascade: 8,
  opencell: 4,
  foundation: 4,
};

const pokersSet = [
  { name: 'cascade', num: pokersSetConst.cascade },
  { name: 'opencell', num: pokersSetConst.opencell },
  { name: 'foundation', num: pokersSetConst.foundation },
];

const pokerBoundGen = (cb, set = pokersSet) => (
  set.reduce((sum, { name, num }) => Object.assign(sum, ...cb(name, num)), {})
);

const pokerInitData = pokerBoundGen(
  (name, num) => range(1, num + 1).map(i => ({ [`${name}${i}`]: [] })),
);

const watch = pokerBoundGen(
  (name, num) => range(1, num + 1).map(i => ({
    [`${name}${i}`]: (newlist) => {
      console.log(`${name}${i}`, newlist);
      // if (newlist.length > 1) {
      //   console.log('fail', newlist.length);
      // }
    },
  })),
);

const test = {
  cascade1: [
    new PokerCard({
      num: 1, suit: 's', poker: 's01', chainSelect: false,
    }),
    new PokerCard({
      num: 2, suit: 'h', poker: 'h02', chainSelect: false,
    }),
    new PokerCard({
      num: 3, suit: 'c', poker: 'c03', chainSelect: false,
    }),
    new PokerCard({
      num: 5, suit: 'c', poker: 'c05', chainSelect: false,
    }),
    new PokerCard({
      num: 4, suit: 'd', poker: 'd04', chainSelect: false,
    }),
    new PokerCard({
      num: 6, suit: 'h', poker: 'h06', chainSelect: false,
    }),
    new PokerCard({
      num: 7, suit: 's', poker: 's07', chainSelect: false,
    }),
  ],
};

export {
  getShuffledPokers,
  stackNameGen,
  playingFliters,
  playingSlicers,
  flitersInit,
  slicersInit,
  pokerBoundGen,
  pokerInitData,
  watch,
  pokersSet,
  pokersSetConst,
  stackListHelper,
  test,
};
