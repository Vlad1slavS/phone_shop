import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";

createApp(App)
  .use(PrimeVue, {
    unstyled: true,
  })
  .mount("#app");
