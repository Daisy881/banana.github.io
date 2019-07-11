//index.js
//获取应用实例
const app = getApp()

Page({
  searchTo: function() {
    wx.navigateTo({
      url: '../../pages/logs/logs',
    })
  },
  choosePlace: function() {
    wx.navigateTo({
      url: '../../pages/logs/logs',
    })
  }
})
