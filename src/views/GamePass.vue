<template>
    <control-pannel class="game-pass">
      <template v-slot:title>
        <img
          class="game-pass"
          src="@img/img-win-tittle.svg"
          alt="game pass"
        />
      </template>
      <template v-slot:text>
        <article class="text">
          <span>你完成一件偉大的成就！</span>
          <span>看來今天又是不思議之國</span>
          <span>美好的一天呢～</span>
        </article>
      </template>
    </control-pannel>
</template>

<script>
import ControlPannel from '@/components/ControlPannel.vue';

export default {
  components: {
    'control-pannel': ControlPannel,
  },
};
</script>

<style lang="less" scoped>
img.game-pass {
  margin-left: auto;
  margin-right: auto;
  display: block;
}

</style>
