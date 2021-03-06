import Vue from "vue";
import App from "./App.vue";

import '../packages/theme-chalk/index.stylus';

// import sorosis from '../packages/index';
import sorosis from './index';

Vue.use(sorosis)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
