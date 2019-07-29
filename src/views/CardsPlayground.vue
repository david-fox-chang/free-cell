<template>
  <div class="cards-playground tableaux">
    <foundation-stack
      class="foundation stack"
      v-for="i in meta.foundation"
      :key="`foundation${i}`"
      :list="$data[`foundation${i}`]"
    ></foundation-stack>
    <opencell-stack
      class="opencell stack"
      v-for="i in meta.opencell"
      :key="`opencell${i}`"
      :list="$data[`opencell${i}`]"
    ></opencell-stack>
    <cascade-stack
      class="cascade stack"
      v-for="i in meta.cascade"
      :key="`cascade${i}`"
      :list="$data[`cascade${i}`]"
    ></cascade-stack>
  </div>
</template>

<script>
import Cascade from '../components/Cascade.vue';
import Foundation from '../components/Foundation.vue';
import OpenCell from '../components/OpenCells.vue';
import {
  flitersInit, pokerInitData, pokersSetConst, watch, slicersInit,
  test,
} from '../components/util/index';

export default {
  components: {
    'cascade-stack': Cascade,
    'foundation-stack': Foundation,
    'opencell-stack': OpenCell,
  },
  data: () => ({
    ...pokerInitData,
    meta: {
      ...pokersSetConst,
    },
  }),
  mounted() {
    // console.log(slicersInit);
    // this.gameInit(flitersInit || slicersInit);
    this.gameInit(flitersInit);
  },
  methods: {
    // initBulider: { keys, stacks }
    gameInit({ keys, stacks }) {
      keys.forEach((key) => {
        if (key !== 'cascade0') this[key].push(...stacks[key]);
      });
      // this.cascade1.push(...test.cascade1.reverse());
    },
  },
  watch,
};
</script>

<style lang="less">
div {
  border: solid 1px #F00;
}
</style>
<style lang="less" scoped>

.tableaux {
  display: flex;
}

</style>
