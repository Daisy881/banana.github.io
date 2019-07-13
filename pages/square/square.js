const app = getApp()

Page({
  data: {
    squareNav: ['推荐', '附近'],
    currentTab: 0,
    squareFlag: 0,
    squareList: [{
      userhead: '../../images/places/1.jpg',
      username: '风萧萧啊',
      dataTime: '2019-07-01',
      articleContent: '航拍中国最美的丹霞地貌，到处五颜六色，仿佛童话世界',
      picList: ['../../images/places/1.jpg', '../../images/places/1.jpg', '../../images/places/1.jpg'],
      place: '南北公园',
      praise: '23',
      comment: '98',
      share: ''
    }, {
      userhead: '../../images/places/1.jpg',
      username: '风萧萧啊',
      dataTime: '2019-07-01',
      articleContent: '航拍中国最美的丹霞地貌，到处五颜六色，仿佛童话世界',
      picList: ['../../images/places/1.jpg', '../../images/places/1.jpg', '../../images/places/1.jpg'],
      place: '丹霞山',
      praise: '23',
      comment: '98',
      share: ''
    }],
    nearbyList: [{
      userhead: '../../images/places/2.jpg',
      username: '风萧萧啊',
      dataTime: '2019-07-01',
      articleContent: '航拍中国最美的丹霞地貌，到处五颜六色，仿佛童话世界',
      picList: ['../../images/places/2.jpg', '../../images/places/2.jpg', '../../images/places/2.jpg'],
      distance: '12.7',
      praise: '23',
      comment: '98',
      share: ''
    }, {
      userhead: '../../images/places/1.jpg',
      username: '风萧萧啊',
      dataTime: '2019-07-01',
      articleContent: '航拍中国最美的丹霞地貌，到处五颜六色，仿佛童话世界',
      picList: ['../../images/places/1.jpg', '../../images/places/1.jpg', '../../images/places/1.jpg'],
      place: '丹霞山',
      distance: '129.9',
      praise: '23',
      comment: '98',
      share: ''
    }, {
      userhead: '../../images/places/1.jpg',
      username: '风萧萧啊',
      dataTime: '2019-07-01',
      articleContent: '航拍中国最美的丹霞地貌，到处五颜六色，仿佛童话世界',
      picList: ['../../images/places/1.jpg', '../../images/places/1.jpg', '../../images/places/1.jpg'],
      place: '南北公园',
      praise: '23',
      comment: '98',
      share: ''
    }, {
      userhead: '../../images/places/1.jpg',
      username: '风萧萧啊',
      dataTime: '2019-07-01',
      articleContent: '航拍中国最美的丹霞地貌，到处五颜六色，仿佛童话世界',
      picList: ['../../images/places/1.jpg', '../../images/places/1.jpg', '../../images/places/1.jpg'],
      distance: '2.8',
      praise: '23',
      comment: '98',
      share: ''
    }]
  },
  // 监听导航
  squareTap: function(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx,
      squareFlag: e.currentTarget.dataset.idx
    })
  },
  praiseTap: function() {
    console.log('喜欢...')
  },
  commentTap: function() {
    console.log('评论...')
  },
  shareTap: function() {
    console.log("分享...")
  }
})