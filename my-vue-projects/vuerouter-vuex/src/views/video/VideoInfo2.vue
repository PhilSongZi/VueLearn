<template>
  <div class="video-info2">
    <h3>二级组件：互动情况分析</h3>
  </div>
</template>

<script>
export default {
  name: 'VideoInfo2',
  created () {
    // console.log(this.$route.query.someData)
    // console.log(this.$store.state.loginStatus)
    this.handler()
  },
  methods: {
    handler () {
      // mutations中的方法，通过commit提交
      // mutation 必须是同步函数
      this.$store.commit('changeCount', 1)
      this.$store.commit('changeCount', 2)

      // actions中的方法，通过dispatch提交，异步执行
      this.$store.dispatch('delayChangeCount', 10)
      this.$store.commit('changeCount', 3)

      // getters中的方法，通过getters获取
      console.log(this.$store.getters.len)
      console.log(this.$store.getters.len)
      console.log(this.$store.getters.len)
      console.log(this.$store.getters.len)

      // 经过 modules 的处理，state 的结构变成了：
      // console.log(this.$store.modules.a.getters.len)
      // console.log(this.$store.modules.b.getters.len)
    }
  }
}
</script>

<style>

</style>
