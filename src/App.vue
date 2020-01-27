<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <!-- <router-view v-if="!$route.meta.keepAlive" /> -->
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: ;
  margin-top: 60px;
} */
</style>
