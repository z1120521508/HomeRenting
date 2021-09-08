// pages/post_maihouse/post_maihouse.js
var that
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 图片URL地址数组
    urls: [],
    // 图片文件数组
    housepicture: [],
    houseaddress: '',
    housetype: '',
    username: '',
    userphone: '',
    houseproperty: '',
    houseorientation: '',
    houseage: 0,
    houseprice:0,
    housearea: 0.00,
    houseelevator:false,
    abled: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
  },

  changePage1: function(e) {
    wx.navigateTo({
      url: '../post_maihouse/post_maihouse',
    })
  },

  changePage2: function(e) {
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
OnOwnernameInput: function(e){
  this.setData({
    username: e.detail.value
  })
},
//房主电话
OnOwnerphoneInput: function(e){
  this.setData({
    userphone: e.detail.value
  })
},

//朝向
OnOriInput: function(e){
  this.setData({
    houseorientation: e.detail.value
  })
},
//房龄
OnHouseageInput: function(e){
  this.setData({
    houseage: e.detail.value
  })
},

//面积
OnAreaInput: function(e){
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
  DiantiSwitch: function(e) {
    this.setData({
      dianti: e.detail.value
    })
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
    var housepicture = that.data.housepicture
    wx.chooseImage({
      count: 6 - housepicture.length,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        let imgSrc = res.tempFilePaths
        housepicture = housepicture.concat(imgSrc)
        that.setData({
          img_count: housepicture.length,
          housepicture: housepicture
        })
      }
    })
    console.log(that.data.housepicture)
  },
    


  OnPostClick: function (e) {
    var houseprice = this.data.houseprice  
    if (houseprice.length == 0) {
      wx.showToast({
        title: '请输入正确的金额格式',
        icon: 'none'
      })
      return
    }
    if (this.data. houseaddress == '' || this.data.housetype == '' || this.data.houseprice == '') {
      wx.showToast({
        title: '请输入完整信息',
        icon: 'none'
      })
      return
    }
    if(this.data.housepicture.length == 0)
    {
      wx.showToast({
        title: '请附带至少一张预览图',
        icon: 'none'
      })
      return
    }
    this.data.houseaddress = this.data.houseaddress.replace('\n',' ')
    wx.showLoading({
      title: '处理中……',
    })
    this.setData({
      abled: false,
      urls: []
    })
    var url = '你的服务器链接'
    wx.request({

      success(res) {
        console.log(res.data)
        var id = res.data.substring(0, res.data.length - 2)
        console.log(id)
        if (id == 'error') {
          wx.showToast({
            title: '数据库系统错误！',
            icon: 'none'
          })
          return
        }

        for (var i = 0; i < that.data.housepicture.length; i++) {
          //显示消息提示框
          wx.showLoading({
            title: '上传中' + (i + 1),
            mask: true
          })
          wx.uploadFile({
            url: url,
            filePath: that.data.housepicture[i],
            // 与后台接收图片文件的参数名相同
            name: 'housepicture',
            success: res => {
                // 将服务器返回的结果转换成为JSON对象
                var response = JSON.parse(res.data)
                if (response.code == app.globalData.code.FAIL) {    //操作失败
                    wx.showToast({
                        title: response.msg,
                        icon: 'none'
                    })
                    return
                }
                else if(response.code == app.globalData.code.SUCCESS) {   //操作成功
                  that.setData({
                      urls: that.data.urls.concat([response.data])
                  })
                
                }  
            }
        })
          
        }
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
        this.setData({
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