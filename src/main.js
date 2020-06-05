import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input
} from "ant-design-vue";
// import "ant-design-vue/lib/button/style";

Vue.config.productionTip = false;

//對ant-design-vue作‘全局註冊’；
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
