<template>
  <draggable v-model="list" group="people" @start="drag=true" @end="drag=false">
    <cell
      v-for="element in list"
      :key="element"
      :card="element"
    >{{ element }}</cell>
  </draggable>
</template>


<script>
import Draggable from 'vuedraggable';
import Cell from './Cell.vue';

export default {
  components: {
    [['draggable']]: Draggable,
    [['cell']]: Cell,
  },
  props: {
    list: {
      default: [],
    },
    maxLen: {
      default: 1,
    },
  },
  methods: {
    isOverload(newList, oldList, event, position) {
      if (newList.length > 1) {
        this.list = oldList;
        this.$emit('over-load', { event, position });
        return true;
      }
      return false;
    },
  },
  watch: {
    list(newList, oldList, event, position) {
      if (!this.isOverload(newList, oldList, event, position)) {
        this.$emit('payload-accept', { event, position, pipe: 'step-record' });
      }
    },
  },
};
</script>
