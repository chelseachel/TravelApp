<template>
  <div>
   <div class="item" v-for="(item, index) of list" :key="index">
     <div class="item-title border-bottom">
       <span class="item-title-icon"></span>
       {{item.title}}
     </div>
     <div v-if="item.children" class="item-children">
       <detail-list :list="item.children"></detail-list>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    overflow: hidden
    height: .86rem
    line-height: .86rem
    margin: 0 .2rem
    padding: 0 .2rem
    .item-title-icon
      float: left
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.36rem no-repeat
      margin-top: .28rem
      margin-right: .02rem
      background-size: .32rem 2.4rem
  .item-children
    padding-left: .2rem
</style>
