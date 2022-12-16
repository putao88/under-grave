import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import ElementUI from 'element-ui';                      // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css';
import "./styles/reset.scss";
import "./styles/global.scss";
import "./assets/local/iconfonts/iconfont.css";
import utils from "./utils/index";
Vue.prototype.$utils = utils;
import filters from "./utils/filters";
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
import api from "./api/api";
Vue.prototype.$api = api;

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

// import {
//   Message,
// } from "element-ui";
Vue.use(ElementUI); 
// Vue.prototype.$message = (option) => {
//   option.customClass = i18n.locale == "en" ? "fontfamily_en" : "fontfamily_zh";
// return Message(option);
// };

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount("#app");
