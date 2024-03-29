//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // 设置tabBar的样式
    wx.setTabBarStyle({
      color: "#cdcdcd",
      selectedColor: "#1296db"
    })
  },
  globalData: {
    userInfo: null
  },
  toastShow: function (that, str, icon){
    that.setData({
      isShow: true,
      txt: str,
      iconClass: icon
    });
    setTimeout(function () {
      that.setData({
        isShow: false
      });
    }, 3000);
  },
  // 预览图片
  previewPic(e) {
    var current = e.currentTarget.dataset.idx
		wx.previewImage({
      current: e.currentTarget.dataset.list[current], // 当前显示图片的http链接
      urls: e.currentTarget.dataset.list // 需要预览的图片http链接列表
		})
  }
})