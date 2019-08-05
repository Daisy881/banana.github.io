const app = getApp()

Page({
  data: {
    contentFlag: true,
    strategyList: {
      strategysPic: '../../images/places/1.jpg',
      strategysName: '什么是JW非凡款待：有格调下午茶？有标签鸡尾酒？',
      issueTime: '2019.06.01',
      scanPeople: '3921',
      userHead: '../../images/places/1.jpg',
      username: '广玩港食者',
      place: '深圳',
      strContent: '提起“万豪”品牌，这个宇宙第一大酒店集团的印象，相信早已渐渐深入人心。呜呜呜呜呜呜呜呜无无无无无无吾问无为谓无无无无无无无无无无无无无无无无无无无无无无无无无吾问无为谓无无无无无无无无无无无无无无无无无无无无的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄仄咔咔咔咔咔咔扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩咔咔咔咔咔咔扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩扩啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿噢噢噢噢哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦'
    }
  },
  onLoad: function() {
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptStrData', function (data) {
      console.log(data,9999999)
    })
  },
  unfold: function() {
    this.setData({
      contentFlag: false
    })
  }
})