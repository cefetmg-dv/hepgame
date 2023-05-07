import './assets/styles.scss';
import './assets/main.css';
import * as bootstrap from 'bootstrap';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);

app.mount('#app');
