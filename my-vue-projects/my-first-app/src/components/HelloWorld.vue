<template>
  <div class="hello">
    <!-- 默认插槽 -->
    <slot>基础的默认内容</slot>
    <h1>{{ msg }}</h1>
    <p>props中的count是：{{ count }}</p>
    <button @click="handler">按钮</button>
    <!-- 具名插槽 -->
    <slot name="footer" :childCount="childCount">footer的默认内容</slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // 组件通信
  // 1.父传子：props 进行处理
  // 2.子传父：自定义事件 $emit()
  props: {  
    msg: String,
    count: {
      type: [String, Number],
      // default: 100,  // default：默认值 
      required: true  // required：必须使用父组件传递的数据 
    }
  },
  data () {
    return {
      childCount: 1
    }
  },
  methods: {
    handler () {
      this.childCount++
      // 子传父：$emit
      this.$emit('child-count-change', this.childCount)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: antiquewhite;
}
h3 {
  margin: 40px 0 0;
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
