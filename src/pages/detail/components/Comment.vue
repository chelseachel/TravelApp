<template>
  <div>
    <div class="comment-title border-bottom">
      用户评论
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailComment',
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .comment-title
    overflow: hidden
    height: .86rem
    line-height: .86rem
    font-size: .32rem
    border-top: .2rem solid #eee
    padding: 0 .4rem
  .comment-title::after
    content: ""
    position: absolute
    top: .3rem
    left: .2rem
    width: .06rem
    height: .26rem
    background: $bgColor
    border-radius: .04rem
</style>
