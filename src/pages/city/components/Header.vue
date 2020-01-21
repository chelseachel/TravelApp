<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont iconreturn"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .header
    position: relative
    overflow: hidden
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    font-size: .32rem
    background: $bgColor
    .iconreturn
      position: absolute
      top: 0
      left: 0
      width: .8rem
      font-size: .4rem
      color: #fff
</style>
