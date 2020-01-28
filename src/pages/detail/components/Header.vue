<template>
  <div>
   <router-link tag="div" to="/" class="header-abs">
     <div class="iconfont iconreturn"></div>
   </router-link>
   <div class="header-fixed" :style="opacityStyle">
    景点详情
    <router-link to="/">
      <div class="iconfont iconreturn"></div>
    </router-link>
   </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      console.log('scroll');
      const scrollTop = document.documentElement.scrollTop
      if(scrollTop > 60) {
        let opacity = scrollTop / 140
        // opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity: opacity }
      } else {
        this.opacityStyle = { opacity: 0 }
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    background: rgba(0, 0, 0, .5)
    text-align: center
    .iconreturn
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 10
    position: fixed
    top: 0
    left: 0
    right: 0
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    font-size: .32rem
    background: $bgColor
    .iconreturn
      position: absolute
      top: 0
      left: 0
      width: .8rem
      font-size: .4rem
      color: #fff
</style>
