//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    loginFlag: false,
    account: '',
    password: '',
    headPortrait: '../../images/banana.jpg',
    userName: 'Daisy',
    collectList: [{
      collectPic: "../../images/places/1.jpg",
      collectName: "深圳湾公园",
      collectPlace: '南山区',
      collectTime: "2019-07-01"
    }, {
      collectPic: "../../images/places/2.jpg",
      collectName: "世界之窗",
      collectPlace: '南山区',
      collectTime: "2015-07-29"
    }, {
      collectPic: "../../images/places/3.jpg",
      collectName: "大梅沙滨海公园",
      collectPlace: '盐田区',
      collectTime: "2018-04-01"
    }, {
      collectPic: "../../images/places/4.jpg",
      collectName: "东部华侨城",
      collectPlace: '盐田区',
      collectTime: "2017-01-07"
    }, {
      collectPic: "../../images/places/1.jpg",
      collectName: "西涌海滩",
      collectPlace: '龙岗区',
      collectTime: "2018-02-01"
    }]
  },
  bindAccountInput: function(e) {
    this.setData({
      account: e.detail.value
    })
  },
  bindPasswordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },
  login: function() {
    wx.showToast({
      title: '登录请求中',
      icon: 'loading'
    })
    wx.request({
      url: '',
      header: {
        "Content-Type": "application/json",
        success: function(res) {
          wx.hideToast()
          if (res.data.LoginStatus == 1) {
            // 进行一些用户状态的存储
          } else {
            wx.showModal({
              title: "登录失败",
              content: "请检查您填写的账户和密码！",
              showCancel: false,
              success: function(res) {
                // 回调函数
              }
            })
          }
        }
      }
    })
  },
  register: function() {

  },
  forgetPsd: function() {

  },
  editMessage: function() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  intoSpace: function() {
    console.log("进入空间...")
  },
  editNotes: function() {

  },
  drafts: function() {

  }
})
