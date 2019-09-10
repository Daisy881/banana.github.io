const app = getApp()

Page({
  data: {
    inputValue: "",
    inputFlag: false,
    idx: 0,
    msgInput: "",
    commentFlag: false,
    favoriteList: [{
      id: 0,
      userhead: '../../images/places/1.jpg',
      username: '风萧萧啊',
      dataTime: '2019-07-01',
      articleContent: '航拍中国最美的丹霞地貌，到处五颜六色，仿佛童话世界',
      picList: ['../../images/places/1.jpg', '../../images/places/1.jpg', '../../images/places/1.jpg'],
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
      picList: ['../../images/places/1.jpg', '../../images/places/1.jpg', '../../images/places/1.jpg', '../../images/places/1.jpg'],
      place: '丹霞山',
      praise: '23',
      comment: '98',
      share: ''
    }]
  },
  bindMsgInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  searchClick() {
    console.log("搜索...")
  },
  changeInput() {
    this.setData({
      inputFlag: !this.data.inputFlag
    })
  },
  // 失焦事件与点击事件冲突 失焦事件先执行导致点击事件不执行 使用setTimeout来控制延迟性
  bindblur() {
    let that = this
    setTimeout(function() {
      that.setData({
        inputFlag: false
      })
    }, 500)
  },
  // 喜欢
  praiseTap: function(e) {
    let that = this
    let praiseNew = "favoriteList["+ e.currentTarget.id+"].praise"
    that.setData({
      [praiseNew]: parseInt(this.data.favoriteList[e.currentTarget.id].praise) + 1
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
      let commentNew = "favoriteList["+ e.currentTarget.id+"].comment"
      that.setData({
        [commentNew]: parseInt(this.data.favoriteList[e.currentTarget.id].comment) + 1
      })
      that.setData({
        commentFlag: false,
        msgInput: ""
      })
    }
  }
})