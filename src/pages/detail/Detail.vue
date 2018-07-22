<template>
  <div>
    <detail-banner :bannerImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="detail-body"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader
  },
  data () {
    return {
      gallaryImgs: ['http://img1.qunarzz.com/sight/p0/1506/dd/7659217cc529114eba75b42ace21ca4a.water.jpg_r_800x800_9456bcaa.jpg','http://img1.qunarzz.com/sight/p0/1506/ba/d25df17c5f6542e03695ba7b8bf766c4.water.jpg_r_800x800_ce4f6947.jpg']
    }
  }
}
</script>

<style lang="stylus" scoped>
  .detail-body
    height: 50rem
</style>
