// pages/post_detail/post_detail.js
const app = getApp()
var that
Page({

  /**
   * 页面的初始数据
   */
  data: {
    abled: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    wx.request({
      url:  "http://172.20.10.6:8888/api/message/list ",
      success(res) {
        that.setData({
          id: options.id,
          userphone: res.data.userphone,
          text: res.data.text,
          usernickname: res.data.usernickname,
          phone: app.globalData.userphone,
          abled: true
        })

      }
    })
  },

  onOnPhoneClick: function (e) {
    wx.showActionSheet({
      itemList: ['呼叫', '添加联系人'],
      success: function (res) {
        console.log("点击电话 res：", res)
        if (res.tapIndex == 0) { //直接呼叫
          wx.makePhoneCall({
            phoneNumber: that.data.userphone,
            success: function (res_makephone) {
              console.log("呼叫电话返回：", res_makephone)
            }
          })
        } else if (res.tapIndex == 1) { //添加联系人
          wx.addPhoneContact({
            firstName: that.data.usernickname,
            mobilePhoneNumber: that.data.userphone,
            success: function (res_addphone) {
              console.log("电话添加联系人返回：", res_addphone)
            }
          })
        }
      }
    })
  },

  onOnDeleteClick: function (e) {
    wx.showModal({
      title: '删除',
      content: '确认删除该贴子？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          var url = '你的服务器链接'
          wx.showLoading({
            title: '处理中',
          })
          wx.request({
            url: url,
            success(res) {
              setTimeout(function (e) {
                var pages = getCurrentPages()
                var prevPage = pages[pages.length - 2]
                wx.navigateBack({
                  delta: 1,
                })
                prevPage.onLoad(), 2000
              })
              wx.showToast({
                title: '删除成功',
              })
            },
            fail(res) {
              wx.showToast({
                title: 'title',
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
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