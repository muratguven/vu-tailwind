import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router/index';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import specific icons */
import { faArrowRightArrowLeft, faCaretDown, faCircleCheck, faDrawPolygon, faGear, faHouse, faMoon, faObjectGroup, faRainbow, faReceipt, faUserSecret, faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faHouse,faMoon,faRainbow,faGear,faCircleCheck,faArrowRightArrowLeft, faObjectGroup,faXmark,faCaretDown,faReceipt,faDrawPolygon)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
