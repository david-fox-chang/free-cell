<template>
  <div class="cards-playground">
    tableaux
    <input type="checkbox" v-model="disabled">
    <br>
    <!-- <div v-if="disabled"> -->
      <cell-cell></cell-cell>
    <!-- </div> -->
  </div>
</template>

<script>
import lodash from 'lodash';
import cell from '../components/Cell.vue';

export default {
  components: {
    // 'cell-svg': () => import('../components/Apoker-c01.svg').then(m => m.default),
    'cell-cell': cell,
  },
  data() {
    const $return = [
      { name: 'cascade', num: 8 },
      { name: 'opencell', num: 4 },
      { name: 'foundation', num: 4 },
    ].reduce((sum, { name, num }) => Object.assign(
      sum,
      ...Array.from(
        Array(num),
        (i, ind) => ({ [`${name}${ind + 1}`]: [] }),
      ),
    ), {});

    console.log($return);
    return {
      svg: '../components/Apoker-c01.svg',
      disabled: false,
      ...$return,
    };
  },
  created() {
    const pokers = lodash.shuffle('♠♣♥♦').map(i => [
      'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k',
    ].map((n, num) => ({ num: num + 1, name: `${i}-${n}`, fixed: true }))).flat();
    console.log(pokers, this.cascade7.push(...lodash.shuffle(pokers)));
  },
  methods: {
    change(...e) {
      console.table(...e);
    },
  },
  watch: [
    { name: 'cascade', num: 8 },
    { name: 'opencell', num: 4 },
    { name: 'foundation', num: 4 },
  ].reduce((sum, { name, num }) => Object.assign(
    sum,
    ...Array.from(
      Array(num),
      (i, ind) => ({
        [`${name}${ind + 1}`]: (newlist) => {
          console.log(`${name}${ind + 1}`, newlist);
          if (newlist.length > 1) {
            console.log('fail', newlist.length);
          }
        },
      }),
    ),
  ), {}),
};
</script>

<style lang="less" scoped>
div {
  border: solid 1px #F00;
}
</style>
