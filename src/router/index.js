import { createRouter, createWebHistory } from 'vue-router';
import MenuView from '../views/MenuView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MenuView
    },
    {
      path: '/jogo',
      name: 'jogo',
      component: () => import('../views/JogoView.vue')
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: () => import('../views/TutorialView.vue')
    },
    {
      path: '/decks',
      name: 'decks',
      component: () => import('../views/DecksView.vue')
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../views/SobreView.vue')
    }
  ]
});

export default router;
