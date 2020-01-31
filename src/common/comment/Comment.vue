<template>
  <div class="comment-item border-top">
    <div class="comment-head">
      <div class="comment-star">
        <span class="iconfont iconcollection_fill"></span>
        <span class="iconfont iconcollection_fill"></span>
        <span class="iconfont iconcollection_fill"></span>
        <span class="iconfont iconcollection_fill"></span>
        <span class="iconfont iconcollection_fill"></span>
      </div>
      <div class="comment-info">
        <span class="comment-name">{{content.commentName}}</span>
        <span class="comment-date">{{content.commentDate}}</span>
      </div>     
    </div>
    <div :class="foldClass">
      {{content.commentContent}}
    </div>  
    <div class="comment-fold iconfont iconunfold" @click="handleFoldClick"></div>
  </div>
</template>

<script>
export default {
  name: 'commonComment',
  props: {
    content: Object,
    index: Number
  },
  data () {
    return {
      unfold: false,
      foldClass: "comment-content-fold"
    }
  },
  methods: {
    handleFoldClick (e) {
      e.target.className = this.unfold ? 'comment-fold iconfont iconunfold' : 'comment-fold iconfont iconpackup'
      this.unfold = !this.unfold
      this.foldClass = this.unfold ? "comment-content-unfold" : "comment-content-fold"
    }
  }
}
</script>

<style lang="stylus" scoped>
  .comment-item
      line-height: .6rem
      padding: .3rem .2rem
      font-size: .26rem
      .comment-head
        display: flex
        justify-content: space-between
        .iconcollection_fill
          font-size: .26rem
          color: #ffb436
        .comment-name
          margin-right: .2rem
      .comment-content-fold
        overflow: hidden
        max-height: 2.06rem
        color: #666
        line-height: .42rem
      .comment-content-unfold
        height: auto
        overflow: auto
        color: #666
        line-height: .42rem
      .iconunfold
        height: .48rem
        line-height: .48rem
        text-align: center
        color: #ccc
      .iconpackup
        height: .48rem
        line-height: .48rem
        text-align: center
        color: #ccc
</style>
