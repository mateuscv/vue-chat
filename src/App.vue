<template>
  <div id="app">
    <navigation-bar />
    <div class="container"><message-list :messages="messages" /></div>
    <connection-status :isConnected="isConnected"></connection-status>
  </div>
</template>

<script>
import MessageList from "./components/MessageList.vue";
export default {
  name: "app",
  data() {
    return {
      isConnected: false,
      messages: [
        { id: 1, username: "Paul", message: "Hey!" },
        { id: 2, username: "Evan", message: "Sup?!" }
      ]
    };
  },
  sockets: {
    connect() {
      this.isConnected = true;
    },
    disconnect() {
      this.isConnected = false;
    }
  },
  components: {
    MessageList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
