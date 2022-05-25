import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/base.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");

export default (value) => {
  const date = new Date(value);
  return date.toLocaleString(["em-US"], {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
