// pages/index/pickupSucc/pickupSucc.js
let getTime = require('../../../utils/getTime.js')
let app = getApp();
let globalData = app.globalData;
let baseUrl = globalData.baseUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chestid: "",
    name: "",
    company: "",
    time: "",
    phone:""
  },
  toEnter: function () {
    wx.navigateTo({
      url: '../enterVercode/enterVercode',
    })
  },
  quit: function () {
    wx.navigateTo({
      url: '../index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: `${baseUrl}/takeout/success/${globalData.vercode}`,
      method: 'GET',
      header: {
        "Content-type": "application/json"
      },
      success: (res) => {
        console.log(res);
        if (res.data.code === 200200) {
          let time = getTime(new Date(res.data.time).getTime());
          this.setData({
            chestid: res.data.chestid,
            company: res.data.company,
            name: res.data.name,
            time: time,
            phone: res.data.phone,
          })
        } else {
          wx.navigateTo({
            url: '../index',
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})