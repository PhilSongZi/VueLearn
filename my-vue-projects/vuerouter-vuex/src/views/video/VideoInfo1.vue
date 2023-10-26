<template>
  <div class="video-info1">
    <h3>二级组件：点赞情况分析</h3>
  </div>
</template>

<script>
export default {
  name: 'VideoInfo1',
  // 编程式路由，通过props接收路由参数
  created () {
    console.log(this.$store.state.loginStatus)
    // console.log(this.$store.modules.a.state.loginStatus)
    setTimeout(() => {
      // this.$router.push({ name: 'home' })， 在路由切换的时候传递一些参数
      // this.$router.push({ name: 'video-info2', query: { someData: 'video-info1传递过来的信息' } })
    }, 3000)
  }
}
</script>

<style>

</style>
