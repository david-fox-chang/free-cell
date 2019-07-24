<template>
  <div class="cards-playground">
    <draggable v-model="myArray1" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in myArray1" :key="element">{{element}}</div>
    </draggable>
    <hr>
    <draggable v-model="myArray2" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in myArray2" :key="element">{{element}}</div>
    </draggable>
    <hr>

    <draggable v-model="myArray3" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in myArray3" :key="element">{{element}}</div>
    </draggable>
    <hr>

    <draggable v-model="myArray4" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in myArray4" :key="element">{{element}}</div>
    </draggable>
    <hr>

    <draggable v-model="myArray5" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in myArray5" :key="element">{{element}}</div>
    </draggable>
    <hr>

    <draggable v-model="myArray6" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in myArray6" :key="element">{{element}}</div>
    </draggable>
    <hr>

    <draggable v-model="myArray7" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in myArray7" :key="element">{{element}}</div>
    </draggable>
    <hr>

    <draggable v-model="myArray8" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in myArray8" :key="element">{{element}}</div>
    </draggable>
    <hr>

    <draggable v-model="oneElArr1" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in oneElArr1" :key="element">{{element}}</div>
    </draggable>
    <hr>
    <draggable v-model="oneElArr2" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in oneElArr2" :key="element">{{element}}</div>

    </draggable>
    <hr>
    <draggable v-model="oneElArr3" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in oneElArr3" :key="element">{{element}}</div>

    </draggable>
    <hr>
    <draggable v-model="oneElArr4" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in oneElArr4" :key="element">{{element}}</div>

    </draggable>
    <hr>
    <draggable v-model="finPoker1" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in finPoker1" :key="element">{{element}}</div>

    </draggable>
    <hr>
    <draggable v-model="finPoker2" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in finPoker2" :key="element">{{element}}</div>

    </draggable>
    <hr>
    <draggable v-model="finPoker3" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in finPoker3" :key="element">{{element}}</div>

    </draggable>
    <hr>
    <draggable v-model="finPoker4" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in finPoker4" :key="element">{{element}}</div>

    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  data: () => ({
    myArray1: [],
    myArray2: [],
    myArray3: [],
    myArray4: [],
    myArray5: [],
    myArray6: [],
    myArray7: [],
    myArray8: [],
    oneElArr1: [],
    oneElArr2: [],
    oneElArr3: [],
    oneElArr4: [],
    finPoker1: [],
    finPoker2: [],
    finPoker3: [],
    finPoker4: [],
  }),
  created() {
    const pokers = ['♠', '♣', '♥', '♦'].map(i => [
      'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k',
    ].map(n => `${i}-${n}`)).flat();

    console.log(pokers, this.myArray7.push(...pokers));
  },
  watch: {
    oneElArr1(newlist) {
      console.log('oneElArr1', newlist.length);
      if (newlist.length > 1) {
        console.log('fail');
      }
    },
  },
};
</script>

<style lang="less" scoped>

</style>
