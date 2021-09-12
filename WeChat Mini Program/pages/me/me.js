// pages/me/me.js
var app = getApp();
var that
Page({

  /**
   * 页面的初始数据
   */
  data: {
    new_request: false,
    new_preview: false,
    avaupdate: false,
    login: app.globalData.login
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    if (!app.globalData.login) {
      return
    }
    this.setData({
      userphone: getApp().globalData.userphone,
      usernickname: getApp().globalData.usernickname,
      login: app.globalData.login,
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
  onShow: function (options) {
    if (!app.globalData.login) {
      return
    }
    this.setData({
      userphone: getApp().globalData.userphone,
      username: getApp().globalData.username,
    })
  
  },

  clickUser: function (e) {
    if (!app.globalData.login) {
      wx.navigateTo({
        url: '../Login/Login',
      })
      return
    }
    wx.navigateTo({
      url: '../../pages/update_user/update_user',
    })
  },


  

  //退出登录
  outClick: function () {
    if (!app.globalData.login) {
      wx.showToast({
        title: '您尚未登录！',
        icon: 'none'
      })
      return
    }
    wx.showLoading({
      title: '处理中',
    })
    app.globalData.login = false
    app.globalData.userphone = ''
    wx.clearStorage({})
    setTimeout(
      function () {
        wx.hideLoading({})
        that.setData({
          login: false
        })
      },
      500
    )

    this.onShow()
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