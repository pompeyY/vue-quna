<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-back">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont icon-search">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link :to="{name: 'City'}">
      <div class="header-right">{{this.$store.state.city}}
        <span class="iconfont icon-rows">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display: flex
    background: $bgColor
    color: #fff
    line-height: .86rem
    .header-left
      width: .64rem
      float: left
      .icon-back
        font-size .4rem
        text-align: center
        margin-left: .1rem
    .header-input
      flex: 1
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      height: .64rem
      background: #fff
      border-radius: .1rem
      color: #ccc
      .icon-search
        padding-left :.1rem
    .header-right
      min-width: 1.24rem
      padding: 0 .1rem
      color: #fff
      text-align: center
      float: right
</style>
