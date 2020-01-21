<template>
  <div>
    <home-header :city="city"></home-header>
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
        city: '',
        swiperList: [],
        iconList: [],
        featuredList: [],
        weekendList: []
      }
    },
    methods: {
      getHomeInfo () {
        axios.get('/api/index.json')
          .then(this.getHomeInfoSucc) // axios返回一个promise对象
      },
      getHomeInfoSucc (res) {
        const result = res.data //获取到对象的数据
        if (result.ret && result.data) {
          const data = result.data
          this.city = data.city
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.featuredList = data.featuredList
          this.weekendList = data.weekendList
        }
        // console.log(result);
      }
    },
    mounted () {
      this.getHomeInfo()
    }
  }
</script>
