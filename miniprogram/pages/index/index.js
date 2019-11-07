//index.js
let moment = require("../../utils/moment.js")
moment.locale("zh-CN");
const app = getApp()
const db = wx.cloud.database();
const _ = db.command; //

Page({
  data: {
    startTime: [],
    bus_name:[],
    destinationTime: [],
    start_stop_id: "",
    start_stop_name: "",
    destination_stop_id: "",
    destination_stop_name: "",

  },

  onLoad: function() {

  },

  startStop: function(e) {
    // console.log(e.detail.value)
    this.setData({
      start_stop_name: e.detail.value
    })
  },

  destinationStop: function(e) {
    // console.log(e.detail.value)
    this.setData({
      destination_stop_name: e.detail.value
    })
  },

  start: function(e) {
    let that = this
    let s = this.data.start_stop_name
    db.collection("stop_name")

      .where({
        stop_name: _.eq(s)
      })
      .get({
        success: function(res) {
          // console.log(res.data[0].stopId)
          that.setData({
            start_stop_id: res.data[0].stopId
          })
        }
      })

  },

  destination: function(e) {
    let that = this
    let d = this.data.destination_stop_name
    db.collection("stop_name")
      .where({
        stop_name: _.eq(d)
      })
      .get({
        success: function(res) {
          // console.log(res.data[0].stopId)
          that.setData({
            destination_stop_id: res.data[0].stopId
          })
        }
      })

  },

  startTime: function(e) {
    let that = this
    let st = this.data.start_stop_id
    db.collection("bus_time")
      .field({
        stopId:true,
        time:true,
        _id: false
      })
      .where({
        stopId: _.eq(st)
      })
      .get({
        success: function(res) {
          // console.log(res.data)
          that.setData({
            startTime: res.data
          })
        }
      })
    // console.log(this.data.startTime)

  },

  destinationTime: function(e) {
    let that = this
    let d = this.data.destination_stop_id
    db.collection("bus_time")
      .field({
        stopId: true,
        time: true,
        _id:false
      })
      .where({
        stopId: _.eq(d)
      })
      .get({
        success: function(res) {
          // console.log(res.data)
          that.setData({
            destinationTime: res.data
          })
        }
      })
    // console.log(this.data.destinationTime)

  },

})

// stop: [{
//   "stopId": 3001,
//   "stop_name": "海关"
// },
// {
//   "stopId": 3002,
//   "stop_name": "环卫公司"
// },
// {
//   "stopId": 3003,
//   "stop_name": "普瑞华庭"
// }, {
//   "stopId": 3004,
//   "stop_name": "洋浦大桥北"
// }, {
//   "stopId": 3005,
//   "stop_name": "信立花园"
// }, {
//   "stopId": 3006,
//   "stop_name": "铁炉村"
// }, {
//   "stopId": 3007,
//   "stop_name": "安泰小区"
// }, {
//   "stopId": 3008,
//   "stop_name": "公安局"
// }, {
//   "stopId": 3009,
//   "stop_name": "法院"
// }, {
//   "stopId": 3010,
//   "stop_name": "浦馨苑北"
// }, {
//   "stopId": 3011,
//   "stop_name": "阳光海湾"
// }, {
//   "stopId": 3012,
//   "stop_name": "检察院"
// }, {
//   "stopId": 3013,
//   "stop_name": "洋浦检疫局"
// }, {
//   "stopId": 3014,
//   "stop_name": "蓝领公寓二期"
// }, {
//   "stopId": 3015,
//   "stop_name": "洋浦技工学校"
// }, {
//   "stopId": 3016,
//   "stop_name": "公交公司"
// }, {
//   "stopId": 3017,
//   "stop_name": "新都社区"
// }, {
//   "stopId": 3018,
//   "stop_name": "新都工业园"
// }, {
//   "stopId": 3019,
//   "stop_name": "高山社区"
// }, {
//   "stopId": 3020,
//   "stop_name": "金海北门"
// }, {
//   "stopId": 3021,
//   "stop_name": "金海生活区"
// }, {
//   "stopId": 3022,
//   "stop_name": "公堂下村"
// }, {
//   "stopId": 3023,
//   "stop_name": "海南LNG"
// }, {
//   "stopId": 3024,
//   "stop_name": "中石化香港"
// }, {
//   "stopId": 3025,
//   "stop_name": "海南逸盛"
// }, {
//   "stopId": 3026,
//   "stop_name": "中石化油储"
// }, {
//   "stopId": 3027,
//   "stop_name": "华信孚宝"
// },
// {
//   "stopId": 3028,
//   "stop_name": "山东高速"
// },
// ],