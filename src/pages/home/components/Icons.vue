<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <img class="icon-img" :src="item.imgUrl" alt="">
          <p class="icon-title">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index/8)
        if (!pages[page]){
          pages[page] =[]
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    overflow: hidden
    padding-bottom: 50%
    height: 0
    .icon
      overflow: hidden
      padding-bottom: 25%
      width: 25%
      position: relative
      height: 0
      float: left
      .icon-img
        position: absolute
        top: 0
        left: 10%
        right: 0
        bottom: .44rem
        width: 80%
        box-sizing: border-box
        padding: .1rem
      .icon-title
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
</style>
