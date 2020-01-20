<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key=item.id>
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
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/7b45da191f638f13455777030853a1ea.jpg_750x200_883fe3a8.jpg'
      },{
        id: '0002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/1586638277619f1041ebd03877cfccee.jpg_750x200_8db6a58a.jpg'
      },{
        id: '0003',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/9c4bd16baa22bcd6810b714b225b5c33.jpg_750x200_95d6ad38.jpg'
      }]
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
    padding-bottom: 31.25%
    background: #eee
    // height: 31.25vw 浏览器兼容性
    swiper-pagination-bullet-active
    .swiper-img
      width: 100%
</style>
