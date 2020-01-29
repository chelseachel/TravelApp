<template>
  <div>
    <div class="featured-title">猜你喜欢</div>
    <ul>
      <router-link tag="li" :to="'/detail/' + item.id"
      class="featured-item border-bottom" 
      v-for="item of list" 
      :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "HomeFeatured",
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .featured-title
    line-height: .8rem
    text-indent: .2rem
    font-size: .32rem
  .featured-item
    overflow: hidden
    display: flex
    height: 2.2rem
    .item-img
      width: 1.8rem
      height: 1.8rem
      padding: .2rem
    .item-info
      flex: 1
      padding: .2rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        margin-top:.2rem
        background: #ffb436
        border-radius: .06rem
        padding: .02rem .16rem
        color: #fff
</style>
