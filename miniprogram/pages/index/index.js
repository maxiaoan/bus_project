//index.js
var moment = require("../../utils/moment.js")
moment.locale("zh-CN");
const app = getApp()
const db = wx.cloud.database();
const _ = db.command; //

Page({
  data: {
    time: {},
    start: "",
    destination: "",
    stop: [{
        "stopId": 3001,
        "stop_name": "海关"
      },
      {
        "stopId": 3002,
        "stop_name": "环卫公司"
      },
      {
        "stopId": 3003,
        "stop_name": "普瑞华庭"
      }, {
        "stopId": 3004,
        "stop_name": "洋浦大桥北"
      }, {
        "stopId": 3005,
        "stop_name": "信立花园"
      }, {
        "stopId": 3006,
        "stop_name": "铁炉村"
      }, {
        "stopId": 3007,
        "stop_name": "安泰小区"
      }, {
        "stopId": 3008,
        "stop_name": "公安局"
      }, {
        "stopId": 3009,
        "stop_name": "法院"
      }, {
        "stopId": 3010,
        "stop_name": "浦馨苑北"
      }, {
        "stopId": 3011,
        "stop_name": "阳光海湾"
      }, {
        "stopId": 3012,
        "stop_name": "检察院"
      }, {
        "stopId": 3013,
        "stop_name": "洋浦检疫局"
      }, {
        "stopId": 3014,
        "stop_name": "蓝领公寓二期"
      }, {
        "stopId": 3015,
        "stop_name": "洋浦技工学校"
      }, {
        "stopId": 3016,
        "stop_name": "公交公司"
      }, {
        "stopId": 3017,
        "stop_name": "新都社区"
      }, {
        "stopId": 3018,
        "stop_name": "新都工业园"
      }, {
        "stopId": 3019,
        "stop_name": "高山社区"
      }, {
        "stopId": 3020,
        "stop_name": "金海北门"
      }, {
        "stopId": 3021,
        "stop_name": "金海生活区"
      }, {
        "stopId": 3022,
        "stop_name": "公堂下村"
      }, {
        "stopId": 3023,
        "stop_name": "海南LNG"
      }, {
        "stopId": 3024,
        "stop_name": "中石化香港"
      }, {
        "stopId": 3025,
        "stop_name": "海南逸盛"
      }, {
        "stopId": 3026,
        "stop_name": "中石化油储"
      }, {
        "stopId": 3027,
        "stop_name": "华信孚宝"
      },
      {
        "stopId": 3028,
        "stop_name": "山东高速"
      },
    ],

    stop2: {},
  },


  stop2: function() {

    for (let i = 0; i < stop.length; i++) {
      stop2[i] = stop[i]
    }
  },

  onLoad: function() {
    
  },

  formSubmit: function(e) {
    console.log(e)
    let start = e.detail.value.start; //获取起点
    let destination = e.detail.value.destination; //获取终点  
    this.setData({
      start,
      destination
    })
  },
  bindPickerChange: function(e) {
    // console.log(e)
    this.setData({
      index: e.detail.value
    })
  },
  query: function(e) {
    db.collection("stop_name").get({
      success: function(res) {
        console.log(res)
      }
    })

  }

})