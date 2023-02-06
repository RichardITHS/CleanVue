import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
/* Efter nom install måste ni importera biblioteket här... */

import "./assets/main.css";

const app = createApp(App);

/* Biblioteket används sedan med use  */
app.use(router);

app.mount("#app");
