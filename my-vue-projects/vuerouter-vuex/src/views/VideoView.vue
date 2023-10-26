<template>
  <div class="video">
    <h3>一级组件：视频信息</h3>
    <p>视频id为：{{ id }}</p>
    <router-link :to="{ name: 'video-info1', params: { id: 28 }}">点赞信息</router-link> |
    <router-link :to="{ name: 'video-info2', params: { id: 28 }}">互动信息</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'VideoView',
  props: ['id']
}
</script>

<style>

</style>
