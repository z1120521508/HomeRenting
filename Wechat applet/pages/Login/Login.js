// pages/Login/Login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_phone: '',
    user_password: ''
  },

  passwordInput: function (e) {
    this.setData({
      user_password: e.detail.value
    });
  },

  phoneInput: function (e) {
    this.setData({
      user_phone: e.detail.value
    });
  },



  loginclick: function (e) {
    var app = getApp()
  

    if (this.data.user_phone.length == 0 || this.data.user_password.length == 0) {
      wx.showToast({
        title: '请输入账号和密码',
        icon: 'none'
      })
      return;
    }

    var url = 'https://api.houserenting.com/information/users'

    wx.showToast({
      title: '请稍等',
      icon: 'loading',
      duration: 10000
    })
    var that = this
    wx.request({
      url: url,
      success(res) {
        var s = res.data.split(' ')[0]
        if (s == '1') {
          app.globalData.user_phone = that.data.user_phone
          app.globalData.name = res.data.split(' ')[1]
          app.globalData.login = true
          var pages = getCurrentPages()
          var prevpage = pages[pages.length - 2]
          prevpage.onLoad()
          setTimeout(function () {
            wx.navigateBack({})
          }, 1500)

          wx.showToast({
            title: '登录成功',
          })

          console.log(app.globalData.name)
        } else if (s == '-1') {
          wx.showToast({
            title: '数据库系统错误！',
            icon: 'none'
          })
        } else {
          wx.showToast({
            title: '用户名或密码错误！',
            icon: 'none'
          })
        }
      }
    })
    console.log(url)
  },

  register_click: function (e) {
    wx.navigateTo({
      url: '../register/register',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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