import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import VueFullPage from "vue-fullpage.js";
import VueLazyload from "vue-lazyload";

// Vue Toastification imports
import Toast, { POSITION } from "vue-toastification";

import "vue-toastification/dist/index.css";

const app = createApp(App);

// Toastification options
const options = {
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
};

// Use Toastification plugin
app.use(Toast, options);
app.use(VueFullPage);
app.use(VueLazyload);

app.mount("#app");
