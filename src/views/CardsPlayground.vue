<template>
  <div class="cards-playground">
    <router-link :to="{ name: 'week-2:game-over' }">over</router-link>
    <router-link :to="{ name: 'week-2:game-pass' }">pass</router-link>
    <router-view name="stage" />
  </div>
</template>
