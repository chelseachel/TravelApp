<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.currentCity}}</div>
            </div>
          </div>
        </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" 
            v-for="item of hotcities" 
            :key="item.id" 
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <ul class="item-list">
          <li class="item border-bottom" 
            v-for="innerItem of item" 
            :key="innerItem.id" 
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotcities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city) 
      // 将store的changeCity方法映射到mapMutations以后，写成下行这样即可
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity']) // 将 this.changeCity(city) 映射为 this.$store.commit('changeCity', city)
  },
  mounted () {
    const options = {
      click: true,
      tap: true,
      mouseWheel: true
    }
    this.scroll = new BScroll(this.$refs.wrapper, options)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0] //获取到字母对应的同字母的区域 //注意：循环输出的ref获取到的是一个数组
        this.scroll.scrollToElement(element) //BetterScroll滚动区自动定位到某个元素
      }
    }
  },
  activated () {
    this.scroll.refresh()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem
      padding-right: .6rem
      .button-wrapper
        width: 33.33%
        float: left
        .button
          margin: .1rem
          padding: .1rem 0
          border: .02rem solid #ccc
          border-radius: .06rem
          text-align: center
    .item-list
      .item
        line-height: .76rem
        color: #666
        padding-left: .2rem
        
</style>
