<template>
  <div>
    <div class="recommends">热销推荐</div>
    <ul>
      <router-link tag="li" :to="{name: 'Detail', params: {id: item.id}}" class="recommend border-bottom" v-for="item in list" :key="item.id">
        <img class="recommend-img" :src="item.imgUrl" alt="">
        <div class="recommend-desc">
          <p class="recommend-desc-title">{{item.title}}</p>
          <p class="recommend-desc-info">{{item.desc}}</p>
          <button class="recommend-desc-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/minxin.styl'
  .recommends
    background: #eee
    margin-top: .2rem
    line-height: .7rem
    padding-left: .5rem
  .recommend
    margin: .2rem
    overflow: hidden
    height: 0
    padding-bottom: 30%
    position relative
    border-bottom: 1px solid #eee
    .recommend-img
      position absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      height: 100%
    .recommend-desc
      position: absolute
      left: 35%
      font-size: .4rem
      bottom: .3rem
      .recommend-desc-title
        margin-top: .4rem
      .recommend-desc-info
        margin-top: .3rem
        color: #ccc
        ellipsis()
      .recommend-desc-btn
        margin-top: .3rem
        background: #fff018
        box-sizing: border-box
        color: #fff
        font-size: .3rem
        padding: .1rem
</style>
