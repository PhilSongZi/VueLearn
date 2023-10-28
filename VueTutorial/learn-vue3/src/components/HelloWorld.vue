<template>
  <div class="hello">
    <!-- <h1>{{ getLen }}</h1> -->
    <button @click="clickHandler">修改</button>
  </div>
</template>

<script setup>
import { reactive, watchEffect, ref } from 'vue';

// 1. 声明响应式数据：reactive ，shalllowReactive(只响应一层数据)——两者内部传入对象类型的数据，如 数组 set map
// 基于ES6的Proxy实现(proxy 支持的只能是对象类型的数据)
// const myData = shallowReactive(
//   {
//     name: '张三',
//     age: 18,
//     info: {
//       height: 180,
//       weight: 140
//     },
//     friends: ['小李', '小王'],
//     nums: [1, 2, 3]
//   })

// 2. 声明响应式数据：ref(非对象类型的数据)
// 创建新的空对象，将传入的数据作为新对象的属性，返回新对象
// const count = ref(0)

// 3. readonly (声明只读数据，无法修改，非响应式的)
// const myData = readonly({
//     name: '张三',
//     age: 18,
//     info: {
//       height: 180,
//       weight: 140
//     },
//     friends: ['小李', '小王']
// })

// 4. computed (计算属性)
// const content = ref('这是测试内容')
// const getLen = computed (() => {
//   console.log('getLen执行了')
//   return content.value.length
// })

// 5. watch (侦听器)
const count = ref(0)
const myData = reactive({
    name: '张三',
    age: 18,
    info: {
      height: 180,
      weight: 140
    },
    friends: ['小李', '小王']
})
// watch 只支持 ref reactive 对象本身！要监听具体的属性，需写成函数形式
// watch(() => myData.age, (newVal, oldVal) => {
//   console.log(newVal, oldVal)
// })

// 6. watchEffect  只要其中包含的响应式数据发生变化，他就会触发执行
// ——从而，逻辑依赖于多个响应式数据时可以使用 watchEffect
watchEffect(() => {
  console.log('count的值为：' + count.value + '，myData的值为：' + myData.age)
})

function clickHandler () {
  // myData.friends.push('小红')
  // myData.age++

  // count.value++

  // myData.age++  // 控制台会提示 reactivity.esm-bundler.js:4 [Vue warn] Set operation on key "age" failed: target is readonly. 
  // myData.friends.push('小红') 

  // content.value += '!!'

  // count.value++

  myData.age++
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
