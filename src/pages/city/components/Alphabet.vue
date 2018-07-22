<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letter"
      :key="item"
      :ref="item"
      @click="handleGetLetter"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchStart: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letter () {
      const letter = []
      for (let i in this.cities){
        letter.push(i)
      }
      return letter
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  props: {
    cities: Object
  },
  methods: {
    handleGetLetter (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStart = true
    },
    handleTouchMove (e) {
      if (this.touchStart) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letter.length) {
            this.$emit('change', this.letter[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStart = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
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
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
