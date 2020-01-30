<template>
  <ul class="list" :cities="cities">
    <li 
      class="item" 
      v-for="item of letters" 
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  //Ajax获取到数据以后，cities值发生变化，页面更新渲染，此时在updated钩子里面执行以下内容，获取‘A’所在DOM对应的offsetTop值
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },

    handleTouchStart () {
      this.touchStatus = true
      console.log(this.touchStatus);
    },
    handleTouchMove (e) {
      if(this.touchStatus) {
        if (!this.timer) {
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 18)
            if (index >= 0 && index < this.letters.length) {
             this.$emit('change', this.letters[index])
              console.log(this.letters[index])
           }
           this.timer = null
           clearTimeout(this.timer)
          }, 16) 
        } 
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  computed: {
    letters () {
      const letters = []
      //遍历cities对象的属性
      for (let i in this.cities) {
        letters.push(i)
      }
    return letters
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      font-size: .24rem
      line-height: .36rem
      text-align: center
      color: $bgColor
</style>
