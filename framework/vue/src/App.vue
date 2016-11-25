<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <div id="app-3">
      <p v-if="seen">Now you see me</p>
    </div>
    <div id="app-4">
      <ol>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  data () {
    return {
      seen: true,
      todos: [
        { text: 'Learn Javascript' },
        { text: 'Learn Vue' },
        { text: 'Learn React' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
