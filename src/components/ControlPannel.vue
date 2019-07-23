<template>
  <div class="control-pannel">
    <slot name="title"></slot>
    <slot class="text" name="text"></slot>
    <div class="control-buttons">
      <span class="control-button">重新開始</span>
      <span class="control-button">開新一局</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.control-buttons {
  &::after {
    content: '或直接關閉視窗 ╳ 結束遊戲';
    display: block;
  }
}

.control-button {
  display: inline-block;
  margin-left: 20px;
  margin-right: 20px;
}

.text {
  text-align: center;
  & > span {
    display: block;
  }
}
</style>
