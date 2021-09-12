// pages/post_house/post_house.js
var that
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {     
    username: '',
    urls:'',
    userphone: '', 
    houseaddress: '',
    housetype: '',
    rentnotice: '',
    housepicture:'', 
    houseorientation: '',
    housejoinrent:0,
    houseage: 0,
    houserent: 0.00,
    housearea: 0.00,
    houseelevator:0,
    abled: true,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this
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
//须知
OnNoteInput: function (e) {
  this.setData({
    rentnotice: e.detail.value
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

//租金
OnRentInput: function (e) {
  this.setData({
    houserent: e.detail.value
  })
},

//有无电梯
  DiantiSwitch: function(e) {
    console.log('switch类型开关当前状态-----', e.detail.value);
    if(e.detail.value==false){
      this.setData({    
        houseelevator: 0
        })
    }
      
    else if(e.detail.value==true){
      this.setData({    
        houseelevator: 1
        })
    }
    
  },

  //是否合租
  JoinSwitch: function(e) {
    console.log('switch类型开关当前状态-----', e.detail.value);
    if(e.detail.value==false){
      this.setData({    
        housejoinrent: 0
        })
    }
      
    else if(e.detail.value==true){
      this.setData({    
        housejoinrent: 1
        })
    }
   
  },

  UploadImg: function ()  {
   // var housepicture = that.data.housepicture
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths=res.tempFilePaths
        that.setData({
          housepicture: tempFilePaths
        })
      }
    })
    console.log(this.data.housepicture)
},
  
  

  RemoveImg: function (event) {
    // 渲染图片
    this.setData({
      housepicture: '',
    })
  },



  OnPostClick: function (e) {
    var houserent = that.data.houserent
    var userphone = this.data.userphone
    if (!app.globalData.login) {
      wx.showToast({
        title: '您尚未登录！',
        icon: 'none'
      })
      return
    }
    if(houserent>99999 || houserent<=0){
      wx.showToast({
        title: '租金范围为 0 ~ 99999',
        icon: 'none'
      })
      return
    }
  
    if (houserent.length == 0) {
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
    if (this.data. houseaddress == '' || this.data.housetype == '' || this.data.houserent == '') {
      wx.showToast({
        title: '请输入完整信息',
        icon: 'none'
      })
      return
    }
   
    if(this.data.housepicture == '')
    {
      wx.showToast({
        title: '请附带一张预览图',
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
    })    

    var url = "http://172.20.10.6:8888/api/house/resource"

    wx.request({
      url:url,
      method: 'POST',
      data: {     
        username: that.data.username,
        userphone: that.data.userphone, 
        houseaddress: that.data.houseaddress,
        housetype: that.data.housetype,
        rentnotice: that.data.rentnotice,
        housepicture:that.data.housepicture+"", 
        houseorientation:that.data.houseorientation,
        housejoinrent:that.data.housejoinrent,
        houseage: that.data.houseage,
        houserent: that.data.houserent,
        housearea:that.data.housearea,
        houseelevator:that.data.houseelevator,    
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
              "content-type": "multipart/form-data",             
            },
            success: function(res) {
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