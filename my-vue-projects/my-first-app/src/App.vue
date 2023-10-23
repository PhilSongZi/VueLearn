<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>父组件中接收到的数据：{{ childData }}</h1>
    <!-- 可以在子组件中规定插槽在哪个位置进行呈现 -->
    <HelloWorld 
      msg="Welcome to Your Vue.js App"
      :count="parentCount"  
      @child-count-change="handler"
    >
      这是默认内容1
      <template v-slot:footer="{ childCount }">
        这是第一个footer{{ childCount }}
      </template>
    </HelloWorld>
    <HelloWorld>
      这是默认内容2
    </HelloWorld>
    <HelloWorld>
      这是默认内容3 
    </HelloWorld>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      parentCount: 200, // 父组件中的响应式数据，通过props传递给子组件
      childData: 0
    }
  },
  methods: {
    // 子组件自己定义了一个方法叫做child-count-change，由父组件做一个监听，
    // 只要子组件触发了这个事件（通过$emit()），父组件就会执行这个方法
    handler (childCount) {
      this.childData = childCount
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
