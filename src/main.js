import './assets/styles.scss';
import './assets/main.css';
import 'aos/dist/aos.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import AOS from 'aos';

AOS.init({
    duration: 1200, // Duração da animação
    easing: 'ease-in-out', // Tipo de easing
    once: true // Anima apenas uma vez
  });
  
const app = createApp(App);
app.use(router);
app.mount('#app');
