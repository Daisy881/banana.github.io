const app = getApp()

Page({
  data: {
    squareNav: ['推荐', '附近'],
    currentTab: 0,
    squareFlag: 0,
    idx: 0,
    msgInput: "",
    commentFlag: false,
    squareList: [{
      id: 0,
      userhead: '../../images/places/1.jpg',
      username: '风萧萧啊',
      dataTime: '2019-07-01',
      articleContent: '航拍中国最美的丹霞地貌，到处五颜六色，仿佛童话世界',
      picList: ['../../images/places/1.jpg', '../../images/places/1.jpg', '../../images/places/1.jpg', '../../images/places/1.jpg'],
      place: '南北公园',
      praise: '18',
      comment: '38',
      share: ''
    }, {
      id: 1,
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
      id: 0,
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
      id: 1,
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
      id: 2,
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
      id: 3,
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
  searchTo() {
    wx.navigateTo({
      url: "../../pages/search/search"
    })
  },
  // 监听导航
  squareTap: function(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx,
      squareFlag: e.currentTarget.dataset.idx
    })
  },
  // 喜欢
  praiseTap: function(e) {
    let that = this
    if(this.data.squareFlag == 0) {
      let praiseNew = "squareList["+ e.currentTarget.id+"].praise"
        that.setData({
          [praiseNew]: parseInt(this.data.squareList[e.currentTarget.id].praise) + 1
        })
    } else {
      let praiseNew = "nearbyList["+ e.currentTarget.id+"].praise"
        that.setData({
          [praiseNew]: parseInt(this.data.nearbyList[e.currentTarget.id].praise) + 1
        })
    }
      that.setData({
        likeFlag: false
      })
  },
  // 评论
  commentTap: function(e) {
    this.setData({
      idx: e.currentTarget.id,
      commentFlag: !this.data.commentFlag
    })
  },
  bindMsgInput(e) {
    this.setData({
      msgInput: e.detail.value
    })
  },
  // 发送评论
  sendMsg(e){
    let that = this
    if (this.data.msgInput) {
      if(this.data.squareFlag == 0) {
        let commentNew = "squareList["+ e.currentTarget.id+"].comment"
        that.setData({
          [commentNew]: parseInt(this.data.squareList[e.currentTarget.id].comment) + 1
        })
      } else {
        let commentNew = "nearbyList["+ e.currentTarget.id+"].comment"
        that.setData({
          [commentNew]: parseInt(this.data.nearbyList[e.currentTarget.id].comment) + 1
        })
      }
      that.setData({
        commentFlag: false,
        msgInput: ""
      })
    }
  },
  // 分享
  shareTap: function() {
    console.log("分享...")
  }
})