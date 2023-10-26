<template>
  <div id="app">
    <nav>
      <!-- router-link 修改当前路由地址，切换组件 -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- <router-link :to="{ name: 'about'}">AnotherWayOfAbout</router-link> -->
      <router-link :to="{ name: 'video', params: { id: 28 }}">Video</router-link>
    </nav>
    <!-- router-view 切换组件后的显示 -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
