import Vue from 'vue';
import Router from 'vue-router';
import EntryPage from './views/EntryPage.vue';
import CardsPlayground from './views/CardsPlayground.vue';
import LoadProcess from './views/LoadProcess.vue';
import GameOver from './views/GameOver.vue';
import GamePass from './views/GamePass.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'entry-page',
      component: EntryPage,
    },
    {
      path: '/play',
      component: CardsPlayground,
      children: [
        { path: '', name: 'week-2:cards-playground' },
        {
          path: 'loading',
          name: 'week-2:load-process',
          components: { stage: LoadProcess },
        },
        {
          path: 'over',
          name: 'week-2:game-over',
          components: { stage: GameOver },
        },
        {
          path: 'pass',
          name: 'week-2:game-pass',
          components: { stage: GamePass },
        },
      ],
    },
  ],
});
