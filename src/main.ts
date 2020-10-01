import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

// Vue.config.productionTip = false

/* eslint-disable */
// @ts-ignore
createApp(App)
  /* eslint-disable */
  .use(Antd)
  .use(store)
  .use(router)
  // .use(VueCookies);
  .mount("#app");
