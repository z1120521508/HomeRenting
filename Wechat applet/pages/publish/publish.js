// pages/publish/publish.js
var that
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: '',
    abled: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    this.setData({
      userphone: getApp().globalData.userphone
    })
  },

  //获取填写的内容
  getTextAreaContent: function (event) {
    that.data.content = event.detail.value;
  },

  submit: function (e) {
    console.log(that.data.content)
    if (that.data.content == '') {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      })
      return
    }
    if (!app.globalData.login) {
      wx.showToast({
        title: '您尚未登录！',
        icon: 'none'
      })
      return
    }
    if (that.data.content.length >= 100) {
      wx.showToast({
        title: '字太多啦！',
        icon: 'none'
      })
      return
    }
    wx.showLoading({
      title: '处理中',
    })
    this.setData({
      abled: false
    })
    wx.request({
      url:  "http://172.20.10.6:8888/api/message/resource",
      method: 'POST',
     
      data: {
        text: that.data.content,
        userphone: app.globalData.userphone,
        usernickname: app.globalData.usernickname
      },
      success(res) {
        console.log(res.data)
        setTimeout(function (e) {
          var pages = getCurrentPages()
          var prevPage = pages[pages.length - 2]
          wx.navigateBack({
            delta: 1,
          })
          prevPage.onLoad()
        }, 2000)

        wx.showToast({
          title: '已完成',
        })


      },
      fail(res) {
        wx.hideLoading({})
        wx.showToast({
          title: '系统错误',
        })
        that.setData({
          abled: true
        })
        console.log(res)
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