<template>
  <sortable-stack
    class="cascade-wrapper"
    :sort-configs="sortConfigs"
    :list="list"
    @card-press="chainCheck"
    @card-release="chainEnd"
    @start="drag=true"
    @end="drag=false"
  ></sortable-stack>
</template>

<script>
import SortableStack from './SortableStack/Index.vue';

import { stackListHelper } from './util/index';

export default {
  components: {
    'sortable-stack': SortableStack,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    sortConfigs: {
      // filter: ':empty',
      multiDrag: true,
      // onChoose: () => {},
    },
  }),
  created() {
    // this.sortConfigs.onChoose = this.onChoose;
  },
  methods: {
    // onChoose(e) {
    //   console.log('cascade', e.type, e.oldIndex, ...e);
    //   const chainList = stackListHelper.getPokerChainList(this.list, e.oldIndex);
    //   console.log('cascade', e.type, e.oldIndex, chainList);
    // },
    chainCheck([pokerName/* , mouseEvent */]) {
      const { findPokerIndex, getPokerChainList, isChainPair } = stackListHelper;
      const oldIndex = findPokerIndex(this.list, pokerName);
      const chainList = getPokerChainList(this.list, oldIndex);
      if (chainList.length < 2) return;
      const endInd = chainList.length - 1;
      const isChain = chainList.reduce((result, poker, ind, all) => {
        if (!result) return false;
        if (ind === endInd) return result;
        return isChainPair(poker, all[ind + 1] || { num: -1 });
      }, true);
      if (!isChain) return;
      // eslint-disable-next-line no-param-reassign
      chainList.forEach((poker) => { poker.chainSelect = true; });
      // console.log(chainList.map(i => i.toString()).join('\n'));
    },
    chainEnd() {
      console.log('chainEnd');
      // eslint-disable-next-line no-param-reassign
      this.list.forEach((poker) => { poker.chainSelect = false; });
    },
  },
};
</script>

<style lang="less">
.cascade-wrapper {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  & > .card {
    margin-top: -100px;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>


// Called when an item is selected
onSelect: function(/**Event*/evt) {
  evt.item // The selected item
},

// Called when an item is deselected
onDeselect: function(/**Event*/evt) {
  evt.item // The deselected item
}
