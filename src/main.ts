import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { i18n } from "./i18n/index.ts";
import { createPinia } from "pinia";
import router from "./router/index.ts";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(pinia);
app.mount("#app");
