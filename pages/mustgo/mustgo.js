const app = getApp()

Page({
  data: {
    indexDetails: {
      place: '深圳',
      classify: '景点',
      title: '深圳湾公园',
      labels: ['与香港隔海相望', '一出地铁站就可以看到海的公园'],
      people: '1443',
      userpics: ['../../images/places/1.jpg', '../../images/places/1.jpg', '../../images/places/1.jpg'],
      hotStrategy: [{
        content: '深圳11月赏花攻略：告别萧瑟之感，拥抱美丽的的哒哒哒哒哒哒多多多多多多多多多',
        scan: '3829'
      }, {
        content: '深圳11月赏花攻略：告别萧瑟之感，拥抱美丽的的哒哒哒哒哒哒多多多多多多多多多',
        scan: '2810'
      }, {
        content: '深圳11月赏花攻略：告别萧瑟之感，拥抱美丽的的哒哒哒哒哒哒多多多多多多多多多',
        scan: '2810'
      }],
      location: '广东省深圳市南山区滨海大道深圳湾公园（近望海路）',
      openTime: '全天',
      traffic: '乘坐地铁2号线（蛇口线）至湾厦站下，或乘坐公交至运动广场站下，步行即可到达、',
      tickets: '免费',
      comments: [{
        userhead: '../../images/places/1.jpg',
        username: '香蕉游记',
        comContent: '深圳湾海滨休闲带分为A、B、C三个区域，面积约哒哒哒哒哒哒多多多多多多多多多多储存储存储存储存储存储存储存储存储存储存储存储存储存储存储存储存储存储存储存储存储存储存惆怅长岑长。',
        contentPics: ['../../images/places/1.jpg', '../../images/places/1.jpg', '../../images/places/1.jpg', '../../images/places/1.jpg']
      }]
    }
  },
  onLoad: function() {
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptData', function(data) {
      console.log(data,9999999)
    })
  }
})