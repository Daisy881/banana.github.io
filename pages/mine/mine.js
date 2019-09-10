//index.js
//获取应用实例
const app = getApp()
//云数据库初始化
wx.cloud.init();
const db = wx.cloud.database({
  env: 'basedata-nc7vo'
});
var conn = db.collection('user');

Page({
  data: {
    // loginFlag: true,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // users: [],
    // username: '',
    // password: '',
    // regFlag: true,
    // headPortrait: '../../images/banana.jpg',
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
  onLoad: function () {
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
  onShow(){
    
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  editMessage: function() {
    wx.navigateTo({
      url: '../mine-edit/mine-edit',
    })
  },
  intoSpace: function() {
    wx.navigateTo({
      url: '../space/space'
    })
  },
  editNotes: function() {
    wx.navigateTo({
      url: '../edit-nodes/edit-nodes'
    })
  },
  drafts: function() {

  },
  // onShow() {
  //   const that = this
  //   const username = wx.getStorageSync("username")
  //   conn.get({
  //     success: function(res) {
  //       that.setData({
  //         users: res.data
  //       })
  //     },
  //     fail: function(err) {
  //       console.log("获取本地数据失败err：" + err)
  //     }
  //   })
  //   if (username) {
  //     this.setData({
  //       username: username,
  //       // loginFlag: false
  //     })
  //   } else {
  //     this.setData({
  //       username: "",
  //       password: "",
  //       // loginFlag: true
  //     })
  //   }
  // },
  // 监听tabBar切换
  // onTabItemTap() {
  //   const username = wx.getStorageSync("username")
  //   if (!username) {
  //     this.setData({
  //       username: "",
  //       password: "",
  //       regFlag: true
  //     })
  //   }
  // },
  // bindAccountInput: function(e) {
  //   this.setData({
  //     username: e.detail.value
  //   })
  // },
  // bindPasswordInput: function(e) {
  //   this.setData({
  //     password: e.detail.value
  //   })
  // },
  // 登录
  // login: function() {
  //   //表单数据
  //   if (this.data.username && this.data.password){ 
  //     for(const i in this.data.users) {
  //       if (this.data.users[i].username == this.data.username && this.data.users[i].password == this.data.password) {
  //         wx.showToast({
  //           title: "登录成功"
  //         })
  //         wx.setStorageSync("username", this.data.username)
  //         // this.setData({
  //         //   loginFlag: false
  //         // })
  //         return false
  //       } else {
  //         wx.showToast({
  //           title: "账号或密码错误",
  //           image: '/images/index/warning.png',
  //           duration: 2000,
  //           mask: true
  //         })
  //       }
  //     }
  //   } else {
  //     wx.showToast({
  //       title: '账号或密码为空',
  //       image: '/images/index/warning.png',
  //       duration: 2000,
  //       mask: true
  //     })
  //   }
  // },
  // loginFlag() {
  //   this.setData({
  //     username: "",
  //     password: "",
  //     regFlag: true
  //   })
  // },
  // registerFlag: function() {
  //   this.setData({
  //     username: "",
  //     password: "",
  //     regFlag: false
  //   })
  // },
  // 注册
  // register: function() {
  //   //表单数据
  //   if (this.data.username && this.data.password){
  //     var flag = true
  //     for(const i in this.data.users) {
  //       if (this.data.users[i].username == this.data.username) {
  //         flag = false
  //       }
  //     }
  //     if (flag) {
  //       const that = this
  //       conn.add({
  //         data: {
  //           username: this.data.username,
  //           password: this.data.password,
  //           sex: "",
  //           address: ""
  //         },
  //         success: function(res) {
  //           wx.showToast({
  //             title: "注册成功"
  //           })
  //           that.setData({
  //             username: "",
  //             password: "",
  //             regFlag: true
  //           })
  //         },
  //         fail: function(errp) {
  //           wx.showToast({
  //             title: "注册失败",
  //             image: '/images/index/error.png',
  //             duration: 2000,
  //             mask: true
  //           })
  //           console.log("增加本地数据失败errp：" + errp)
  //         }
  //       })
  //     } else {
  //       this.setData({
  //         username: "",
  //         password: ""
  //       })
  //       wx.showToast({
  //         title: '账号已存在',
  //         image: '/images/index/warning.png',
  //         duration: 2000,
  //         mask: true
  //       })
  //     }
  //   } else {
  //     wx.showToast({
  //       title: '账号或密码为空',
  //       image: '/images/index/warning.png',
  //       duration: 2000,
  //       mask: true
  //     })
  //   }
  // },
  // forgetPsd: function() {

  // },
})
