<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-featured :list="featuredList"></home-featured>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header.vue'
  import HomeSwiper from './components/Swiper.vue'
  import HomeIcons from './components/Icons.vue'
  import HomeFeatured from './components/Featured.vue'
  import HomeWeekend from './components/Weekend.vue'
  import axios from 'axios'
  import { mapState } from 'vuex'
  export default {
    name: 'Home',
    components: {
      HomeHeader: HomeHeader,
      HomeSwiper: HomeSwiper,
      HomeIcons: HomeIcons,
      HomeFeatured: HomeFeatured,
      HomeWeekend: HomeWeekend,
    },
    data () {
      return {
        lastcity: '',
        swiperList: [],
        iconList: [],
        featuredList: [],
        weekendList: []
      }
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      getHomeInfo () {
        axios.get('/api/index.json?city=' + this.city)
          .then(this.getHomeInfoSucc) // axios返回一个promise对象
      },
      getHomeInfoSucc (res) {
        const result = res.data //获取到对象的数据
        if (result.ret && result.data) {
          const data = result.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.featuredList = data.featuredList
          this.weekendList = data.weekendList
        }
        // console.log(result);
      }
    },
    mounted () {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    activated () {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
    }
  }
</script>
