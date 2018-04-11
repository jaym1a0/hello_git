//logs.js
const util = require('../../utils/util.js')
var Loger = require('../../utils/Loger.js')
const app = getApp()

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShow: function () {
    console.log('onshow')
    console.log(app.globalData.userInfo)
    Loger.PrintLog('jaymiao')
  },
  onReady: function () {
    console.log('onready')
  },
  onHide: function () {
    //alert('onhide');
    console.log('onhide')
  }
})
