<template>
  <div>
    <div class="title"><span class='iconfont'>&#xe757;</span> 猜你喜欢</div>
    <ul>
      <li class="item border-bottom" v-for="item in commendList" :key="item.id">
        <img :src="item.imgUrl" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeRecommend',
  data () {
    return {
      commendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
        title: '深圳野生动物园',
        desc: '南山区'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/80/80d7d3ef350b7fffa3.water.jpg_200x200_01e78b60.jpg',
        title: '东部华侨城茶溪谷',
        desc: '盐田区'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/f2/f2e0213052717f7ca3.water.jpg_200x200_816c1b48.jpg',
        title: '世界之窗',
        desc: '南山区'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1812/49/4946928832260941a3.water.jpg_200x200_1790001b.jpg',
        title: '锦绣中华民俗村',
        desc: '南山区'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/8d/8dcb844008bce5a3a3.water.jpg_200x200_67663730.jpg',
        title: '欢乐谷',
        desc: '南山区'
      }, {
        id: '006',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/30/258359fbfa587e26a207cee0ffe39211.jpg_200x200_26567159.jpg',
        title: '观澜山水田园旅游文化园',
        desc: '龙华新区'
      }, {
        id: '007',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
        title: '深圳小梅沙海洋世界',
        desc: '小梅沙'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
