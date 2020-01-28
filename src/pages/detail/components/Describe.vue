<template>
  <div  class="desc">
    <div>
     <span class="iconfont iconpicture_fill"></span>
     查看景点简介及开放时间
     <div class="iconfont iconreturn"></div>
      </div>    
  </div>
</template>

<script>
export default {
  name: 'DetailDescribe',
}
</script>

<style lang="stylus" scoped>
  .desc
    z-index: 2
    position: relative
    top: -.1rem
    border-radius: .1rem .1rem 0 0
    height: .76rem
    line-height: .76rem
    background: #fff
    .iconpicture_fill
      margin-left: .2rem
      margin-right: .06rem
    .iconreturn
      float: right
      margin-right: .2rem
      transform: rotate(180deg)
      transform-origin: 50% 50%
      font-size: .4rem
      color: #ccc
</style>
