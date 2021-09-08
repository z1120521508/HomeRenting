// pages/homeDetail/homeDetail.js
var that
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_phone: '',
    id: '',
    userphone: '',
    houseaddress: '',
    maxg: 1,
    houserent: 0.00,
    housetype: '',
    name: '',
    hads: '',
    hphone: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    this.setData({
      id: option.id,
      user_phone: app.globalData.userphone
    })
    that = this
    wx.request({
      url: "你的服务器链接",
      success(res) {
        
        var imgs = []
        for (var i = 1; i <= res.data.housepicture.length; i++) {
          imgs.push("你的图片链接")
        }

        that.setData({
          housepicture: imgs,
          houserent: (res.data.houserent).toFixed(2),
          housetype: res.data.housetype,
          houseaddress: res.data.houseaddress,
          username: res.data.username,
          userphone: res.data.userphone,
          rentstate: res.data.rentstate,
        })

      },
      fail(res) {
        setTimeout(function (e) {
          wx.navigateBack({})
        }, 2000)
        wx.showToast({
          title: '该页面不存在',
          icon: 'none'
        })
        return
      }
    })
  },

  OnImgClick: function (e) {
    wx.previewImage({
      urls: this.data.housepicture,
      current: e.currentTarget.dataset.idx
    })
  },

  OnPhoneClick: function (e) {
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
            firstName: that.data.username,
            mobilePhoneNumber: that.data.userphone,
            success: function (res_addphone) {
              console.log("电话添加联系人返回：", res_addphone)
            }
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