<template>
  <div class="card"
    :class="[`poker-${ poker.poker }`, { 'extra-soldier': poker.chainSelect }]"
    @mousedown="mousedown"
    @mouseup="mouseup"
    @mouseout="mouseup"
    :draggable="poker.chainSelect"
    :aria-dropeffect="poker.chainSelect"
    :aria-grabbed="poker.chainSelect"
    :data-card="`${poker}`"
  ></div>
</template>

<script>
export default {
  props: {
    poker: { type: Object, required: true },
  },
  methods: {
    mousedown(event) {
      this.$emit('card-press', this.poker, event); // cascade
    },
    mouseup() {
      this.$emit('card-release'); // cascade
    },
  },
};
</script>

<style lang="less" scoped>
.card {
  // transition: all 0.3s;
  transform: translateZ(0);
  cursor: -webkit-grab;
  cursor: grab;
  cursor: context-menu;
}
</style>
