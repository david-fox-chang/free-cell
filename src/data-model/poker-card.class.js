export default class PokerCard {
  constructor(params) {
    Object.assign(this, params);
  }

  toString() {
    return JSON.stringify(this);
  }
}
