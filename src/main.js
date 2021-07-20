import Vue from 'vue'
import App from './App.vue'
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.scss';

NutUI.install(Vue);

import "./assets/rem";
import "./assets/reset.scss";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
