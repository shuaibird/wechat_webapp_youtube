var utils = require('../../utils/utils.js')

Page({
  data: {
    completLoading: false,
    videos: []
  },
  onLoad: function() {
    var that = this
    wx.request({
      url: utils.generateApiUrl('Love Will Tear Us Apart'),
      success: function(res) {
        that.setData({
          completeLoading: true,
          videos: res.data.items
        })
        console.log(that.data.videos)
      }
    })
  }
})
