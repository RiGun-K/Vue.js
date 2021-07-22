<template>
  <div id="app">
    <h1>My Todo App!</h1>
    <TodoList></TodoList>
  </div>
</template>

<!-- 일반적으로 App.vue 에서 셋팅을 한다 . 액티비티메인이라고 생각하면 됨 -->

<script>
import TodoList from './components/TodoList.vue'


export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
*, *::before, *::after {
  box-sizing: border-box;
}

#app {
  max-width: 400px;
  margin:0 auto;
  line-height: 2.0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #32486F;
}

h1{
  text-align: center;
}
</style>
