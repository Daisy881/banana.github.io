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
      userhead: 'http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg',
      username: '风萧萧啊',
      dataTime: '2019-07-01',
      articleContent: '航拍中国最美的丹霞地貌，到处五颜六色，仿佛童话世界',
      picList: ['http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg', 'http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg', 'http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg', 'http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg'],
      place: '南北公园',
      praise: '18',
      comment: '38',
      share: ''
    }, {
      id: 1,
      userhead: 'http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg',
      username: '风萧萧啊',
      dataTime: '2019-07-01',
      articleContent: '航拍中国最美的丹霞地貌，到处五颜六色，仿佛童话世界',
      picList: ['http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg', 'http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg', 'http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg'],
      place: '丹霞山',
      praise: '23',
      comment: '98',
      share: ''
    }],
    nearbyList: [{
      id: 0,
      userhead: 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/lvpics/w=600/sign=1350023d79899e51788e391472a5d990/b21bb051f819861810d03e4448ed2e738ad4e65f.jpg',
      username: '风萧萧啊',
      dataTime: '2019-07-01',
      articleContent: '航拍中国最美的丹霞地貌，到处五颜六色，仿佛童话世界',
      picList: ['http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/lvpics/w=600/sign=1350023d79899e51788e391472a5d990/b21bb051f819861810d03e4448ed2e738ad4e65f.jpg', 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/lvpics/w=600/sign=1350023d79899e51788e391472a5d990/b21bb051f819861810d03e4448ed2e738ad4e65f.jpg', 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/lvpics/w=600/sign=1350023d79899e51788e391472a5d990/b21bb051f819861810d03e4448ed2e738ad4e65f.jpg'],
      distance: '12.7',
      praise: '23',
      comment: '98',
      share: ''
    }, {
      id: 1,
      userhead: 'http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg',
      username: '风萧萧啊',
      dataTime: '2019-07-01',
      articleContent: '航拍中国最美的丹霞地貌，到处五颜六色，仿佛童话世界',
      picList: ['http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg', 'http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg', 'http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg'],
      place: '丹霞山',
      distance: '129.9',
      praise: '23',
      comment: '98',
      share: ''
    }, {
      id: 2,
      userhead: 'http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg',
      username: '风萧萧啊',
      dataTime: '2019-07-01',
      articleContent: '航拍中国最美的丹霞地貌，到处五颜六色，仿佛童话世界',
      picList: ['http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg', 'http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg', 'http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg'],
      place: '南北公园',
      praise: '23',
      comment: '98',
      share: ''
    }, {
      id: 3,
      userhead: 'http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg',
      username: '风萧萧啊',
      dataTime: '2019-07-01',
      articleContent: '航拍中国最美的丹霞地貌，到处五颜六色，仿佛童话世界',
      picList: ['http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg', 'http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg', 'http://i0.hdslb.com/bfs/article/12f6ff92c25256515be6c1cc0d6d0766743bedd6.jpg'],
      distance: '2.8',
      praise: '23',
      comment: '98',
      share: ''
    }]
  },
  onShow() {
    this.setData({
      commentFlag: false
    })
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
  // 预览图片
  prePic(e) {
    app.previewPic(e)
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