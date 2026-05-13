import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { i18n } from './locales';
import './style.css';

const app = createApp(App).use(router).use(i18n);

app.mount('#app');

// Hide loading screen after mount
const loader = document.getElementById('app-loading');
if (loader) {
  loader.classList.add('hidden');
  loader.addEventListener('transitionend', () => loader.remove(), {
    once: true,
  });
}
