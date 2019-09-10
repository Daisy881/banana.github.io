const app = getApp()

Page({
  data: {
    address: "",
    textareaValue: "",
    selectedAddress: "",
    tempFilePaths: []
  },
  onLoad(options) {
    if (options.objParams != undefined) { // 选择位置 跳转回来的
      this.setData({
        address: JSON.parse(options.objParams).address,
        textareaValue: JSON.parse(options.objParams).text[0],
        selectedAddress: JSON.parse(options.objParams).address,
        tempFilePaths: JSON.parse(JSON.parse(options.objParams).text[2])
      })
    } else { // 正常进入的
      var text = wx.getStorageSync("nodeParams") == undefined ? [] : wx.getStorageSync("nodeParams")
      if (text.length > 0) {
        this.setData({
          textareaValue: text[0],
          selectedAddress: text[1],
          tempFilePaths: JSON.parse(text[2])
        })
        wx.setStorage({
          key: "nodeParams",
          data: []
        })
        wx.setStorage({
          key: "address",
          data: ""
        })
      }
    }
  },
  bindMsgText(e) {
    this.setData({
      textareaValue: e.detail.value
    })
  },
  // 上传图片
  upload() {
    let that = this
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths
        for(const i in tempFilePaths) {
          this.data.tempFilePaths.push(tempFilePaths[i])
        }
        if (this.data.tempFilePaths.length > 9) {
          let list = this.data.tempFilePaths.slice(0,9)
          that.setData({
            tempFilePaths: list
          })
        } else {
          that.setData({
            tempFilePaths: this.data.tempFilePaths
          })
        }
        var count = 0;
        for (var i = 0, h = tempFilePaths.length; i < h; i++) {
          //上传文件
        //  wx.uploadFile({
        //     url: HOST + '地址路径',
        //     filePath: tempFilePaths[i],
        //     name: 'uploadfile_ant',
        //     header: {
        //       "Content-Type": "multipart/form-data"
        //     },
        //     success: function (res) {
        //       count++;
        //       //如果是最后一张,则隐藏等待中  
        //       if (count == tempFilePaths.length) {
        //         wx.hideToast();
        //       }
        //     },
        //     fail: function (res) {
        //       wx.hideToast();
        //       wx.showModal({
        //         title: '错误提示',
        //         content: '上传图片失败',
        //         showCancel: false,
        //         success: function (res) { }
        //       })
        //     }
        //   })
        } 
      }
    })
  },
  // 预览图片
  previewImage: function (e) {
    let index = e.target.dataset.index;//预览图片的编号
    let that = this;
    wx.previewImage({
      current: that.data.tempFilePaths[index],//预览图片链接
      urls: that.data.tempFilePaths,//图片预览list列表
      success: function (res) {
        //console.log(res);
      },
      fail: function () {
        //console.log('fail')
      }
    })
  },
  // 选择位置
  getLocation() {
    let arr = []
    arr.push(this.data.textareaValue, this.data.selectedAddress, JSON.stringify(this.data.tempFilePaths))
    wx.setStorage({
      key: "nodeParams",
      data: arr
    })
    wx.navigateTo({
      url: '../getlocation/getlocation'
    })
  },
  sendMsg() {
    if (this.data.textareaValue != '' || this.data.selectedAddress != '') {
      wx.redirectTo({
        url: '../space/space'
      })
      this.setData({
        textareaValue: "",
        selectedAddress: "",
        tempFilePaths: []
      })
      wx.clearStorageSync()
    } else {
      wx.showToast({
        title: "请写下游记哦~",
        image: "/images/index/warning.png"
      })
    }
  },
  onUnload() {
    const pages = getCurrentPages()
    let prevPage = null //上一个页面
    if (pages.length >= 2) {
      prevPage = pages[pages.length - 2] //上一个页面
    }
    // 控制页面2级返回
    if (prevPage.route == "pages/edit-nodes/edit-nodes") {
      wx.navigateBack()
      wx.setStorage({
        key: "address",
        data: this.data.address
      })
    } else {
      if (this.data.textareaValue != '' || this.data.tempFilePaths.length > 0) {
        let arr = []
        arr.push(this.data.textareaValue, wx.getStorageSync("address"), JSON.stringify(this.data.tempFilePaths))
        wx.setStorage({
          key: "nodeParams",
          data: arr
        })
        wx.showToast({
          title: "游记已保存"
        })
      }
    }
  }
})