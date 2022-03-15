import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";

import VueSupabase from "vue-supabase";

Vue.use(VueSupabase, {
  supabaseUrl: "https://rwuelzbycnewcsmcuann.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3dWVsemJ5Y25ld2NzbWN1YW5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDczMTQyMTMsImV4cCI6MTk2Mjg5MDIxM30.BJhIo2x4DHMBRMwFwwpI7YE5gIFIpOi5QCyKWnPstnM",
  supabaseOptions: {},
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
