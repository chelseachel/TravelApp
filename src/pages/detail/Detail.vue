<template>
  <div>
    <detail-banner 
      :sightName="sightName" 
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-describe></detail-describe>
    <div class="content">
      <div class="tickets-title border-bottom">
        门票
      </div>
      <detail-list :list="categoryList"></detail-list>
      <detail-comments :list="commentList"></detail-comments>
    </div>
  </div>
</template>

<script type="text/javascript">
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailDescribe from './components/Describe.vue'
import DetailList from './components/List.vue'
import DetailComments from './components/Comments.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailDescribe,
    DetailList,
    DetailComments
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
      commentList: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json?', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      const result = res.data
      if (result.ret && result.data) {
        const data = result.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
        this.commentList = data.commentList
      }
    }
    
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .content
    height: 18rem
    .tickets-title
      overflow: hidden
      height: .86rem
      line-height: .86rem
      font-size: .32rem
      padding: 0 .4rem
    .tickets-title::after
      content: ""
      position: absolute
      top: .3rem
      left: .2rem
      width: .06rem
      height: .26rem
      background: $bgColor
      border-radius: .04rem
</style>
