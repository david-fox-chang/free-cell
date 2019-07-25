<template>
  <div class="cards-playground">
    tableaux

    <draggable
      v-for="i in 8"
      :key="`cascade${i}`"
      v-model="$data[`cascade${i}`]"
      group="people"
      @start="drag=true"
      @end="drag=false"
      @change="change"
      tag="div"
    >cascade {{ i }}
      <span v-for="element in $data[`cascade${i}`]" :key="element">{{element}}</span>
      <hr>
    </draggable>

    <draggable
      v-for="i in 4"
      :key="`opencell${i}`"
      v-model="$data[`opencell${i}`]"
      group="people"
      @start="drag=true"
      @end="drag=false"
      tag="div"
    >opencell - {{ i }}
    <span v-for="element in $data[`opencell${i}`]" :key="element">{{ element }}</span>
    <hr>
    </draggable>

    <draggable
      v-for="i in 4"
      :key="`foundation${i}`"
      v-model="$data[`foundation${i}`]"
      group="people"
      @start="drag=true"
      @end="drag=false"
      tag="div"
    >foundation - {{ i }}
    <span v-for="element in $data[`foundation${i}`]" :key="element">{{ i }} - {{ element }}</span>
    <hr>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import lodash from 'lodash';

// import OpenCells from '../components/OpenCells.vue';


export default {
  components: {
    draggable,
    // 'open-cells': OpenCells,
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
    return { ...$return };
  },
  created() {
    const pokers = lodash.shuffle('♠♣♥♦').map(i => [
      'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k',
    ].map(n => `${i}-${n}`)).flat();
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
