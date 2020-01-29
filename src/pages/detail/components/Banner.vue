<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="this.bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number"><span class="iconfont iconpicture_fill"></span>{{this.gallaryImgs.length}}</div>
        </div>
    </div>
    <fade-animation>
      <common-gallery 
        :imgs="gallaryImgs" 
        v-show="showGallery"
        @close="handleGalleryClose"
      ></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import commonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade-animation/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    commonGallery,
    FadeAnimation
  },
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
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
          margin-right: .06rem
</style>
