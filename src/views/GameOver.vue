<template>
    <control-pannel class="game-over">
      <template v-slot:title>
        <img
          class="game-over"
          src="@img/img-gameover-tittle.svg"
          alt="game over"
        />
      </template>
      <template v-slot:text>
        <article class="text">
          <span>看來你的一番努力</span>
          <span>終究是無法</span>
          <span>讓他們喝到下午茶囉～</span>
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
img.game-over {
  display: block;
  margin-left: 95 / 520 * 100%;
}

</style>
