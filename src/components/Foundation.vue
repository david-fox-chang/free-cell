<template>
  <sortable-stack
    class="foundation-wrapper"
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
    },
  }),
};
</script>

<style lang="less">
.foundation-wrapper {
  width: 100px;
  position: relative;
  height: $width * 1.6;
  & > .card {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
