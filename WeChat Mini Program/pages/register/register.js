// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userphone: '',
    userpassword: '',
    usernumber: '',
    username:'',
    usernickname:'',
    useraddress:'',
    usersex: "男",
 
  },
//密码
  passwordInput: function (e) {
    this.setData({
      userpassword: e.detail.value
    });
    this.setData({
      pwdinput: true
    });
  },
//手机
  phoneInput: function (e) {
    this.setData({
      userphone: e.detail.value
    });
    this.setData({
      phoneinput: true
    });
  },
//确认密码
  verpwdInput: function (e) {
    this.setData({
      verpwd: e.detail.value
    });
  },
//姓名
  nameInput: function (e) {
    this.setData({
      username: e.detail.value
    });
    this.setData({
      nameinput: true
    });
  },
//昵称
  nicknameInput: function (e) {
    this.setData({
      usernickname: e.detail.value
    });
    this.setData({
      nicknameinput: true
    });
  },

  //身份证号
  idInput: function (e) {
    this.setData({
      usernumber: e.detail.value
    });
    this.setData({
      idinput: true
    });
  },
//地址
AdsInput: function (e) {
    this.setData({
      useraddress: e.detail.value
    });
    this.setData({
      adsinput: true
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

//性别
  genderChange: function (e) {
    if (e.detail.value == "1") {
      this.setData({
        usersex: "男"
      })
    } else {
      this.setData({
        usersex: "女"
      })
    }
  },

  //注册
  register: function (e) {
    var that = this
    var now_time = new Date()
    if (now_time - this.data.taptime < 1000) return;
    this.setData({
      taptime: now_time
    })
    var app = getApp()
    var data = this.data
    if (!this.data.phoneinput || !this.data.pwdinput || !this.data.nameinput || !this.data.nicknameinput || !this.data.idinput) {
      wx.showToast({
        title: '请输入完整信息',
        icon: 'none'
      })

      return;
    }

    if (data.userpassword.length <= 5 || data.userpassword.length > 20) {
      wx.showToast({
        title: '密码长度应在6与20之间',
        icon: 'none'
      })
      return;
    }

    if (data.verpwd != data.userpassword) {
      wx.showToast({
        title: '两次输入密码不一致',
        icon: 'none'
      })
      return;
    }

    if (this.data.userphone.length != 11) {
      wx.showToast({
        title: '手机号码格式错误',
        icon: 'none'
      })
      return;
    }

    if (data.usernumber.length != 18) {
      wx.showToast({
        title: '身份证号格式错误',
        icon: 'none'
      })
      return;
    }

    // 加载
    wx.showToast({
      title: '请稍等',
      icon: 'loading',
      duration: 10000
    })


    wx.request({
      url: 'http://172.20.10.6:8888/api/user/register',
      method:'POST',
      header: {  
        'content-type': 'application/json'  
      },
      data: {
        userphone: that.data.userphone,
        userpassword: that.data.userpassword,
        usernumber: that.data.usernumber,
        username:that.data.username,
        usernickname:that.data.usernickname,
        useraddress:that.data.useraddress,
        usersex: that.data.usersex,
     
      },
      success(res) {
        console.log(res.data)
        if (res.data == "-1") {
          wx.showToast({
            title: '该用户已存在',
            icon: 'none'
            })
            return
          } else if (res.data == "1") {
            wx.showToast({
              title: '数据库系统错误！',
              icon: 'none'
            })
          } else {
            setTimeout(function () {
              wx.navigateBack({})
            }, 1000)
            wx.showToast({
              title: '注册成功！',
            })

          }
      },
        fail(res) {
          console.log(res)
        },
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