<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button" @click="handleCurrentCity()">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div 
          class="button-wrapper" 
          v-for="city in hotcities" :key="city.id"
          @click="handleCityClick(city.name)">
            <div class="button">{{city.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" 
      v-for="(item, key) in cities" 
      :key="key"
      :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div 
          class="item border-bottom" 
          v-for="c in item" :key="c.id"
          @click="handleCityClick(c.name)">{{c.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotcities: Array,
    letter: String
  },
  computed: {
    // 将vuex中的数据映射到组件的computed计算属性中
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick(city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    handleCurrentCity() {
      this.$router.push('/')
    },
    // 将vuex的mutation方法映射到组件的方法中
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // 可以将页面自动滚动到某一个元素上
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
