const app = getApp()

Page({
  data: {
    inputMsg: "",
    historyFlag: false,
    historyList: []
  },
  onShow() {
    if (wx.getStorageSync("historySearch") != undefined) {
      this.setData({
        historyList: wx.getStorageSync("historySearch")
      })
    }
    if (this.data.historyList.length > 0) {
      this.setData({
        historyFlag: true
      })
    } else {
      this.setData({
        historyFlag: false
      })
    }
  },
  bindMsgInput(e) {
    this.setData({
      inputMsg: e.detail.value
    })
  },
  // 监听软键盘回车搜索
  bindconfirm(e) {
    var that = this
    if (that.data.historyList.length > 0) {
      that.data.historyList.push(e.detail.value)
      that.setData({
        historyList: that.data.historyList,
        inputMsg: ""
      })
    } else {
      let arr = []
      arr.push(e.detail.value)
      that.setData({
        historyList: arr,
        inputMsg: ""
      })
    }
    wx.setStorage({
      key: "historySearch",
      data: that.data.historyList
    })
    if (!that.data.historyFlag) {
      that.setData({
        historyFlag: true
      })
    }
  },
  // 取消搜索
  cancelSearch() {
    this.setData({
      inputMsg: ""
    })
    wx.navigateBack()
  },
  // 清除历史记录
  doDelete() {
    let that = this
    wx.showModal({
      title: "提示",
      content: "确定清空历史记录？",
      success: function(res) {
        if (!res.cancel) {
          that.setData({
            historyList: []
          })
          wx.clearStorage({key: "historySearch"})
        }
      },
      fail: function(err) {
        console.log("接口调用失败err:" + err)
      }
    })
  },
  bindHistory(e) {
    let that = this
    console.log(this.data.historyList[e.currentTarget.dataset.idx])
    that.setData({
      inputMsg: this.data.historyList[e.currentTarget.dataset.idx]
    })
  }
})