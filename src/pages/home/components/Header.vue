<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont iconreturn"></div>
    </div>
    <div class="header-input">
      <span class="iconfont iconsearch"></span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont iconunfold"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState([
      'city'
    ])
  }
}
</script>

<style lang="stylus" scoped>
  //root fontsize: 50px;
  @import '~styles/variables.styl'
  
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .iconreturn
        margin-left: .2rem
        font-size: .4rem
    .header-input
      flex: 1
      height: .58rem
      line-height: .58rem
      margin: .14rem .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      float: right
      text-align: center
      margin-right: .16rem
      color: #fff
      .iconunfold
        position: relative
        right: .04rem
        bottom: .04rem
        font-size: .2rem
        font-weight: 600
</style>
