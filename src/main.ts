import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'
import scrollAnimation from './directives/v-scroll-animation'

const app = createApp(App)
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en:en,
        fr:fr,
    },
})
app.use(router)
app.use(i18n)
app.directive('scroll-animate', scrollAnimation)
app.mount('#app')
