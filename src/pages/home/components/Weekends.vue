<template>
  <div>
    <div class="recommends">周末去哪儿</div>
    <ul>
      <li class="recommend border-bottom" v-for="item in list" :key="item.id">
        <div>
          <img class="recommend-img" :src="item.imgUrl" alt="">
        </div>
        <div class="recommend-desc">
          <p class="recommend-desc-title">{{item.title}}</p>
          <p class="recommend-desc-info">{{item.desc}}</p>
        </div>
      </li>
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
  .recommends
    background: #eee
    margin-top: .2rem
    line-height: .7rem
    padding-left: .5rem
  .recommend
    margin: .2rem
    overflow: hidden
    height: 0
    padding-bottom: 55%
    position relative
    border-bottom: 1px solid #eee
    .recommend-img
      position absolute
      top: 0
      left: 0
      right: 0
      bottom: .8rem
      width: 100%
    .recommend-desc
      line-height: .4rem
      position: absolute
      bottom: .2rem
      font-size: .4rem
      color: #bbb
      .recommend-desc-title
        margin-top: .4rem
      .recommend-desc-info
        margin-top: .3rem
</style>
