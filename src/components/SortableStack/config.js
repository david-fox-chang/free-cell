export default {
  disabled: false,
  sort: true,
  delay: 0.25,
  delayOnTouchOnly: false,
  touchStartThreshold: 30, // (px)
  animation: true,

  preventOnFilter: false, // 是否停用觸發預設行為

  draggable: '.rabbit',

  // ghostClass: 'isGhost',
  // chosenClass: 'isChosen',
  // dragClass: 'isDrag',

  swapThreshold: 0.66,
  invertSwap: false,
  invertedSwapThreshold: 0,
  // direction="horizontal|vertical"|fn()

  // forceFallback: false, // 使用於不支援 html5 的舊式瀏覽器
  // fallbackClass: 'sortable-fallback',
  // fallbackTolerance: 4,
  // fallbackOnBody: false,

  dragoverBubble: false,
  removeCloneOnHide: true,
  emptyInsertThreshold: 5, // (感應區大小 預設 5px)
};
