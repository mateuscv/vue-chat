import Vue from "vue";
import App from "./App.vue";
import SocketIo from "socket.io-client";
import VueSocketIo from "vue-socket.io";

export const Socket = SocketIo(`http://localhost:3000`);

Vue.use(VueSocketIo, Socket);

new Vue({
  el: "#app",
  render: h => h(App)
});
