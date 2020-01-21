<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide v-for="item of list" :key=item.id>
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
  // >>> 样式穿透
  .wrapper >>> .swiper-pagination-bullet-active 
    background: #fff
  .wrapper
    overflow:hidden
    width: 100%
    height: 0
    padding-bottom: 26.7%
    background: #eee
    // height: 31.25vw 浏览器兼容性
    swiper-pagination-bullet-active
    .swiper-img
      width: 100%
</style>
