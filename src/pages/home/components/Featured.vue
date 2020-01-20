<template>
  <div>
    <div class="featured-title">猜你喜欢</div>
    <ul>
      <li 
      class="featured-item border-bottom" 
      v-for="item of featuredList" 
      :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">详情</button>
          </div>
        </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "HomeFeatured",
  data () {
    return {
      featuredList: [{
      id: '0001',
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
      title: '故宫',
      desc: '世界五大宫之首，穿越与您近在咫尺'
    }, {
      id: '0002',
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
      title: '八达岭长城',
      desc: '不到长城非好汉'
    }, {
      id: '0003',
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_200x200_51d03f19.jpg',
      title: '古北水镇',
      desc: '走进那个画中的小镇'
    }, {
      id: '0004',
      imgUrl: 'http://img1.qunarzz.com/sight/p0/1911/29/29d9b9078000774fa3.img.jpg_200x200_3621a35a.jpg',
      title: '北京欢乐谷',
      desc: '亚洲唯一飞行式过山车等你来挑战'
    },]
    }    
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
    color: $bgColor
  .featured-item
    overflow: hidden
    display: flex
    height: 2.2rem
    .item-img
      width: 1.8rem
      height: 1.8rem
      padding: .2rem
    .item-info
      padding: .2rem
      .item-title
        line-height: .54rem
        font-size: .32rem
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        margin-top:.2rem
        background: #ff9300
        border-radius: .06rem
        padding: .02rem .16rem
        color: #fff
</style>
