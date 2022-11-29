import Vue from "vue";
import VueI18n from "vue-i18n";
import utils from "../utils/index";
import zhLocale from "element-ui/lib/locale/lang/zh-CN";
import enLocale from "element-ui/lib/locale/lang/en";
import ElementLocale from "element-ui/lib/locale";
import zh from "./zh";
import en from "./en";
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: utils.getCookie("LANG") || "en",
  messages: {
    zh: Object.assign(zh, zhLocale),
    en: Object.assign(en, enLocale),
  },
});
ElementLocale.i18n((key, value) => i18n.t(key, value));
export default i18n;
