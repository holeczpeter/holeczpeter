import Vue from "vue";
import App from "./App.vue";
import CoolLightBox from "vue-cool-lightbox";
import ScrollFixedHeader from "vuejs-scroll-fixed-header";
import VueScrollactive from "vue-scrollactive";
import VueParticles from "vue-particles";
import BackTop from "@mlqt/vue-back-top";
import VueScrollReveal from "vue-scroll-reveal";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import "./assets/scss/style.scss";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import i18n from './i18n'
import en from './locales/en.json'
import hu from './locales/hu.json'
import router from "./router";
export default {
    en, hu
}
Vue.use(CoolLightBox);
Vue.use(BackTop);
Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal",
  duration: 1500,
  scale: 1,
  distance: "100px",
  mobile: true,
});
Vue.use(ScrollFixedHeader);
Vue.use(VueParticles);
Vue.use(VueScrollactive);
Vue.use(VueToast);
Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
