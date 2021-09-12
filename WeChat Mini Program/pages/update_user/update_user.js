// pages/update_user/update_user.js
const app = getApp()
var that
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    this.setData({
      
      userphone: app.globalData.userphone,
      usernickname: options.usernickname,
      useraddress: options.useraddress,
      gender: '男',
      abled: true,
      updateava: false
    })

  },
  nameInput: function (e) {
    this.setData({
      nuernickname: e.detail.value
    })
  },

  OnAdsInput: function (e) {
    this.setData({
      useraddress: e.detail.value
    })
  },


  updateClick: function (e) {
    if(this.data.useraddress==undefined){
      this.data.useraddress = ' '
    }
    var url = app.globalData.url + "op=update_user&name=" + encodeURI(this.data.name) + "&ads=" + encodeURI(this.data.ads) + "&ident=" + this.data.ident + "&phone=" + this.data.phone

    wx.showLoading({
      title: '处理中',
    })
    this.setData({
      abled: false
    })
    wx.request({
      url: url,
      success(res) {
        if (res.data == 0) {
          wx.showToast({
            title: '修改成功',
          })
          var pages = getCurrentPages()
          var prevPage = pages[pages.length-3]
          prevPage.setData({
            avaupdate: true
          })
          wx.clearStorageSync()
          setTimeout(
            function (e) {
              wx.navigateBack({
                delta: 2,
              })
            }, 2000)

          wx.showToast({
            title: '修改完成',
          })
          app.globalData.usernickname = that.data.usernickname

        } else {
          wx.showToast({
            title: '系统错误！',
            icon: 'none'
          })
        }
      },
      fail(res) {
        wx.showToast({
          title: '系统错误！',
          icon: 'none'
        })
        that.setData({
          abled: true
        })
      }
    })

  },



})