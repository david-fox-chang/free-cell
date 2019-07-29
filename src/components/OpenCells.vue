<template>
  <sortable-stack
    class="opencell-wrapper"
    :sort-configs="sortConfigs"
    :list="list"
  ></sortable-stack>
</template>

<script>
import SortableStack from './SortableStack/Index.vue';

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
      group: { put: true },
      // filter: '.card:not(:last-of-type)',
      swapThreshold: 0.5,
    },
  }),
};
</script>

<style lang="less">
.opencell-wrapper {
  width: 100px;
  position: relative;
  height: $width;
  & > .card {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
