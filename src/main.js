import "./assets/main.css";
import "preline/preline";
import { createApp } from "vue";
import router from "./router/index.js";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
