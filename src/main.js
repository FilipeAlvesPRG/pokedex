import { createApp } from 'vue'
import './global.scss'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowLeft, faMagnifyingGlass, faArrowUp, faRefresh } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faArrowLeft, faMagnifyingGlass, faArrowUp, faRefresh)

/* create the app */
const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');

//createApp(App).mount('#app')
