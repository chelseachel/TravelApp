<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      width: 100%
      height: .62rem
      box-sizing: border-box
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .1rem
      color: #666
</style>

