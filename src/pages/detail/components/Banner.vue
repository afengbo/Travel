<template>
  <div>
    <div class="banner" @click="handleClickBanner">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_600x330_28bda6b0.jpg" />
      <div class="banner-info">
        <div class="banner-tittle">
          深圳野生动物园(AAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe62e;</span>
          22
        </div>
      </div>
    </div>
    <common-gallary 
    :imgs='imgs' 
    v-show="showGallary"
    @close='handleCloseGallary'></common-gallary>
  </div>
</template>

<script>
import commonGallary from '@/common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    commonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_350x240_0bc2440f.jpg', 'http://img1.qunarzz.com/sight/p0/1508/44/c8fb5daa16f5f99f8201f323426b3516.water.jpg_350x240_9b0f85ae.jpg']
    }
  },
  methods: {
    handleClickBanner () {
      this.showGallary = true
    },
    handleCloseGallary () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
