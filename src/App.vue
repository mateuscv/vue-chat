<template>
  <div id="app">
    <navigation-bar />
    <div class="container">
      <message-list :messages="messages" />
      <message-form></message-form>
    </div>
    <connection-status :isConnected="isConnected"></connection-status>
  </div>
</template>

<script>
import MessageList from "./components/MessageList.vue";
import MessageForm from "./components/MessageForm.vue";

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
    },
    chatMessage(messages) {
      //this will be ran every time the event with the same name is emitted
      this.messages = messages;
    }
  },
  components: {
    MessageList,
    MessageForm
  }
};
</script>

<style>
#app {
  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 300px;
  margin: 0 auto;
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
