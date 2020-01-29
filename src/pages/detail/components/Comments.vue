<template>
  <div class="comment-wrapper">
    <div class="comment-title">
      用户评论
    </div>
    <div class="comment-list">
      <common-comment v-for="(item, index) of list" :key="index" :content="item"></common-comment>
    </div>
    <div class="comment-more">
      查看全部评论
      <span class="iconfont iconenter"></span>
    </div>
  </div>
</template>

<script>
import commonComment from 'common/comment/Comment'
export default {
  name: 'DetailComments',
  props: {
    list: Array
  },
  components: {
    commonComment
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .comment-wrapper
    position:relative
    border-top: .2rem solid #eee
    .comment-title
      overflow: hidden
      height: .86rem
      line-height: .86rem
      font-size: .32rem
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
    .comment-more
      border-top: 1px dashed #eee
      line-height: .8rem
      color: #ccc
      text-align: center
</style>
