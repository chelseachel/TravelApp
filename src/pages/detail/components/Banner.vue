<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg">
      <div class="banner-info">
        <div class="banner-title">故宫(AAAAA景区)</div>
        <div class="banner-number"><span class="iconfont iconpicture_fill"></span>12</div>
        </div>
    </div>
    <common-gallery 
      :imgs="imgs" 
      v-show="showGallery"
      @close="handleGalleryClose"
    ></common-gallery>
  </div>
</template>

<script type="text/javascript">
import commonGallery from 'common/gallery/Gallery'
export default {
  name: 'Banner',
  data () {
    return {
      showGallery: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg', 'http://img1.qunarzz.com/sight/p0/1907/cd/cdd8448b61cd6042a3.img.jpg_r_800x800_e8f50aa2.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  },
  components: {
    commonGallery
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      justify-content: space-between
      position: absolute
      left: 0
      right: 0
      bottom: 0
      color: #fff
      padding: .2rem
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .5)) 
      .banner-title
        height: .6rem
        line-height: .6rem
        font-size: .36rem
      .banner-number
        height: .4rem
        line-height: .4rem
        margin-top: .1rem
        padding: 0 .3rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .5)
        font-size: .24rem
        .iconpicture_fill
          font-size: .24rem
</style>
