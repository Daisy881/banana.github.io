const app = getApp()

//云数据库初始化
wx.cloud.init();
const db = wx.cloud.database({
  env: 'basedata-nc7vo'
});
var conn = db.collection('user');

Page({
  data: {
    userInfo: {},
    // username: "",
    // sex: "",
    // address: "",
    // idx: "",
    // hiddenmodalput: true,
    // title: "",
    // nameFlag: false,
    // sexFlag: false,
    // addressFlag: false,
    // setusername: "",
    // setsex: "",
    // setaddress: ""
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo
          })
        }
      })
    }
  },
  // tapEdit: function(e) {
  //   this.data.idx = e.target.dataset.idx
  //   if (this.data.idx == '0') {
  //     console.log(typeof e.target.dataset.idx,88)
  //   } else if(this.data.idx == '1') {
  //     this.setData({
  //       // setusername: this.data.username,
  //       hiddenmodalput: false,
  //       title: "查看昵称",
  //       nameFlag: true
  //     })
    // } else if(this.data.idx == '2') {
    //   this.setData({
    //     // setsex: this.data.sex,
    //     hiddenmodalput: false,
    //     title: "查看性别",
    //     sexFlag: true
    //   })
  //   } else if(this.data.idx == '3') {
  //     this.setData({
  //       setaddress: this.data.address,
  //       hiddenmodalput: false,
  //       title: "查看地址",
  //       addressFlag: true
  //     })
  //   }
  // },
  // exitLog: function(){
  //   console.log(wx.getStorageSync("username"))
  //   wx.switchTab({
  //     url: '../mine/mine',
  //   })
  //   wx.setStorageSync("username", "")
  // },
  // confirm: function() {
  //   this.cancel()
  // },
  // cancel: function() {
  //   if (this.data.idx == '0') {
  //     console.log(this.data.idx)
  //   } else if(this.data.idx == '1') {
  //     this.setData({
  //       hiddenmodalput: true,
  //       nameFlag: false,
  //       // setusername: ""
  //     })
    // } else if(this.data.idx == '2') {
    //   this.setData({
    //     hiddenmodalput: true,
    //     sexFlag: false,
    //     // setsex: ""
    //   })
  //   } else if(this.data.idx == '3') {
  //     this.setData({
  //       hiddenmodalput: true,
  //       addressFlag: false,
  //       setaddress: ""
  //     })
  //   }
  // },
  // onShow() {
  //   const that = this
  //   const username = wx.getStorageSync("username")
  //   conn.get({
  //     success: function(res) {
  //       for (const i in res.data) {
  //         if (res.data[i].username == username) {
  //           that.setData({
  //             users: res.data,
  //             username: res.data[i].username,
  //             sex: res.data[i].sex,
  //             address: res.data[i].address
  //           })
  //         }
  //       }
  //     },
  //     fail: function(errp) {
  //       wx.showToast({
  //         title: "请刷新重试",
  //         image: "/images/index/noface.png",
  //         duration: 2000,
  //         mask: true
  //       })
  //       console.log("获取数据失败errp:" + errp)
  //     }
  //   })
  // },
  // bindAccountInput: function(e) {
  //   this.setData({
  //     setusername: e.detail.value
  //   })
  // },
  // bindsexInput: function(e) {
  //   this.setData({
  //     setsex: e.detail.value
  //   })
  // },
  // bindaddressInput: function(e) {
  //   this.setData({
  //     setaddress: e.detail.value
  //   })
  // },
  // confirm: function() {
  //   if (this.data.setusername || this.data.setsex || this.data.setaddress) {
  //     if (this.data.idx == '0') {
  //       console.log(this.data.idx,88)
  //     } else if(this.data.idx == '1') {
  //       for(const i in this.data.users) {
  //         if(this.data.setusername == this.data.users[i].username) {
  //           wx.showToast({
  //             title: "昵称已存在",
  //             image: "/images/index/warning.png"
  //           })
  //           return false;
  //         } 
  //       }
  //       conn.update({
  //         data: {
  //           username: this.data.setusername
  //         },
  //         success: function(res) {
  //           wx.showToast({
  //             title: "修改成功",
  //             icon: "success"
  //           })
  //           this.setData({
  //             setusername: ""
  //           })
  //         },
  //         fail: function(err) {
  //           wx.showToast({
  //             title: "修改失败",
  //             icon: "success"
  //           })
  //           console.log("修改失败err: "+ err)
  //         }
  //       })
  //     } else if(this.data.idx == '2') {
  //       conn.update({
  //         data: {
  //           sex: this.data.setsex
  //         },
  //         success: function(res) {
  //           wx.showToast({
  //             title: "修改成功",
  //             icon: "success"
  //           })
  //           this.setData({
  //             setsex: ""
  //           })
  //         },
  //         fail: function(err) {
  //           wx.showToast({
  //             title: "修改失败",
  //             icon: "success"
  //           })
  //           console.log("修改失败err: "+ err)
  //         }
  //       })
  //     } else if(this.data.idx == '3') {
  //       conn.update({
  //         data: {
  //           address: this.data.setaddress
  //         },
  //         success: function(res) {
  //           wx.showToast({
  //             title: "修改成功",
  //             icon: "success"
  //           })
  //           this.setData({
  //             setaddress: ""
  //           })
  //         },
  //         fail: function(err) {
  //           wx.showToast({
  //             title: "修改失败",
  //             icon: "success"
  //           })
  //           console.log("修改失败err: "+ err)
  //         }
  //       })
  //     }
  //   } else {
  //     wx.showToast({
  //       title: "未输入内容",
  //       image: "/images/index/warning.png"
  //     })
  //   }
  // },
})