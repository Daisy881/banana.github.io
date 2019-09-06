const app = getApp()

Page({
  data: {
    textareaValue: "",
    selectedAddress: "",
    tempFilePaths: []
  },
  onLoad(option) {
    if (option.params != undefined) {
      this.setData({
        selectedAddress: option.params
      })
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
  getLocation() {
    wx.redirectTo({
      url: '../getlocation/getlocation'
    })
  },
  sendMsg() {

  }
})