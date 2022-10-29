import { createApp } from 'vue';
import App from '@/app.vue';
import { router } from '@/router';

import '@/design/main.scss';

const app = createApp(App);

app.use(router);

app.mount('#app');
