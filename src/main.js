import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import  Fancybox  from "@fancyapps/ui/src/Fancybox/Fancybox.js";
// import axios
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(router).use(Fancybox).use(VueSweetalert2).mount('#app')
