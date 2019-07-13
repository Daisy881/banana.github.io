//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navbar: ['必玩', '攻略'],
    currentTab: 0,
    navFlag: '0',
    classifyList: ['景点', '看海', '徒步登山', '游乐园撒欢', '最美乡村', '历史文化'],
    currentCsf: 0,
    classifyFlag: '0',
    spotsList: [{
      detailsPic: '../../images/places/1.jpg',
      detailsName: '深圳湾公园',
      detailsPeople: '1987'
    }, {
      detailsPic: '../../images/places/1.jpg',
      detailsName: '深圳湾公园',
      detailsPeople: '1987'
    }, {
      detailsPic: '../../images/places/1.jpg',
      detailsName: '深圳湾公园',
      detailsPeople: '1987'
    }],
    seaList: [{
      detailsPic: '../../images/places/1.jpg',
      detailsName: '深圳湾公园',
      detailsPeople: '1987'
    }, {
      detailsPic: '../../images/places/1.jpg',
      detailsName: '深圳湾公园',
      detailsPeople: '1987'
    }, {
      detailsPic: '../../images/places/1.jpg',
      detailsName: '深圳湾公园',
      detailsPeople: '1987'
    }, {
      detailsPic: '../../images/places/1.jpg',
      detailsName: '深圳湾公园',
      detailsPeople: '1987'
    }],
    mountainsList: [{
      detailsPic: '../../images/places/1.jpg',
      detailsName: '深圳湾公园',
      detailsPeople: '1987'
    }, {
      detailsPic: '../../images/places/1.jpg',
      detailsName: '深圳湾公园',
      detailsPeople: '1987'
    }, {
      detailsPic: '../../images/places/1.jpg',
      detailsName: '深圳湾公园',
      detailsPeople: '1987'
    }],
    playList: [{
      detailsPic: '../../images/places/1.jpg',
      detailsName: '深圳湾公园',
      detailsPeople: '1987'
    }],
    countryList: [{
      detailsPic: '../../images/places/1.jpg',
      detailsName: '深圳湾公园',
      detailsPeople: '1987'
    }, {
      detailsPic: '../../images/places/1.jpg',
      detailsName: '深圳湾公园',
      detailsPeople: '1987'
    }, {
      detailsPic: '../../images/places/1.jpg',
      detailsName: '深圳湾公园',
      detailsPeople: '1987'
    }],
    historyList: [{
      detailsPic: '../../images/places/1.jpg',
      detailsName: '深圳湾公园',
      detailsPeople: '1987'
    }, {
      detailsPic: '../../images/places/1.jpg',
      detailsName: '深圳湾公园',
      detailsPeople: '1987'
    }],
    strategysList: [{
      strategysPic: '../../images/places/4.jpg',
      strategysName: '吃过深圳的“大董”后，是种什么体验？',
      strategysPeople: '1820'
    }, {
      strategysPic: '../../images/places/2.jpg',
      strategysName: '深圳探店|四川麻辣火锅小龙坎（皇岗店）',
      strategysPeople: '277'
    }, {
      strategysPic: '../../images/places/2.jpg',
      strategysName: '吃过深圳的“大董”后，是种什么体验？',
      strategysPeople: '1820'
    }, {
      strategysPic: '../../images/places/1.jpg',
      strategysName: '吃过深圳的“大董”后，是种什么体验？',
      strategysPeople: '1820'
    }, {
      strategysPic: '../../images/places/2.jpg',
      strategysName: '吃过深圳的“大董”后，是种什么体验？',
      strategysPeople: '1820'
    }],
    tribeList: [{
      strategysPic: '../../images/places/3.jpg',
      strategysName: '吃过深圳的“大董”后，是种什么体验？',
      userHead: '',
      username: '风萧萧',
      strategysPeople: '43'
    }, {
      strategysPic: '../../images/places/1.jpg',
      strategysName: '吃过深圳的“大董”后，是种什么体验？',
      userHead: '',
      username: '余公子',
      strategysPeople: '231'
    }, {
      strategysPic: '../../images/places/2.jpg',
      strategysName: '吃过深圳的“大董”后，是种什么体验？',
      userHead: '',
      username: '闲走深圳',
      strategysPeople: '1234'
    }]
  },
  searchTo: function() {
    wx.navigateTo({
      url: '../../pages/logs/logs',
    })
  },
  choosePlace: function() {
    wx.navigateTo({
      url: '../../pages/logs/logs',
    })
  },
  // 导航切换监听
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx,
      navFlag: e.currentTarget.dataset.idx,
    })
  },
  // 分类监听
  classifyTap: function(e) {
    this.setData({
      currentCsf: e.currentTarget.dataset.idx,
      classifyFlag: e.currentTarget.dataset.idx
    })
  }
})
