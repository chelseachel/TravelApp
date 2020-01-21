<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">     
        <div 
          class="icon" 
          v-for="item of page" 
          :key="item.id"
          >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div> 
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item,index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-pagination-bullet-active 
    background: $bgColor
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 56%
  .icons
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 56%
    .icon
      position: relative
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: .3rem
        right: .3rem
        left: .3rem
        bottom: .6rem 
        text-align: center
        .icon-img-content
          height: 100%
      .icon-desc
        position: absolute
        right: 0
        left: 0
        bottom: 0.1rem
        height: .4rem
        line-height: .4rem
        text-align: center
        corlor: $darkTextColor
        ellipsis()
</style>
