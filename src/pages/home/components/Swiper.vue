<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in list" :key="index">
        <img class="swiper-img"
             :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
    overflow: hidden
    height: 0
    padding-bottom: 29.5%
    background: #eee
    .swiper-img
      width: 100%
</style>
