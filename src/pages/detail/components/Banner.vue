<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_600x330_8b04e389.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          <div class="banner-title-content">北京国际鲜花港(AAAA景区)</div>
        </div>
        <div class="banner-icon">
          <span class="iconfont icon-search">&#xe60f;</span>
          <div class="iconfont icon-num">39</div>
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="bannerImgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: "DetailBanner",
  components: {
    CommonGallary
  },
  props: {
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: absolute
    over-flow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      bottom: 0
      right: 0
      line-height: .6rem
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        margin-left: .2rem
        margin-bottom: .2rem
        .banner-title-content
          line-height: .4rem
          color: #fff
          font-size: .36rem
      .banner-icon
        position: absolute
        bottom: 0
        right: .2rem
        margin-left: .2rem
        margin-bottom: .1rem
        width: .7rem
        background: rgba(0, 0, 0, .8)
        padding: .1rem
        .iconfont
          font-size: .30rem
          color: #fff
        .icon-num
          float: right
</style>
