import Vue from "vue";
import App from "./App.vue";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import ConnectionStatus from "./components/ConnectionStatus.vue";
import Navbar from "./components/Navbar.vue";

console.log(VueSocketIO);

export const Socket = SocketIO("http://localhost:3000", {
  transports: ["websocket"]
});

Vue.component("connection-status", ConnectionStatus);
Vue.component("navigation-bar", Navbar);

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: Socket
  })
);

new Vue({
  el: "#app",
  render: h => h(App)
});
