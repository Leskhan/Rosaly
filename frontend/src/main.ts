import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import './assets/index.css';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import router from './router';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.mount('#app');
