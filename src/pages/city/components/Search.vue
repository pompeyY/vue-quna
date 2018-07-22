<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li class="search-item border-bottom" v-for="item in list " :key="item.id" @click="handleClickCity(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配的数据！
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      timer: null,
      list: []
    }
  },
  props: {
    cities: Object
  },
  methods: {
    handleClickCity (city) {
      this.$store.commit('changeCity', city)
      this.$router.push({name: 'Home'})
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setInterval(() => {
        const ret = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if ( value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              ret.push(value)
            }
          })
        }
        this.list = ret
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
