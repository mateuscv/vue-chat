import Vue from "vue";
import App from "./App.vue";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";

console.log(VueSocketIO);

export const Socket = SocketIO("http://localhost:3000", {
  transports: ["websocket"]
});

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
