// pages/post_maihouse/post_maihouse.js
var that
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls: '',
    housepicture: '',
    houseaddress: '',
    housetype: '',
    username: '',
    userphone: '',
    houseproperty: '',
    houseorientation: '',
    houseage: 0,
    houseprice: 0,
    housearea: 0.00,
    houseelevator: 0,
    abled: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
  },

  changePage1: function (e) {
    wx.navigateTo({
      url: '../post_maihouse/post_maihouse',
    })
  },

  changePage2: function (e) {
    wx.navigateTo({
      url: '../post_house/post_house',
    })
  },
  //地址
  OnAdsInput: function (e) {
    this.setData({
      houseaddress: e.detail.value
    })
  },
  //户型
  OnTypeInput: function (e) {
    this.setData({
      housetype: e.detail.value
    })
  },
  //产权
  OnProInput: function (e) {
    this.setData({
      houseproperty: e.detail.value
    })
  },
  //房主姓名
  OnOwnernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  //房主电话
  OnOwnerphoneInput: function (e) {
    this.setData({
      userphone: e.detail.value
    })
  },

  //朝向
  OnOriInput: function (e) {
    this.setData({
      houseorientation: e.detail.value
    })
  },
  //房龄
  OnHouseageInput: function (e) {
    this.setData({
      houseage: e.detail.value
    })
  },

  //面积
  OnAreaInput: function (e) {
    this.setData({
      housearea: e.detail.value
    })
  },

  //房价
  OnPriceInput: function (e) {
    this.setData({
      houseprice: e.detail.value
    })
  },

  //有无电梯
  DiantiSwitch: function (e) {
    console.log('switch类型开关当前状态-----', e.detail.value);
    if (e.detail.value == false) {
      this.setData({
        houseelevator: 0
      })
    } else if (e.detail.value == true) {
      this.setData({
        houseelevator: 1
      })
    }

  },

  RemoveImg: function (event) {
    var position = event.currentTarget.dataset.index;
    this.data.housepicture.splice(position, 1);
    // 渲染图片
    this.setData({
      housepicture: this.data.housepicture,
    })
  },

  UploadImg: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        that.setData({
          housepicture: tempFilePaths
        })
      }
    })
    console.log(this.data.housepicture)
  },



  OnPostClick: function (e) {
    var houseprice = this.data.houseprice
    var userphone = this.data.userphone
    if (!app.globalData.login) {
      wx.showToast({
        title: '您尚未登录！',
        icon: 'none'
      })
      return
    }
    if (houseprice.length == 0) {
      wx.showToast({
        title: '请输入正确的金额格式',
        icon: 'none'
      })
      return
    }
    if (userphone.length != 11) {
      wx.showToast({
        title: '请输入正确的电话号码',
        icon: 'none'
      })
      return
    }
    if (this.data.houseaddress == '' || this.data.housetype == '' || this.data.houseprice == '') {
      wx.showToast({
        title: '请输入完整信息',
        icon: 'none'
      })
      return
    }
    if (this.data.housepicture.length == 0) {
      wx.showToast({
        title: '请附带至少一张预览图',
        icon: 'none'
      })
      return
    }
    this.data.houseaddress = this.data.houseaddress.replace('\n', ' ')
    wx.showLoading({
      title: '处理中……',
    })
    this.setData({
      abled: false,
    })
    var url = 'http://172.20.10.6:8888/api/house/resource'
    wx.request({
      url: url,
      method: 'POST',
      data: {
        username: that.data.username,
        userphone: that.data.userphone,
        houseaddress: that.data.houseaddress,
        housetype: that.data.housetype,
        housepicture: that.data.housepicture + "",
        houseorientation: that.data.houseorientation,
        housejoinrent: that.data.housejoinrent,
        houseage: that.data.houseage,
        houseprice: that.data.houseprice,
        housearea: that.data.housearea,
        houseelevator: that.data.houseelevator,

      },
      success(res) {
        console.log(res.data)

        //显示消息提示框
        wx.showLoading({
          title: '上传中',
          mask: true
        })

        wx.uploadFile({
          url: url,
          filePath: that.data.housepicture,
          // 与后台接收图片文件的参数名相同
          name: 'housepicture',
          header: {
            "Content-Type": "multipart/form-data",
          },
          success: function (res) {
            console.log(res);
          }
        })


        setTimeout(function () {
          wx.navigateBack()
        }, 2000)
        wx.showToast({
          title: '发布成功！',
        })
      },
      fail(res) {
        wx.showToast({
          title: '发布失败！',
          icon: 'none'
        })
        console.log(res)
        that.setData({
          abled: true
        })
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