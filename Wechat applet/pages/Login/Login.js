// pages/Login/Login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userphone: '',
    userpassword: '',
  },

  phoneInput: function (e) {
    this.setData({
      userphone: e.detail.value
    });
  },

  passwordInput: function (e) {
    this.setData({
      userpassword: e.detail.value
    });
  },

  register_click: function (e) {
    wx.navigateTo({
      url: '../register/register',
    })
  },

  loginclick: function (e) {
    var app = getApp()


  /*  if (this.userphone.length == 0 || this.data.userpassword.length == 0) {
      wx.showToast({
        title: '请输入账号和密码',
        icon: 'none'
      })
      return;
    }
*/
    if (this.data.userphone.length != 11) {
      wx.showToast({
        title: '请输入正确格式的手机号',
        icon: 'none'
      })
      return;
    }
//
    var url = 'http://172.20.10.6:8888/api/user/login'

    wx.showToast({
      title: '请稍等',
      icon: 'loading',
      duration: 10000
    })
    var that = this
    wx.request({
      url: url,
      method:"POST",
      data:{
        userphone: that.data.userphone,
        userpassword: that.data.userpassword,
      }, 
      success(res) {
        console.log(res.data)
        //var str = JSON.stringify(res.data);
        var s=res.data.split(' ')[0]
        //console.log(str)
        if (s == "1") {
          app.globalData.userphone = that.data.userphone
          app.globalData.usernickname = res.data.split(' ')[1]
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

          console.log(app.globalData.usernickname)
        } else {
          wx.showToast({
            title: '登录失败！',
            icon: 'none'
          })
        } 
      }
    })
    console.log(url)
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