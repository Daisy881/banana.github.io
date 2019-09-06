const app = getApp()

Page({
  data: {
    isShow: true,
    txt: "",
    iconClass: "",
    toastFlag: true,
    markers: [{
      iconPath: "/images/index/weizhi.png",
      id: 0,
      latitude: 0,
      longitude: 0,
      width: 35,
      height: 35
    }],
    // polyline: [{
    //   points: [{
    //     longitude: 113.3245211,
    //     latitude: 23.10229
    //   }, {
    //     longitude: 113.324520,
    //     latitude: 23.21229
    //   }],
    //   color:"#FF0000DD",
    //   width: 2,
    //   dottedLine: true
    // }],
    controls: [{
      id: 1,
      iconPath: '/images/index/weizhi.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  onShow() {
    let that = this
    wx.getLocation({
      // type: 'wgs84',
      type: "gcj02",
      success: function (res) {
        let mlatitude = "markers[0].latitude"
        let mlongitude = "markers[0].longitude"
        that.setData({
          [mlatitude]: res.latitude,
          [mlongitude]: res.longitude
        })
      },
      fail(err) {
        console.log("获取API失败：" + err) 
        that.setData({
          toastFlag: false
        })
        app.toastShow(that, '请打开：选择位置-使用我的地理位置',"icon-2");
      }
    })
  },
  // 回到当前位置
  backOrigin() {
    var that = this
    wx.getLocation({
      type: "wgs84",
      success: function (res) {
        that.setData({
          markers: [{
            iconPath: "/images/index/weizhi.png",
            id: 0,
            latitude: res.latitude,
            longitude: res.longitude,
            width: 35,
            height: 35,
            title: "我的位置",
            callout: {
              padding: 5,
              content:"我的位置",
              bgColor:"#1296db",
              borderRadius: 5,
              color:"#ffffff",
              display:"BYCLICK"
            }
          }],
        })
      },
    })
  },
  // 选择位置
  selectedClick: function() {
    let that = this
    // 设置权限
    wx.openSetting({
      success: function () {
        that.setData({
          toastFlag: true
        })
        // 选择位置
        wx.chooseLocation({
          success: function (resp) {
            wx.redirectTo({
              url: "/pages/edit-nodes/edit-nodes?params=" + resp.name
            })
          },
        })
      }      
    })    
  },
  regionchange(res) {
    // 改变中心点位置
    if (res.type == "end") {
      var _that = this;
      this.mapCtx = wx.createMapContext("centerChange");
      this.mapCtx.getCenterLocation({
        success: function(res) {
          _that.setData({
            controls: [{
              iconPath: "/images/index/weizhi.png",
              id: 0,
              latitude: res.latitude,
              longitude: res.longitude,
              width: 35,
              height: 35,
              title: "当前位置",
              callout: {
                padding: 10,
                content: "当前位置",
                bgColor:"#1296db",
                borderRadius: 5,
                color:"#ffffff",
                display:"BYCLICK"
              }
            }]
          })
        },
        fail(err) {
          console.log(err)
        }
      })
    }
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})