// pages/natural_language/natural_language.js
//index.js
var app = getApp()
Page({
  data: {
    newsdata: ''
  },

  loadData: function () {
    var that = this;
    wx.request({
      url: 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10',

      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          newsdata: res.data
        });
      }
    })
  }
})