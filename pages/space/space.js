const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    nodesListFlag: true,
    picListAfter: [],
    picListAfterFlag: false,
    commentId: 0,
    commentFlag: false,
    msgInput: "",
    nodesList: [{
      id: 0,
      sendTime: "2019-01-28",
      content: "开心啊，今天在这个美丽的地方享受到了天伦之乐，真真真真开心，hahhah......",
      place: "深圳北站",
      picList: ['https://hbimg.huabanimg.com/3af0ab269d05a082eaaf03c5d3fffdabb4cd3ea317a80-66bQGb_fw658'],
      praise: "23",
      comment: "11"
    }, {
      id: 1,
      sendTime: "2013-01-28",
      content: "hahhah......",
      picList: ['https://c-ssl.duitang.com/uploads/item/201502/03/20150203144941_BMPWu.thumb.700_0.jpeg', 'https://hbimg.huabanimg.com/3af0ab269d05a082eaaf03c5d3fffdabb4cd3ea317a80-66bQGb_fw658'],
      praise: "12",
      comment: "10"
    }, {
      id: 2,
      sendTime: "2017-01-28",
      content: "开心啊",
      place: "第一世界广场",
      picList: ['https://c-ssl.duitang.com/uploads/item/201502/03/20150203144941_BMPWu.thumb.700_0.jpeg', 'https://hbimg.huabanimg.com/3af0ab269d05a082eaaf03c5d3fffdabb4cd3ea317a80-66bQGb_fw658', 'https://c-ssl.duitang.com/uploads/item/201607/20/20160720161857_NcJZE.thumb.700_0.jpeg'],
      praise: "43",
      comment: "45"
    }, {
      id: 3,
      sendTime: "2017-01-28",
      content: "开心啊",
      picList: ['https://c-ssl.duitang.com/uploads/item/201502/03/20150203144941_BMPWu.thumb.700_0.jpeg', 'https://hbimg.huabanimg.com/3af0ab269d05a082eaaf03c5d3fffdabb4cd3ea317a80-66bQGb_fw658', 'https://c-ssl.duitang.com/uploads/item/201607/20/20160720161857_NcJZE.thumb.700_0.jpeg','https://c-ssl.duitang.com/uploads/item/201502/03/20150203144941_BMPWu.thumb.700_0.jpeg', 'https://hbimg.huabanimg.com/3af0ab269d05a082eaaf03c5d3fffdabb4cd3ea317a80-66bQGb_fw658', 'https://c-ssl.duitang.com/uploads/item/201607/20/20160720161857_NcJZE.thumb.700_0.jpeg',  'https://c-ssl.duitang.com/uploads/item/201502/03/20150203144941_BMPWu.thumb.700_0.jpeg', 'https://hbimg.huabanimg.com/3af0ab269d05a082eaaf03c5d3fffdabb4cd3ea317a80-66bQGb_fw658', 'https://c-ssl.duitang.com/uploads/item/201607/20/20160720161857_NcJZE.thumb.700_0.jpeg',  'https://c-ssl.duitang.com/uploads/item/201607/20/20160720161857_NcJZE.thumb.700_0.jpeg'],
      praise: "43",
      comment: "45"
    }]
  },
  onLoad() {
    wx.removeStorage({key: "nodeParams"})
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShow() {
    if(this.data.nodesList.length > 0) {
      this.setData({
        nodesListFlag: false
      })
    } else {
      this.setData({
        nodesListFlag: true
      })
    }
    for (const i in this.data.nodesList) {
      if (this.data.nodesList[i].picList.length > 9) {
        this.setData({
          picListAfterFlag: true
        })
        let picList = "nodesList["+i+"].picList"
        let arr = []
        arr.push(this.data.nodesList[i].picList.slice(9))
        var objPic = new Object()
        objPic.index = i
        objPic.list = arr
        this.data.picListAfter.push(objPic)
        this.setData({
          [picList]: this.data.nodesList[i].picList.slice(0,9)
        })
      }
    }
  },
  changeBackPic() {
    console.log("切换背景图片...")
  },
  clickMe() {
    wx.navigateTo({
      url: "../edit-nodes/edit-nodes"
    })
  },
  getImg(e) {
    app.previewPic(e)
  },
  // 喜欢
  praiseTap: function(e) {
    let that = this
    let praiseNew = "nodesList["+ e.currentTarget.id+"].praise"
    that.setData({
      [praiseNew]: parseInt(this.data.nodesList[e.currentTarget.id].praise) + 1
    })
  },
  // 评论
  commentTap: function(e) {
    this.setData({
      msgInput: "",
      commentId: e.currentTarget.id,
      commentFlag: !this.data.commentFlag
    })
  },
  bindMsgInput(e) {
    this.setData({
      msgInput: e.detail.value
    })
  },
  sendMsg(e) {
    let that = this
    if (this.data.msgInput) {
      let commentNew = "nodesList["+ e.currentTarget.id+"].comment"
      that.setData({
        [commentNew]: parseInt(this.data.nodesList[e.currentTarget.id].comment) + 1
      })
      that.setData({
        commentFlag: false,
        msgInput: ""
      })
    }
  },
  onUnload() {
    wx.switchTab({
      url: "/pages/mine/mine"
    })
  }
})